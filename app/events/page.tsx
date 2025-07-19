"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Star, Search, Filter, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { getAllEvents, type Event } from "@/lib/firebase-service"

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<"all" | "event" | "announcement">("all")

  const loadEvents = async () => {
    try {
      setLoading(true)
      setError(null)
      const eventsData = await getAllEvents()
      setEvents(eventsData)
      setFilteredEvents(eventsData)
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

  useEffect(() => {
    let filtered = events

    // Filter by type
    if (filterType !== "all") {
      filtered = filtered.filter((event) => event.type === filterType)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredEvents(filtered)
  }, [events, searchTerm, filterType])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Events</h2>
            <p className="text-gray-600">Please wait while we load the events...</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Events</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <Button onClick={loadEvents} variant="outline">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Announcements</h1>
            <p className="text-xl text-gray-600">Join us for fellowship and worship</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select
                value={filterType}
                onValueChange={(value: "all" | "event" | "announcement") => setFilterType(value)}
              >
                <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                  <SelectItem value="announcement">Announcements</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Events Content */}
      <div className="max-w-7xl mx-auto p-6">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {events.length === 0 ? "No Events Scheduled" : "No Results Found"}
            </h3>
            <p className="text-gray-500 mb-6">
              {events.length === 0
                ? "Check back soon for upcoming events and announcements!"
                : "Try adjusting your search or filter criteria."}
            </p>
            {searchTerm || filterType !== "all" ? (
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setFilterType("all")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            ) : null}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredEvents.length} of {events.length} events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/60"
                >
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
                      {event.tags.length > 0 && (
                        <div className="flex gap-1 mt-4">
                          {event.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
