import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Music } from "lucide-react"

const leaders = [
  {
    name: "Pastor John Doe",
    role: "Senior Pastor",
    image: "/placeholder.svg?height=400&width=400",
    slug: "senior-pastor",
    icon: Users,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Pastor Jane Smith",
    role: "Associate Pastor",
    image: "/placeholder.svg?height=400&width=400",
    slug: "associate-pastor",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Minister David Thompson",
    role: "Worship Leader",
    image: "/placeholder.svg?height=400&width=400",
    slug: "worship-leader",
    icon: Music,
    color: "from-blue-500 to-blue-600",
  },
]

export default function LeadershipSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">Our Leadership</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our church family with wisdom, love, and unwavering faith
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((leader, i) => {
            const IconComponent = leader.icon
            return (
              <Link key={leader.slug} href={`/leadership/${leader.slug}`}>
                <Card
                  className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-2 transition-all duration-500 animate-fade-in-up animation-delay-${
                    i * 200
                  } group overflow-hidden cursor-pointer`}
                >
                  <CardContent className="p-0 relative">
                    {/* Background decoration */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${leader.color} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    {/* Leader Image */}
                    <div className="aspect-square relative overflow-hidden rounded-t-3xl">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`bg-gradient-to-br ${leader.color} p-3 rounded-xl shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                          <p className={`font-semibold bg-gradient-to-r ${leader.color} bg-clip-text text-transparent`}>
                            {leader.role}
                          </p>
                        </div>
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${leader.color} hover:shadow-xl text-white rounded-full py-3 font-bold transform hover:-translate-y-1 transition-all duration-300 group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>

                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        className={`w-6 h-6 bg-gradient-to-r ${leader.color} bg-clip-text text-transparent`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
