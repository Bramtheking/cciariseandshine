"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, MapPin, Users, Heart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in real app, this would come from your JSON files
const leadershipData = {
  "pastor-john-doe": {
    name: "Pastor John Doe",
    role: "Senior Pastor",
    image: "/placeholder.svg?height=400&width=400", // Replace with actual Cloudinary URL
    bio: "Pastor John has been faithfully serving our congregation for over 15 years. His heart for God's people and passion for biblical teaching has helped shape our church into a thriving community of believers. He holds a Master of Divinity from Kenya Methodist University and is committed to raising up the next generation of Christian leaders.",
    contact: {
      email: "pastor.john@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      office: "Church Office, Main Building",
    },
    icon: Users,
    gradient: "from-purple-500 to-purple-600",
  },
  "pastor-jane-smith": {
    name: "Pastor Jane Smith",
    role: "Associate Pastor",
    image: "/placeholder.svg?height=400&width=400", // Replace with actual Cloudinary URL
    bio: "Pastor Jane brings incredible energy and passion to our youth ministry and community outreach programs. With a background in social work and theology, she has a unique ability to connect with people from all walks of life. Her innovative approach to ministry has helped our church reach new heights in community engagement.",
    contact: {
      email: "pastor.jane@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      office: "Youth Ministry Office",
    },
    icon: Heart,
    gradient: "from-purple-600 to-pink-600",
  },
  "elder-michael-brown": {
    name: "Elder Michael Brown",
    role: "Church Elder",
    image: "/placeholder.svg?height=400&width=400", // Replace with actual Cloudinary URL
    bio: "Elder Michael has been a pillar of our church community for over two decades. His deep knowledge of scripture and commitment to biblical teaching has made him an invaluable mentor to many. He leads our men's ministry and oversees our biblical education programs with wisdom and grace.",
    contact: {
      email: "elder.michael@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      office: "Elder's Office",
    },
    icon: BookOpen,
    gradient: "from-pink-500 to-purple-500",
  },
}

export default function LeadershipDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const leader = leadershipData[id as keyof typeof leadershipData]

  useEffect(() => {
    if (!leader) {
      router.push("/") // Redirect if leader not found
    }
  }, [leader, router])

  const handleBack = () => {
    router.push("/")
    // Restore scroll position after navigation
    setTimeout(() => {
      const scrollPosition = sessionStorage.getItem("leadershipScrollPosition")
      if (scrollPosition) {
        window.scrollTo(0, Number.parseInt(scrollPosition))
        sessionStorage.removeItem("leadershipScrollPosition")
      }
    }, 100)
  }

  if (!leader) {
    return <div>Loading...</div>
  }

  const Icon = leader.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Arise and Shine CCI Thika Logo"
                width={55}
                height={55}
                className="rounded-full shadow-lg ring-4 ring-white/80"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-gray-900 leading-tight">Arise and Shine</h1>
                <p className="text-sm font-semibold text-gray-600 leading-tight">CCI Thika</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={handleBack}
            variant="outline"
            className="mb-8 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Leadership
          </Button>
        </div>
      </section>

      {/* Leader Profile */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} opacity-20`}></div>
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6">
                    <div
                      className={`bg-gradient-to-br ${leader.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-12">
                  <div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${leader.gradient} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}
                  >
                    {leader.role}
                  </div>
                  <h1 className="text-4xl font-black text-gray-900 mb-6">{leader.name}</h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{leader.bio}</p>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <a
                        href={`mailto:${leader.contact.email}`}
                        className="text-purple-700 hover:text-purple-900 font-medium"
                      >
                        {leader.contact.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <a
                        href={`tel:${leader.contact.phone}`}
                        className="text-purple-700 hover:text-purple-900 font-medium"
                      >
                        {leader.contact.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700 font-medium">{leader.contact.office}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button
                      className={`bg-gradient-to-r ${leader.gradient} hover:shadow-xl text-white rounded-full px-8 py-3 font-bold transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-3 font-bold bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-800 border-0 rounded-3xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule a Meeting</h2>
              <p className="text-xl text-purple-100 mb-6">
                Would you like to meet with {leader.name.split(" ")[1]}? We'd be happy to arrange a time to connect.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium">
                Request Meeting
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
