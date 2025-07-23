"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, Sparkles, Star } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"

interface Event {
  id: string
  title: string
  description: string
  date: any
  time: string
  location: string
  createdAt: any
  imageUrl?: string
}

export default function EventsPreviewSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const q = query(collection(db, "announcements"), orderBy("date", "desc"), limit(3))
        const querySnapshot = await getDocs(q)
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[]
        setEvents(eventsData)
      } catch (error) {
        console.error("Error loading events:", error)
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "TBD"
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Upcoming Events</h2>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-blue-700">Loading events...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-32 w-28 h-28 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Upcoming Events</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Join us for fellowship and community</p>
          <div className="flex items-center justify-center space-x-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <Sparkles className="w-8 h-8 text-indigo-600" />
          </div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
              <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Events Yet</h3>
              <p className="text-gray-700">Check back soon for upcoming events and announcements!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {events.map((event, i) => (
                <Card
                  key={event.id}
                  className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-${
                    i * 200
                  } group overflow-hidden"
                >
                  <CardContent className="p-8 relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-700"></div>

                    {/* Featured badge for first event */}
                    {i === 0 && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                        <Star className="w-4 h-4 inline mr-1" />
                        Next Up!
                      </div>
                    )}

                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {event.description.substring(0, 100)}...
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-800 font-medium text-sm">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-800 font-medium text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-800 font-medium text-sm">{event.location}</span>
                      </div>
                    </div>

                    {/* Event image or placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      {event.imageUrl ? (
                        <img
                          src={event.imageUrl || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="w-12 h-12 text-blue-600" />
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-30"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Events Coming</h3>
                <p className="text-gray-700 mb-6">Stay connected with all our community events and announcements</p>
              </div>
              <Link href="/events">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  View All Events
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
