import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, Heart, ArrowLeft, Star, Award, Users } from "lucide-react"
import Link from "next/link"

const leaders = {
  "senior-pastor": {
    name: "Pastor John Smith",
    role: "Senior Pastor",
    image: "/placeholder.svg?height=500&width=400",
    message:
      "Welcome to Christ Church International! I am blessed to serve as your Senior Pastor and lead this wonderful congregation. My heart's desire is to see every person grow in their relationship with Jesus Christ and discover their God-given purpose. Together, we are building a church that loves God, loves people, and makes a difference in our community and beyond.",
    email: "pastor@cciariseandshine.org",
    phone: "(555) 123-4567",
    yearsOfService: "15 years",
    education: "Master of Divinity, Seminary of Faith",
    specialties: ["Biblical Teaching", "Church Leadership", "Community Outreach"],
    color: "from-blue-600 to-blue-700",
    bgColor: "from-blue-50 to-blue-100",
  },
  "associate-pastor": {
    name: "Pastor Mary Johnson",
    role: "Associate Pastor",
    image: "/placeholder.svg?height=500&width=400",
    message:
      "It's my joy to serve alongside Pastor John in ministry. I'm passionate about discipleship, women's ministry, and helping people discover their spiritual gifts. My door is always open for prayer, counseling, or just a friendly conversation. I believe God has amazing plans for each of us!",
    email: "associate@cciariseandshine.org",
    phone: "(555) 234-5678",
    yearsOfService: "8 years",
    education: "Bachelor of Theology, Christian University",
    specialties: ["Discipleship", "Women's Ministry", "Pastoral Care"],
    color: "from-pink-600 to-pink-700",
    bgColor: "from-pink-50 to-pink-100",
  },
  "worship-leader": {
    name: "Minister David Thompson",
    role: "Worship Leader",
    image: "/placeholder.svg?height=500&width=400",
    message:
      "Music has always been my language of worship and connection with God. Leading our congregation in praise is not just my job—it's my calling. I believe worship opens our hearts to receive from God and creates an atmosphere where miracles happen. Come join us as we lift our voices together!",
    email: "worship@cciariseandshine.org",
    phone: "(555) 345-6789",
    yearsOfService: "6 years",
    education: "Bachelor of Music Ministry",
    specialties: ["Worship Leading", "Music Direction", "Team Building"],
    color: "from-purple-600 to-purple-700",
    bgColor: "from-purple-50 to-purple-100",
  },
  "youth-pastor": {
    name: "Pastor Michael Johnson",
    role: "Youth Pastor",
    image: "/placeholder.svg?height=500&width=400",
    message:
      "Young people are the future of our church and our world! I'm passionate about helping teenagers navigate life's challenges while building a strong foundation in Christ. Our youth ministry is a place where questions are welcome, friendships are formed, and futures are shaped by God's love.",
    email: "youth@cciariseandshine.org",
    phone: "(555) 456-7890",
    yearsOfService: "4 years",
    education: "Bachelor of Youth Ministry",
    specialties: ["Youth Development", "Mentoring", "Event Planning"],
    color: "from-green-600 to-green-700",
    bgColor: "from-green-50 to-green-100",
  },
}

export default function LeadershipPage({ params }: { params: { slug: string } }) {
  const leader = leaders[params.slug as keyof typeof leaders]

  if (!leader) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className={`py-24 px-4 relative overflow-hidden bg-gradient-to-br ${leader.bgColor}`}>
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-10`}></div>
          <div className="absolute top-20 right-32 w-28 h-28 bg-white/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-36 h-36 bg-white/20 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Leader Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${leader.color} opacity-20`}></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <Star className="w-5 h-5 inline mr-2 fill-current" />
                Leader
              </div>
            </div>

            {/* Leader Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">{leader.name}</h1>
              <p className={`text-2xl font-bold bg-gradient-to-r ${leader.color} bg-clip-text text-transparent mb-8`}>
                {leader.role}
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">{leader.message}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-800">{leader.yearsOfService}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="font-semibold text-gray-800">{leader.education}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className={`bg-gradient-to-r ${leader.color} hover:opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <a href={`mailto:${leader.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                >
                  <a href={`tel:${leader.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Ministry</h2>
            <p className="text-xl text-gray-700">Specialized areas of service and expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leader.specialties.map((specialty, i) => (
              <Card
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${leader.color} p-4 rounded-2xl mx-auto mb-4 w-fit`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card
            className={`bg-gradient-to-br ${leader.bgColor} border-white/60 rounded-3xl shadow-2xl overflow-hidden`}
          >
            <CardContent className="p-12 text-center relative">
              {/* Background decoration */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${leader.color} opacity-10 rounded-full -translate-y-8 translate-x-8`}
              ></div>

              <div className="relative z-10">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  I'm here to serve you and our church family. Whether you need prayer, guidance, or just want to chat,
                  please don't hesitate to reach out.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <Mail className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-semibold"
                    >
                      {leader.email}
                    </a>
                  </div>

                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a
                      href={`tel:${leader.phone}`}
                      className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-semibold"
                    >
                      {leader.phone}
                    </a>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                >
                  <Link href="/">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ slug: "senior-pastor" }, { slug: "associate-pastor" }, { slug: "worship-leader" }, { slug: "youth-pastor" }]
}
