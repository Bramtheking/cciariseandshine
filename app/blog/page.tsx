"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  author: string
  date: any // Firebase Timestamp
  content: string
  imageUrl?: string
}

// Helper to format Firebase Timestamp
const formatDate = (timestamp: any) => {
  if (!timestamp) return "N/A"
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const blogCollection = collection(db, "blog")
        const q = query(blogCollection, orderBy("date", "desc"))
        const querySnapshot = await getDocs(q)
        const postsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BlogPost[]
        setBlogPosts(postsList)
      } catch (err) {
        console.error("Error fetching blog posts:", err)
        setError("Failed to load blog posts. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>Loading blog posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in-up">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Insights, reflections, and news from our community.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No blog posts available at the moment. Check back soon!
          </p>
        ) : (
          blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col animate-fade-in-up">
              {post.imageUrl && (
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-purple-700">{post.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  By {post.author} on {formatDate(post.date)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 line-clamp-3">{post.content}</p>
                <Link href={`/blog/${post.id}`} className="text-purple-600 hover:underline mt-4 block">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </section>
    </main>
  )
}
