import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-30 scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="Arise and Shine CCI Thika Logo"
                  width={55}
                  height={55}
                  className="rounded-full shadow-lg ring-4 ring-white/80 relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-gray-900 leading-tight">Arise and Shine</h1>
                <p className="text-sm font-semibold text-gray-600 leading-tight">CCI Thika</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200">
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link href="/events" className="text-purple-600 font-bold">
                Events
              </Link>
              <Link
                href="/sermons"
                className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200"
              >
                Sermons
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Header */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/30 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full bg-white/90 backdrop-blur-sm shadow-lg font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8">Events</h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              Join us for worship, fellowship, and special gatherings as we arise and shine together
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <Star className="w-8 h-8 text-pink-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: "Sunday Worship Service",
                description: "Join us for powerful worship, inspiring messages, and fellowship with our church family.",
                date: "Every Sunday",
                time: "9:00 AM - 12:00 PM",
                location: "Main Sanctuary",
                gradient: "from-purple-500 to-purple-600",
                featured: true,
              },
              {
                title: "Youth Conference 2024",
                description:
                  "A special gathering for young people to arise and shine for Christ with workshops and activities.",
                date: "March 15-17, 2024",
                time: "All Day",
                location: "Church Grounds",
                gradient: "from-purple-600 to-pink-600",
                featured: true,
              },
              {
                title: "Women's Fellowship",
                description: "Monthly gathering for women to connect, pray, and grow together in faith.",
                date: "First Saturday",
                time: "2:00 PM - 5:00 PM",
                location: "Fellowship Hall",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                title: "Community Outreach",
                description: "Serving our community with love and practical support for those in need.",
                date: "Last Saturday",
                time: "8:00 AM - 4:00 PM",
                location: "Various Locations",
                gradient: "from-purple-400 to-pink-500",
              },
            ].map((event, i) => (
              <Card
                key={i}
                className={`${
                  event.featured ? "lg:col-span-2" : ""
                } bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up animation-delay-${
                  i * 200
                } group overflow-hidden`}
              >
                <CardContent className="p-10 relative">
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${event.gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                  ></div>

                  <div className={event.featured ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
                    <div>
                      {event.featured && (
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                          Featured Event
                        </div>
                      )}

                      <h3 className={`${event.featured ? "text-4xl" : "text-2xl"} font-bold text-gray-900 mb-4`}>
                        {event.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{event.description}</p>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`bg-gradient-to-r ${event.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-gray-800 font-semibold text-lg">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div
                            className={`bg-gradient-to-r ${event.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-gray-800 font-semibold text-lg">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div
                            className={`bg-gradient-to-r ${event.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-gray-800 font-semibold text-lg">{event.location}</span>
                        </div>
                      </div>

                      <Button
                        className={`mt-8 bg-gradient-to-r ${event.gradient} hover:shadow-xl text-white rounded-full px-8 py-3 font-bold transform hover:-translate-y-1 transition-all duration-300`}
                      >
                        Learn More
                      </Button>
                    </div>

                    {event.featured && (
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl">
                          <Users className="w-24 h-24 text-white" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Star className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100/50 to-pink-100/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Christmas Celebration 2023",
                date: "December 25, 2023",
                description: "A joyful celebration of Christ's birth with special music and fellowship.",
                gradient: "from-red-500 to-green-500",
              },
              {
                title: "Harvest Festival",
                date: "November 2023",
                description: "Celebrating God's provision with thanksgiving and community sharing.",
                gradient: "from-orange-500 to-yellow-500",
              },
              {
                title: "Baptism Service",
                date: "October 2023",
                description: "Witnessing new believers take their step of faith through baptism.",
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((event, i) => (
              <Card
                key={i}
                className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${
                  i * 200
                } group`}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${event.gradient} opacity-20 rounded-full -translate-y-4 translate-x-4`}
                  ></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-purple-600 mb-4 font-semibold">{event.date}</p>
                  <p className="text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
