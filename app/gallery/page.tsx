"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ImageIcon, Video, Play, Search, Filter, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getAllGalleryItems, type GalleryItem } from "@/lib/firebase-service"

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<"all" | "image" | "video">("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const loadGalleryItems = async () => {
    try {
      setLoading(true)
      setError(null)
      const items = await getAllGalleryItems()
      setGalleryItems(items)
      setFilteredItems(items)
    } catch (err) {
      console.error("Error loading gallery items:", err)
      setError("Failed to load gallery items")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadGalleryItems()
  }, [])

  useEffect(() => {
    let filtered = galleryItems

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter((item) => item.type === filterType)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredItems(filtered)
  }, [galleryItems, searchTerm, filterType])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Gallery</h2>
            <p className="text-gray-600">Please wait while we load the gallery items...</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Gallery</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <Button onClick={loadGalleryItems} variant="outline">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Church Gallery</h1>
            <p className="text-xl text-gray-600">Moments of worship, fellowship, and community</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={filterType} onValueChange={(value: "all" | "image" | "video") => setFilterType(value)}>
                <SelectTrigger className="w-32 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto p-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {galleryItems.length === 0 ? "No Gallery Items Yet" : "No Results Found"}
            </h3>
            <p className="text-gray-500 mb-6">
              {galleryItems.length === 0
                ? "Check back soon for photos and videos from our church events!"
                : "Try adjusting your search or filter criteria."}
            </p>
            {searchTerm || filterType !== "all" ? (
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setFilterType("all")
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
                Showing {filteredItems.length} of {galleryItems.length} items
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          {item.type === "image" ? (
                            <Image
                              src={item.thumbnail || item.url || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <>
                              <Image
                                src={item.thumbnail || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 text-purple-600 ml-1" />
                                </div>
                              </div>
                            </>
                          )}
                          <div className="absolute top-2 right-2">
                            <Badge variant={item.type === "image" ? "default" : "secondary"} className="text-xs">
                              {item.type === "image" ? (
                                <ImageIcon className="w-3 h-3 mr-1" />
                              ) : (
                                <Video className="w-3 h-3 mr-1" />
                              )}
                              {item.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                            {item.tags.length > 0 && (
                              <div className="flex gap-1">
                                {item.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
                    <div className="relative">
                      {item.type === "image" ? (
                        <div className="relative aspect-video">
                          <Image
                            src={item.url || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${item.url.split("v=")[1]?.split("&")[0]}`}
                            title={item.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                          <div className="flex gap-2">
                            {item.tags.map((tag) => (
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
