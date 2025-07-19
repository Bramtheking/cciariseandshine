"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, Users, Heart, Baby, Music, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in real app, this would come from your JSON files
const ministriesData = {
  "youth-ministry": {
    title: "Youth Ministry",
    description: "Empowering young people to arise and shine for Christ",
    fullDescription:
      "Our Youth Ministry is dedicated to nurturing the spiritual growth of young people aged 13-25. We provide a safe and welcoming environment where youth can explore their faith, build meaningful relationships, and develop leadership skills. Through weekly meetings, retreats, community service projects, and mentorship programs, we help young people discover their purpose in God's kingdom.",
    image: "/placeholder.svg?height=400&width=600", // Replace with actual Cloudinary URL
    icon: Users,
    gradient: "from-purple-500 to-purple-600",
    leader: "Pastor Jane Smith",
    contact: {
      email: "youth@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      meetingTime: "Wednesdays 7:00 PM",
      location: "Youth Hall",
    },
    activities: [
      "Weekly Bible Study",
      "Youth Worship Nights",
      "Community Service Projects",
      "Annual Youth Camp",
      "Leadership Training",
      "Sports and Recreation",
    ],
  },
  "womens-ministry": {
    title: "Women's Ministry",
    description: "Building strong Christian women and mothers",
    fullDescription:
      "Our Women's Ministry creates a supportive community where women of all ages can grow in their relationship with God and with each other. We focus on biblical womanhood, marriage and family life, personal development, and community outreach. Through Bible studies, prayer groups, and fellowship events, we encourage women to embrace their calling as daughters of the King.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Heart,
    gradient: "from-purple-600 to-pink-600",
    leader: "Sister Mary Johnson",
    contact: {
      email: "women@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      meetingTime: "Saturdays 2:00 PM",
      location: "Fellowship Hall",
    },
    activities: [
      "Weekly Bible Study",
      "Prayer Circles",
      "Marriage Enrichment",
      "Parenting Workshops",
      "Community Outreach",
      "Women's Retreats",
    ],
  },
  "mens-ministry": {
    title: "Men's Ministry",
    description: "Raising godly men and fathers in the community",
    fullDescription:
      "Our Men's Ministry is committed to developing men of integrity who lead their families and communities with godly wisdom. We provide opportunities for men to connect, grow spiritually, and support one another through life's challenges. Our programs focus on biblical manhood, leadership development, and community service.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Users,
    gradient: "from-pink-500 to-purple-500",
    leader: "Elder Michael Brown",
    contact: {
      email: "men@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      meetingTime: "Saturdays 6:00 AM",
      location: "Men's Fellowship Room",
    },
    activities: [
      "Early Morning Prayer",
      "Men's Bible Study",
      "Fatherhood Training",
      "Community Projects",
      "Men's Retreats",
      "Mentorship Programs",
    ],
  },
  "childrens-ministry": {
    title: "Children's Ministry",
    description: "Nurturing the next generation in God's love",
    fullDescription:
      "Our Children's Ministry provides a fun, safe, and nurturing environment where children can learn about God's love and develop a personal relationship with Jesus Christ. Through age-appropriate activities, Bible stories, songs, and games, we help children understand biblical truths and apply them to their daily lives.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Baby,
    gradient: "from-purple-400 to-pink-500",
    leader: "Teacher Sarah Wilson",
    contact: {
      email: "children@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      meetingTime: "Sundays 9:00 AM",
      location: "Children's Wing",
    },
    activities: [
      "Sunday School",
      "Bible Story Time",
      "Arts and Crafts",
      "Children's Choir",
      "Holiday Programs",
      "Family Fun Days",
    ],
  },
  "worship-ministry": {
    title: "Worship Ministry",
    description: "Leading the congregation in heartfelt worship",
    fullDescription:
      "Our Worship Ministry is passionate about creating an atmosphere where people can encounter God through music and worship. We believe that worship is not just about singing songs, but about expressing our love and devotion to God with our whole hearts. Our team is committed to excellence in music while maintaining a heart of worship.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Music,
    gradient: "from-pink-600 to-purple-600",
    leader: "Worship Leader David Kim",
    contact: {
      email: "worship@cciAriseAndShine.com",
      phone: "+254 XXX XXX XXX",
      meetingTime: "Thursdays 7:00 PM",
      location: "Sanctuary",
    },
    activities: [
      "Weekly Rehearsals",
      "Worship Team Training",
      "Special Music Events",
      "Recording Projects",
      "Community Concerts",
      "Instrument Lessons",
    ],
  },
}

export default function MinistryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const ministry = ministriesData[id as keyof typeof ministriesData]

  useEffect(() => {
    if (!ministry) {
      router.push("/") // Redirect if ministry not found
    }
  }, [ministry, router])

  const handleBack = () => {
    router.push("/")
    // Restore scroll position after navigation
    setTimeout(() => {
      const scrollPosition = sessionStorage.getItem("ministriesScrollPosition")
      if (scrollPosition) {
        window.scrollTo(0, Number.parseInt(scrollPosition))
        sessionStorage.removeItem("ministriesScrollPosition")
      }
    }, 100)
  }

  if (!ministry) {
    return <div>Loading...</div>
  }

  const Icon = ministry.icon

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
            Back to Ministries
          </Button>
        </div>
      </section>

      {/* Ministry Profile */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${ministry.gradient} opacity-20`}></div>
                  <Image
                    src={ministry.image || "/placeholder.svg"}
                    alt={ministry.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6">
                    <div
                      className={`bg-gradient-to-br ${ministry.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-12">
                  <div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${ministry.gradient} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}
                  >
                    Ministry
                  </div>
                  <h1 className="text-4xl font-black text-gray-900 mb-6">{ministry.title}</h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{ministry.fullDescription}</p>

                  {/* Ministry Leader */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ministry Leader</h3>
                    <p className="text-purple-700 font-medium">{ministry.leader}</p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact & Meeting Info</h3>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <a
                        href={`mailto:${ministry.contact.email}`}
                        className="text-purple-700 hover:text-purple-900 font-medium"
                      >
                        {ministry.contact.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <a
                        href={`tel:${ministry.contact.phone}`}
                        className="text-purple-700 hover:text-purple-900 font-medium"
                      >
                        {ministry.contact.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700 font-medium">{ministry.contact.meetingTime}</span>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-2xl">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700 font-medium">{ministry.contact.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministry.activities.map((activity, index) => (
              <Card key={activity} className="bg-white/60 backdrop-blur-lg border-white/50 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${ministry.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{activity}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className={`bg-gradient-to-r ${ministry.gradient} border-0 rounded-3xl`}>
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join {ministry.title}</h2>
              <p className="text-xl text-white/90 mb-6">
                Ready to get involved? We'd love to have you join our ministry family!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
