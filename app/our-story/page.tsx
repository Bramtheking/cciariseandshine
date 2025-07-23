import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Users, Star, Church, BookOpen, Calendar } from "lucide-react"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-8">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            The journey of faith, growth, and community that has shaped Arise and Shine CCI Thika
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Beginning */}
        <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl mb-16 overflow-hidden">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Church className="w-8 h-8 text-purple-600" />
                  <h2 className="text-4xl font-bold text-gray-900">The Beginning</h2>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Arise and Shine Christian Church International Thika was founded in 2009 with a simple yet powerful
                    vision: to see lives transformed by the love of Jesus Christ in our community.
                  </p>
                  <p>
                    What started as a small group of believers meeting in a humble location has grown into a vibrant
                    church family that impacts hundreds of lives across Thika and beyond.
                  </p>
                  <p>
                    Our founding pastor, led by divine inspiration, felt called to establish a church where people could
                    truly "arise and shine" - rising above their circumstances and shining with the light of Christ.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Church+Founding"
                  alt="Church founding"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Growth Timeline */}
        <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl mb-16 overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
                <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
              </div>
              <p className="text-xl text-gray-700">Key milestones in our church's growth</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "2009",
                  title: "Church Founded",
                  description: "Started with 20 founding members in a small rented hall",
                  icon: Church,
                },
                {
                  year: "2012",
                  title: "First Building",
                  description: "Moved to our first dedicated church building",
                  icon: Heart,
                },
                {
                  year: "2015",
                  title: "Youth Ministry Launch",
                  description: "Established vibrant youth programs and Wednesday services",
                  icon: Users,
                },
                {
                  year: "2018",
                  title: "Community Outreach",
                  description: "Expanded our reach with community service programs",
                  icon: Star,
                },
                {
                  year: "2024",
                  title: "Digital Ministry",
                  description: "Launched online services and digital outreach programs",
                  icon: BookOpen,
                },
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/60 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl font-black text-purple-600">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Ministry */}
        <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl mb-16 overflow-hidden">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Current+Ministry"
                  alt="Current ministry"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Today's Ministry</h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Today, Arise and Shine CCI Thika is home to over 500 active members who gather every Sunday and
                    Wednesday to worship, learn, and grow together in faith.
                  </p>
                  <p>
                    Our church has become a beacon of hope in Thika, offering not just spiritual guidance but also
                    practical support to families and individuals in need.
                  </p>
                  <p>
                    We continue to live out our calling to "arise and shine," impacting our community through various
                    ministries, outreach programs, and acts of service.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision for Future */}
        <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              As we continue to grow, our vision remains the same: to be a church where every person can arise from
              their circumstances and shine with the light of Christ, impacting Thika, Kenya, and the nations.
            </p>
            <Link href="/">
              <Button className="bg-white text-purple-600 hover:bg-white/90 px-8 py-3 rounded-full font-bold text-lg">
                Join Our Story
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
