import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, BookOpen, Star, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background with purple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(219,39,119,0.15),transparent_40%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">About Arise and Shine CCI Thika</h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            We are a vibrant Christian community dedicated to spreading God's love and light in Thika and beyond.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-left group overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                <Target className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To arise and shine as beacons of Christ's love, transforming lives through the power of the Gospel,
                building strong Christian families, and impacting our community with God's grace and truth.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:-rotate-1 transition-all duration-700 animate-fade-in-right group overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-xl">
                <Eye className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a thriving church that raises disciples who arise and shine for Jesus Christ, impacting Thika,
                Kenya, and the nations with the transformative power of the Gospel.
              </p>
            </CardContent>
          </Card>

          <Link href="/our-story">
            <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-700 animate-fade-in-up group overflow-hidden cursor-pointer">
              <CardContent className="p-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Discover the journey of faith, growth, and community that has shaped Arise and Shine CCI Thika into
                  the vibrant church family we are today.
                </p>
                <div className="mt-6 text-purple-600 font-semibold">Click to read more →</div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Additional stats section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "15+", label: "Years of Ministry", icon: Heart },
            { number: "500+", label: "Church Members", icon: Users },
            { number: "50+", label: "Lives Transformed", icon: Star },
          ].map(({ number, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`text-center p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${index * 200}`}
            >
              <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-black text-gray-900 mb-2">{number}</div>
              <div className="text-gray-700 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
