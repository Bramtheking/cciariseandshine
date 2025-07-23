"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, ImageIcon, Video, Heart, Sparkles } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"

interface GalleryItem {
  id: string
  title: string
  description?: string
  imageUrl?: string
  videoUrl?: string
  type: "image" | "video"
  dateUploaded: any
}

export default function GalleryPreviewSection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        const galleryQuery = query(collection(db, "gallery"), orderBy("dateUploaded", "desc"), limit(5))
        const gallerySnapshot = await getDocs(galleryQuery)
        const items = gallerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as GalleryItem)
        setGalleryItems(items)
      } catch (error) {
        console.error("Error loading gallery items:", error)
      } finally {
        setLoading(false)
      }
    }

    loadGalleryItems()
  }, [])

  if (loading) {
    return (
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-700">Loading gallery...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(147,51,234,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(219,39,119,0.12),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Gallery</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Moments of worship, fellowship, and community</p>
          <div className="flex items-center justify-center space-x-4">
            <Camera className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        {galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No gallery items yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {galleryItems.map((item, i) => (
                <Card
                  key={item.id}
                  className={`bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-2 transition-all duration-500 animate-fade-in-up animation-delay-${
                    i * 100
                  } group`}
                >
                  <CardContent className="p-0 relative">
                    <div className="aspect-square bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300 flex items-center justify-center group-hover:from-purple-300 group-hover:to-pink-400 transition-all duration-500 relative overflow-hidden">
                      {item.type === "image" && item.imageUrl ? (
                        <img
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : item.type === "video" && item.videoUrl ? (
                        <video
                          src={item.videoUrl}
                          className="w-full h-full object-cover"
                          muted
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                      ) : (
                        <>
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-3 left-3 w-6 h-6 border-2 border-white rounded-full"></div>
                            <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-white rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="relative z-10 text-center">
                            {item.type === "video" ? (
                              <Video className="w-10 h-10 text-white mb-1 group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                              <ImageIcon className="w-10 h-10 text-white mb-1 group-hover:scale-110 transition-transform duration-300" />
                            )}
                          </div>
                        </>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Camera className="w-4 h-4 text-gray-800" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
                <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Capturing God's Moments</h3>
                <p className="text-gray-700 mb-6">
                  See how God is working in our church family through photos and videos
                </p>
              </div>
              <Link href="/gallery">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
