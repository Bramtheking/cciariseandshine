"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

interface Event {
  id: string
  title: string
  date: any // Firebase Timestamp
  time: string
  location: string
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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "announcements")
        const q = query(eventsCollection, orderBy("date", "desc"))
        const querySnapshot = await getDocs(q)
        const eventsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[]
        setEvents(eventsList)
      } catch (err) {
        console.error("Error fetching events:", err)
        setError("Failed to load events. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p>Loading events...</p>
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in-up">
          Upcoming Events & Announcements
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Stay informed about our latest gatherings, special services, and community activities.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No upcoming events at the moment. Please check back soon!
          </p>
        ) : (
          events.map((event) => (
            <Card key={event.id} className="flex flex-col animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-purple-700">{event.title}</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" /> {formatDate(event.date)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-1" /> {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" /> {event.location}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </section>
    </main>
  )
}
