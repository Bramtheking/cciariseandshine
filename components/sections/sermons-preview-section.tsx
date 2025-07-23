"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, User, BookOpen, Sparkles, Heart } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"

interface Sermon {
  id: string
  title: string
  description: string
  speaker: string
  date: any
  videoUrl: string
  createdAt: any
  imageUrl?: string
}

export default function SermonsPreviewSection() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSermons = async () => {
      try {
        const q = query(collection(db, "sermons"), orderBy("date", "desc"), limit(3))
        const querySnapshot = await getDocs(q)
        const sermonsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Sermon[]
        setSermons(sermonsData)
      } catch (error) {
        console.error("Error loading sermons:", error)
      } finally {
        setLoading(false)
      }
    }

    loadSermons()
  }, [])

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Recent"
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getYouTubeId = (url: string | undefined | null) => {
    if (!url || typeof url !== "string") {
      return null
    }
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  if (loading) {
    return (
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Recent Sermons</h2>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <span className="ml-3 text-green-700">Loading sermons...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-32 w-28 h-28 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Recent Sermons</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Messages that inspire and transform</p>
          <div className="flex items-center justify-center space-x-4">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            <Sparkles className="w-8 h-8 text-emerald-600" />
          </div>
        </div>

        {sermons.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Sermons Yet</h3>
              <p className="text-gray-700">Check back soon for inspiring messages and teachings!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {sermons.map((sermon, i) => {
                const youtubeId = getYouTubeId(sermon.videoUrl)
                const thumbnailUrl = youtubeId
                  ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
                  : sermon.imageUrl

                return (
                  <Card
                    key={sermon.id}
                    className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-${
                      i * 200
                    } group overflow-hidden"
                  >
                    <CardContent className="p-0 relative">
                      {/* Video thumbnail */}
                      <div className="aspect-video relative overflow-hidden rounded-t-3xl">
                        {thumbnailUrl ? (
                          <img
                            src={thumbnailUrl || "/placeholder.svg"}
                            alt={sermon.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
                            <BookOpen className="w-16 h-16 text-green-600" />
                          </div>
                        )}

                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-4 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-8 h-8 text-green-600 fill-current" />
                          </div>
                        </div>

                        {/* Featured badge for first sermon */}
                        {i === 0 && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            <Heart className="w-4 h-4 inline mr-1 fill-current" />
                            Latest
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{sermon.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{sermon.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-green-600" />
                            <span className="text-gray-800 font-medium text-sm">{sermon.speaker}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-green-600" />
                            <span className="text-gray-800 font-medium text-sm">{formatDate(sermon.date)}</span>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-60"></div>
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-30"></div>
                          </div>
                          <Link href={`/sermons/${sermon.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full"
                            >
                              Watch
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
                <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Messages</h3>
                <p className="text-gray-700 mb-6">Explore our complete library of inspiring sermons and teachings</p>
              </div>
              <Link href="/sermons">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  View All Sermons
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
