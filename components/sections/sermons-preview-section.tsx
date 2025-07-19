"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Video, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getLatestSermons, type Sermon } from "@/lib/firebase-service"

export default function SermonsPreviewSection() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadSermons = async () => {
    try {
      setLoading(true)
      setError(null)
      const sermonsData = await getLatestSermons(3)
      setSermons(sermonsData)
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

  if (loading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Sermons</h2>
            <p className="text-xl text-gray-600">Be encouraged by God's Word</p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            <span className="ml-2 text-gray-600">Loading sermons...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Sermons</h2>
            <p className="text-xl text-gray-600">Be encouraged by God's Word</p>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={loadSermons} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Sermons</h2>
          <p className="text-xl text-gray-600">Be encouraged by God's Word</p>
        </div>

        {sermons.length === 0 ? (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Sermons Yet</h3>
            <p className="text-gray-500 mb-6">Check back soon for inspiring messages from our pastors!</p>
            <Button asChild>
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {sermons.map((sermon) => (
                <Card key={sermon.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
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
                          <Video className="w-16 h-16 text-purple-400" />
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
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                <Link href="/sermons">View All Sermons</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
