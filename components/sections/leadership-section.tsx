"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, BookOpen, Crown, Award, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LeadershipSection() {
  const router = useRouter()

  const leaders = [
    {
      id: "pastor-john-doe",
      name: "Pastor John Doe",
      role: "Senior Pastor",
      description: "Leading with wisdom and compassion for over 15 years",
      icon: Users,
      gradient: "from-purple-500 to-purple-600",
      delay: "0",
    },
    {
      id: "pastor-jane-smith",
      name: "Pastor Jane Smith",
      role: "Associate Pastor",
      description: "Passionate about youth ministry and community outreach",
      icon: Heart,
      gradient: "from-purple-600 to-pink-600",
      delay: "200",
    },
    {
      id: "elder-michael-brown",
      name: "Elder Michael Brown",
      role: "Church Elder",
      description: "Dedicated to biblical teaching and spiritual growth",
      icon: BookOpen,
      gradient: "from-pink-500 to-purple-500",
      delay: "400",
    },
  ]

  const handleLeaderClick = (leaderId: string) => {
    // Store current scroll position
    sessionStorage.setItem("leadershipScrollPosition", window.scrollY.toString())
    router.push(`/leadership/${leaderId}`)
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background with purple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Our Leadership</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
            Meet the shepherds God has placed over our congregation
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Crown className="w-8 h-8 text-yellow-500" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Crown className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map(({ id, name, role, description, icon: Icon, gradient, delay }) => (
            <Card
              key={name}
              className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-4xl transform hover:-translate-y-8 hover:rotate-2 transition-all duration-700 animate-fade-in-up animation-delay-${delay} group overflow-hidden cursor-pointer`}
              onClick={() => handleLeaderClick(id)}
            >
              <CardContent className="p-10 text-center relative">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                ></div>

                {/* Profile image placeholder with enhanced styling */}
                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-lg opacity-30 scale-110`}
                  ></div>
                  <div
                    className={`w-32 h-32 bg-gradient-to-br ${gradient} rounded-full mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative z-10`}
                  >
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}
                >
                  {role}
                </div>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional leadership qualities section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: Award, label: "Excellence", color: "text-yellow-600" },
            { icon: Heart, label: "Compassion", color: "text-red-500" },
            { icon: Users, label: "Community", color: "text-blue-600" },
            { icon: Star, label: "Integrity", color: "text-purple-600" },
          ].map(({ icon: Icon, label, color }, index) => (
            <div
              key={label}
              className={`text-center p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${
                600 + index * 100
              }`}
            >
              <Icon className={`w-10 h-10 ${color} mx-auto mb-3`} />
              <div className="text-gray-900 font-bold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
