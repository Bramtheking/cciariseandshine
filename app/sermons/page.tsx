"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play, BookOpen, Search, Filter, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getAllSermons, type Sermon } from "@/lib/firebase-service"

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [filteredSermons, setFilteredSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSeries, setFilterSeries] = useState<string>("all")
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null)

  const loadSermons = async () => {
    try {
      setLoading(true)
      setError(null)
      const sermonsData = await getAllSermons()
      setSermons(sermonsData)
      setFilteredSermons(sermonsData)
    } catch (err) {
      console.error("Error loading sermons:", err)
      setError("Failed to load sermons")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSermons()
  }, [])

  useEffect(() => {
    let filtered = sermons

    // Filter by series
    if (filterSeries !== "all") {
      filtered = filtered.filter((sermon) => sermon.series === filterSeries)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (sermon) =>
          sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sermon.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredSermons(filtered)
  }, [sermons, searchTerm, filterSeries])

  const uniqueSeries = Array.from(new Set(sermons.map((sermon) => sermon.series).filter(Boolean)))

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Sermons</h2>
            <p className="text-gray-600">Please wait while we load the sermons...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Sermons</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <Button onClick={loadSermons} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermons</h1>
            <p className="text-xl text-gray-600">Be encouraged by God's Word</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={filterSeries} onValueChange={setFilterSeries}>
                <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Series</SelectItem>
                  {uniqueSeries.map((series) => (
                    <SelectItem key={series} value={series}>
                      {series}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Sermons Content */}
      <div className="max-w-7xl mx-auto p-6">
        {filteredSermons.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {sermons.length === 0 ? "No Sermons Yet" : "No Results Found"}
            </h3>
            <p className="text-gray-500 mb-6">
              {sermons.length === 0
                ? "Check back soon for inspiring messages from our pastors!"
                : "Try adjusting your search or filter criteria."}
            </p>
            {searchTerm || filterSeries !== "all" ? (
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setFilterSeries("all")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            ) : null}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredSermons.length} of {sermons.length} sermons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <Dialog key={sermon.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60">
                      <CardContent className="p-0">
                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                          {sermon.image ? (
                            <Image
                              src={sermon.image || "/placeholder.svg"}
                              alt={sermon.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : sermon.youtubeId ? (
                            <Image
                              src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
                              alt={sermon.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                              <BookOpen className="w-16 h-16 text-purple-400" />
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-purple-600 ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {sermon.preacher}
                            </Badge>
                            {sermon.series && (
                              <Badge variant="outline" className="text-xs">
                                {sermon.series}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {sermon.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{sermon.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{new Date(sermon.date).toLocaleDateString()}</span>
                            <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                              Watch Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
                    <div className="relative">
                      {sermon.youtubeId ? (
                        <div className="aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                            title={sermon.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                      ) : sermon.image ? (
                        <div className="relative aspect-video">
                          <Image
                            src={sermon.image || "/placeholder.svg"}
                            alt={sermon.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <BookOpen className="w-24 h-24 text-purple-400" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{sermon.preacher}</Badge>
                          {sermon.series && <Badge variant="outline">{sermon.series}</Badge>}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h2>
                        <p className="text-gray-600 mb-4">{sermon.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{new Date(sermon.date).toLocaleDateString()}</span>
                          <div className="flex gap-2">
                            {sermon.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
