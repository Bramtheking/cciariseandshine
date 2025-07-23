"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { PlayCircle } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  description?: string
  type: "image" | "video"
  imageUrl?: string
  videoUrl?: string
  dateUploaded: any // Firebase Timestamp
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

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const galleryCollection = collection(db, "gallery")
        const q = query(galleryCollection, orderBy("dateUploaded", "desc"))
        const querySnapshot = await getDocs(q)
        const itemsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as GalleryItem[]
        setGalleryItems(itemsList)
      } catch (err) {
        console.error("Error fetching gallery items:", err)
        setError("Failed to load gallery items. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryItems()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>Loading gallery...</p>
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in-up">Our Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          A visual journey through our church life and events.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No gallery items available yet. Check back soon!
          </p>
        ) : (
          galleryItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden animate-fade-in-up">
              <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                {item.type === "image" && item.imageUrl ? (
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                ) : item.type === "video" && item.videoUrl ? (
                  <>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <PlayCircle className="h-12 w-12 text-white/80" />
                    </div>
                    <video src={item.videoUrl} className="w-full h-full object-cover" muted preload="metadata" />
                  </>
                ) : (
                  <p className="text-gray-500">No media</p>
                )}
              </div>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg font-semibold text-purple-700 mb-2 line-clamp-2">{item.title}</CardTitle>
                {item.description && <p className="text-sm text-gray-600 line-clamp-3 mb-2">{item.description}</p>}
                <p className="text-xs text-gray-500">Uploaded: {formatDate(item.dateUploaded)}</p>
              </CardContent>
            </Card>
          ))
        )}
      </section>
    </main>
  )
}
