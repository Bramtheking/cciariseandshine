"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Loader2, AlertCircle, RefreshCw, ArrowRight } from "lucide-react"
import { getLatestBlogPosts, type BlogPost } from "@/lib/firebase-service"

export default function BlogPreviewSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadBlogPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const posts = await getLatestBlogPosts(3)
      setBlogPosts(posts)
    } catch (err) {
      console.error("Error loading blog posts:", err)
      setError("Failed to load blog posts")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBlogPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Insights, reflections, and community updates</p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            <span className="ml-2 text-gray-600">Loading blog posts...</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Insights, reflections, and community updates</p>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={loadBlogPosts} variant="outline">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600">Insights, reflections, and community updates</p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Blog Posts Yet</h3>
            <p className="text-gray-500 mb-6">Check back soon for inspiring articles and community updates!</p>
            <Button asChild>
              <Link href="/blog">View Blog</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60"
                >
                  <CardContent className="p-0">
                    {post.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.author}
                        </Badge>
                        <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                          Read More <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
