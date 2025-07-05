import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, HandIcon as Hands, Star, Sparkles, Users } from "lucide-react"

export default function PrayerPreviewSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Prayer Requests</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
            We believe in the power of prayer and would love to pray for you
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Hands className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 animate-fade-in-up group overflow-hidden max-w-4xl mx-auto">
          <CardContent className="p-12 text-center relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

            {/* Floating prayer icons */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="absolute top-16 right-16 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <Star className="w-5 h-5 text-pink-600" />
            </div>
            <div className="absolute bottom-12 left-12 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>

            <div className="relative z-10">
              {/* Main icon with enhanced styling */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 scale-110"></div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Submit a Prayer Request</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're facing challenges, celebrating victories, or seeking God's guidance, our prayer team is
                here to stand with you in faith.
              </p>

              {/* Prayer statistics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { number: "500+", label: "Prayers Answered", icon: Heart },
                  { number: "24/7", label: "Prayer Support", icon: Users },
                  { number: "100%", label: "Confidential", icon: Star },
                ].map(({ number, label, icon: Icon }, index) => (
                  <div
                    key={label}
                    className={`text-center p-4 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg animate-fade-in-up animation-delay-${
                      300 + index * 100
                    }`}
                  >
                    <Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-black text-gray-900">{number}</div>
                    <div className="text-gray-700 font-medium text-sm">{label}</div>
                  </div>
                ))}
              </div>

              <Link href="/prayer-request">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  Share Your Prayer Request
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
