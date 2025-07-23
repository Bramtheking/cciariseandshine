"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, User, Calendar, BookOpen, Sparkles, Heart } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  date: any
  imageUrl?: string
}

export default function BlogPreviewSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const q = query(collection(db, "blog"), orderBy("date", "desc"), limit(2))
        const querySnapshot = await getDocs(q)
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogPost[]
        setPosts(postsData)
      } catch (error) {
        console.error("Error loading blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
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

  if (loading) {
    return (
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.15),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Latest Blog Posts</h2>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <span className="ml-3 text-purple-700">Loading posts...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-32 w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Latest Blog Posts</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Insights and inspiration from our community</p>
          <div className="flex items-center justify-center space-x-4">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Posts Yet</h3>
              <p className="text-gray-700">Check back soon for inspiring blog posts from our community!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {posts.map((post, i) => (
                <Card
                  key={post.id}
                  className={`${
                    i === 0 ? "lg:col-span-2" : ""
                  } bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-${
                    i * 200
                  } group overflow-hidden`}
                >
                  <CardContent className="p-10 relative">
                    {/* Background decoration */}
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${
                        i === 0 ? "from-purple-500 to-purple-600" : "from-purple-600 to-pink-600"
                      } opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className={i === 0 ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
                      <div>
                        {i === 0 && (
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                            ⭐ Featured Post
                          </div>
                        )}

                        <div className="flex items-start space-x-6">
                          <div
                            className={`bg-gradient-to-br ${
                              i === 0 ? "from-purple-500 to-purple-600" : "from-purple-600 to-pink-600"
                            } p-4 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}
                          >
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className={`${i === 0 ? "text-3xl" : "text-2xl"} font-bold text-gray-900 mb-3`}>
                              {post.title}
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                              {post.content.substring(0, 150)}...
                            </p>

                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <User className="w-5 h-5 text-purple-600" />
                                <span className="text-gray-800 font-semibold">{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                <span className="text-gray-800 font-semibold">{formatDate(post.date)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {i === 0 && (
                        <div className="relative">
                          <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                            {post.imageUrl ? (
                              <img
                                src={post.imageUrl || "/placeholder.svg"}
                                alt={post.title}
                                className="w-full h-full object-cover rounded-3xl"
                              />
                            ) : (
                              <>
                                <div className="absolute inset-0 opacity-20">
                                  <div className="absolute top-6 left-6 w-12 h-12 border-3 border-white rounded-full"></div>
                                  <div className="absolute bottom-6 right-6 w-8 h-8 border-3 border-white rounded-full"></div>
                                </div>
                                <div className="relative z-10 bg-white/90 rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                  <BookOpen className="w-12 h-12 text-purple-600" />
                                </div>
                              </>
                            )}
                          </div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Heart className="w-8 h-8 text-white fill-current" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${
                          i === 0 ? "from-purple-500 to-purple-600" : "from-purple-600 to-pink-600"
                        } rounded-full`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${
                          i === 0 ? "from-purple-500 to-purple-600" : "from-purple-600 to-pink-600"
                        } rounded-full opacity-60`}
                      ></div>
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${
                          i === 0 ? "from-purple-500 to-purple-600" : "from-purple-600 to-pink-600"
                        } rounded-full opacity-30`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
                <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Stories to Share</h3>
                <p className="text-gray-700 mb-6">Discover inspiring content and updates from our church community</p>
              </div>
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  Read All Posts
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
