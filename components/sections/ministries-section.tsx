import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Music, Baby, UserCheck } from "lucide-react"

const ministries = [
  {
    title: "Youth Ministry",
    description: "Empowering the next generation through faith, fellowship, and fun activities.",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    slug: "youth",
  },
  {
    title: "Women's Ministry",
    description: "A supportive community where women grow in faith and build lasting friendships.",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    bgColor: "from-pink-50 to-pink-100",
    slug: "womens",
  },
  {
    title: "Men's Ministry",
    description: "Building strong men of faith through fellowship, study, and service.",
    icon: UserCheck,
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    slug: "mens",
  },
  {
    title: "Worship Ministry",
    description: "Leading our congregation in heartfelt worship through music and creative expression.",
    icon: Music,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    slug: "worship",
  },
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts and minds with age-appropriate lessons and loving care.",
    icon: Baby,
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    slug: "childrens",
  },
]

export default function MinistriesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">Our Ministries</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover ways to connect, grow, and serve in our vibrant church community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, i) => {
            const IconComponent = ministry.icon
            return (
              <Link key={ministry.slug} href={`/ministry/${ministry.slug}`}>
                <Card
                  className={`bg-gradient-to-br ${ministry.bgColor} border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-500 animate-fade-in-up animation-delay-${
                    i * 150
                  } group overflow-hidden cursor-pointer`}
                >
                  <CardContent className="p-8 relative">
                    {/* Background decoration */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${ministry.color} opacity-20 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className="relative z-10">
                      <div className={`bg-gradient-to-br ${ministry.color} p-4 rounded-2xl shadow-xl mb-6 w-fit`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{ministry.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{ministry.description}</p>

                      <Button
                        className={`w-full bg-gradient-to-r ${ministry.color} hover:shadow-xl text-white rounded-full py-3 font-bold transform hover:-translate-y-1 transition-all duration-300 group-hover:scale-105`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/80 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className={`w-3 h-3 bg-gradient-to-r ${ministry.color} rounded-full`}></div>
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
