"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MessageSquare, Search, ArrowRight, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getAllBlogPosts, type BlogPost } from "@/lib/firebase-service"

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const loadBlogPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const posts = await getAllBlogPosts()
      setBlogPosts(posts)
      setFilteredPosts(posts)
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

  useEffect(() => {
    let filtered = blogPosts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [blogPosts, searchTerm])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Blog Posts</h2>
            <p className="text-gray-600">Please wait while we load the blog posts...</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Blog Posts</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <Button onClick={loadBlogPosts} variant="outline">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Church Blog</h1>
            <p className="text-xl text-gray-600">Insights, reflections, and community updates</p>
          </div>

          {/* Search */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto p-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {blogPosts.length === 0 ? "No Blog Posts Yet" : "No Results Found"}
            </h3>
            <p className="text-gray-500 mb-6">
              {blogPosts.length === 0
                ? "Check back soon for inspiring articles and community updates!"
                : "Try adjusting your search criteria."}
            </p>
            {searchTerm ? (
              <Button onClick={() => setSearchTerm("")} variant="outline">
                Clear Search
              </Button>
            ) : null}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} posts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Dialog key={post.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60">
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
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="space-y-6">
                      {post.image && (
                        <div className="relative aspect-video overflow-hidden rounded-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary">{post.author}</Badge>
                          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{post.content}</p>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex gap-2 mt-6">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
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
