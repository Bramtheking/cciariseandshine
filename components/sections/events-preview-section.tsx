import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Star, Sparkles } from "lucide-react"

export default function EventsPreviewSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Upcoming Events</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Join us for these special gatherings</p>
          <div className="flex items-center justify-center space-x-4">
            <Star className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Sparkles className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "Sunday Worship Service",
              description: "Join us for powerful worship and inspiring messages",
              date: "Every Sunday",
              time: "9:00 AM",
              location: "Main Sanctuary",
              gradient: "from-purple-500 to-purple-600",
              icon: Users,
            },
            {
              title: "Youth Conference 2024",
              description: "A special gathering for young people to arise and shine",
              date: "Coming Soon",
              time: "Details TBA",
              location: "Church Grounds",
              gradient: "from-purple-600 to-pink-600",
              icon: Star,
            },
          ].map((event, i) => (
            <Card
              key={i}
              className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-${
                i * 200
              } group overflow-hidden`}
            >
              <CardContent className="p-10 relative">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className="flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-br ${event.gradient} p-4 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{event.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-800 font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-800 font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-800 font-semibold">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                  <div className={`w-2 h-2 bg-gradient-to-r ${event.gradient} rounded-full`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${event.gradient} rounded-full opacity-60`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${event.gradient} rounded-full opacity-30`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-400">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
            <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Events Coming</h3>
            <p className="text-gray-700 mb-6">Stay updated with all our upcoming gatherings and special services</p>
          </div>
          <Link href="/events">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
