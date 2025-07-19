"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ImageIcon, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getLatestGalleryItems, type GalleryItem } from "@/lib/firebase-service"

export default function GalleryPreviewSection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadGalleryItems = async () => {
    try {
      setLoading(true)
      setError(null)
      const items = await getLatestGalleryItems(6)
      setGalleryItems(items)
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

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600">Moments of worship, fellowship, and community</p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            <span className="ml-2 text-gray-600">Loading gallery...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600">Moments of worship, fellowship, and community</p>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={loadGalleryItems} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600">Moments of worship, fellowship, and community</p>
        </div>

        {galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Gallery Items Yet</h3>
            <p className="text-gray-500 mb-6">Check back soon for photos and videos from our church community!</p>
            <Button asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {galleryItems.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.thumbnail || item.url}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-purple-600 ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={item.type === "image" ? "default" : "secondary"}
                          className="bg-white/90 text-gray-800"
                        >
                          {item.type === "image" ? "Photo" : "Video"}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                        {item.tags && item.tags.length > 0 && (
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
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
