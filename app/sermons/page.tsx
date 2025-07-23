"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

interface Sermon {
  id: string
  title: string
  preacher: string
  date: any // Firebase Timestamp
  youtubeUrl: string
  description: string
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

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const sermonsCollection = collection(db, "sermons")
        const q = query(sermonsCollection, orderBy("date", "desc"))
        const querySnapshot = await getDocs(q)
        const sermonsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Sermon[]
        setSermons(sermonsList)
      } catch (err) {
        console.error("Error fetching sermons:", err)
        setError("Failed to load sermons. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchSermons()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>Loading sermons...</p>
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in-up">Sermon Library</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Listen to inspiring messages and teachings from our pastors.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sermons.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No sermons available at the moment. Check back soon!
          </p>
        ) : (
          sermons.map((sermon) => (
            <Card key={sermon.id} className="flex flex-col animate-fade-in-up">
              <div className="relative w-full h-48 bg-black flex items-center justify-center rounded-t-lg overflow-hidden">
                {sermon.youtubeUrl ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${sermon.youtubeUrl.split("v=")[1].split("&")[0]}`}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                ) : (
                  <PlayCircle className="h-12 w-12 text-white/80" />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-purple-700">{sermon.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  By {sermon.preacher} on {formatDate(sermon.date)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 line-clamp-3">{sermon.description}</p>
                <Link href={`/sermons/${sermon.id}`} className="text-purple-600 hover:underline mt-4 block">
                  Watch Sermon
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </section>
    </main>
  )
}
