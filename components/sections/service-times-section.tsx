import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Calendar } from "lucide-react"

export default function ServiceTimesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Join Us for Worship</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
            Come and experience God's presence with our church family
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Clock className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Calendar className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Sunday Service */}
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up group overflow-hidden">
            <CardContent className="p-10 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Sunday Service</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Join us for our main worship service with inspiring messages, uplifting music, and fellowship.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-800 font-semibold">10:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-800 font-semibold">Main Sanctuary</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-30"></div>
              </div>
            </CardContent>
          </Card>

          {/* Wednesday Youth Service */}
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up animation-delay-200 group overflow-hidden">
            <CardContent className="p-10 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-4 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Youth Service</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    A dynamic service designed for young people to grow in faith and connect with peers.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-800 font-semibold">Wednesday - 7:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-800 font-semibold">Youth Hall</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
