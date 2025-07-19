"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Star, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getLatestEvents, type Event } from "@/lib/firebase-service"

export default function EventsPreviewSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadEvents = async () => {
    try {
      setLoading(true)
      setError(null)
      const eventsData = await getLatestEvents(3)
      setEvents(eventsData)
    } catch (err) {
      console.error("Error loading events:", err)
      setError("Failed to load events")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  if (loading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us for fellowship and worship</p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            <span className="ml-2 text-gray-600">Loading events...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us for fellowship and worship</p>
          </div>
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={loadEvents} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us for fellowship and worship</p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Events Scheduled</h3>
            <p className="text-gray-500 mb-6">Check back soon for upcoming events and announcements!</p>
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {events.map((event) => (
                <Card key={event.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {event.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {event.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={event.type === "event" ? "default" : "secondary"} className="text-xs">
                          {event.type === "event" ? "Event" : "Announcement"}
                        </Badge>
                        {event.featured && !event.image && (
                          <Badge variant="outline" className="text-xs text-yellow-600 border-yellow-600">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
