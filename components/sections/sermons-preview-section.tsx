import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, User, Calendar, Headphones, Star, BookOpen } from "lucide-react"

export default function SermonsPreviewSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(219,39,119,0.12),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Recent Sermons</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">Be inspired by God's word</p>
          <div className="flex items-center justify-center space-x-4">
            <Headphones className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <BookOpen className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "Arise and Shine in 2024",
              description: "A powerful message about stepping into God's purpose",
              speaker: "Pastor John Doe",
              date: "January 2024",
              gradient: "from-purple-500 to-purple-600",
              featured: true,
            },
            {
              title: "Walking in Faith",
              description: "Understanding God's plan for your life",
              speaker: "Pastor Jane Smith",
              date: "December 2023",
              gradient: "from-purple-600 to-pink-600",
            },
          ].map((sermon, i) => (
            <Card
              key={i}
              className={`${
                sermon.featured ? "lg:col-span-2" : ""
              } bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-${
                i * 200
              } group overflow-hidden`}
            >
              <CardContent className="p-10 relative">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${sermon.gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className={sermon.featured ? "grid md:grid-cols-2 gap-8 items-center" : ""}>
                  <div>
                    {sermon.featured && (
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-sm font-bold mb-4 shadow-lg">
                        ⭐ Featured Sermon
                      </div>
                    )}

                    <div className="flex items-start space-x-6">
                      <div
                        className={`bg-gradient-to-br ${sermon.gradient} p-4 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}
                      >
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`${sermon.featured ? "text-3xl" : "text-2xl"} font-bold text-gray-900 mb-3`}>
                          {sermon.title}
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">{sermon.description}</p>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <User className="w-5 h-5 text-purple-600" />
                            <span className="text-gray-800 font-semibold">{sermon.speaker}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-purple-600" />
                            <span className="text-gray-800 font-semibold">{sermon.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {sermon.featured && (
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-6 left-6 w-12 h-12 border-3 border-white rounded-full"></div>
                          <div className="absolute bottom-6 right-6 w-8 h-8 border-3 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10 bg-white/90 rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-purple-600" />
                        </div>
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <Star className="w-8 h-8 text-white fill-current" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                  <div className={`w-2 h-2 bg-gradient-to-r ${sermon.gradient} rounded-full`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${sermon.gradient} rounded-full opacity-60`}></div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${sermon.gradient} rounded-full opacity-30`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-400">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto mb-8">
            <Headphones className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Messages Available</h3>
            <p className="text-gray-700 mb-6">Listen to our complete library of inspiring sermons and teachings</p>
          </div>
          <Link href="/sermons">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              All Sermons
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
