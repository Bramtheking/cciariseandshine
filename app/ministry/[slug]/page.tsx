import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Music, Baby, UserCheck, Mail, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

const ministries = {
  youth: {
    title: "Youth Ministry",
    description:
      "Empowering the next generation through faith, fellowship, and fun activities that build character and community.",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    leader: {
      name: "Pastor Michael Johnson",
      role: "Youth Pastor",
      image: "/placeholder.svg?height=400&width=400",
      message:
        "I'm passionate about helping young people discover their purpose in Christ. Our youth ministry is a place where teenagers can ask questions, build friendships, and grow in their faith journey. We believe every young person has incredible potential to make a difference in this world.",
      email: "youth@cciariseandshine.org",
      phone: "(555) 123-4567",
    },
    activities: [
      "Weekly Youth Services (Fridays 7PM)",
      "Youth Bible Study (Wednesdays 6PM)",
      "Monthly Outreach Projects",
      "Summer Youth Camp",
      "Leadership Development Program",
    ],
  },
  womens: {
    title: "Women's Ministry",
    description: "A supportive community where women grow in faith, build lasting friendships, and serve together.",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    bgColor: "from-pink-50 to-pink-100",
    leader: {
      name: "Sister Grace Williams",
      role: "Women's Ministry Leader",
      image: "/placeholder.svg?height=400&width=400",
      message:
        "Our women's ministry is a beautiful sisterhood where we support each other through life's joys and challenges. We study God's word together, pray for one another, and serve our community with love. Every woman is welcome here, regardless of where she is in her faith journey.",
      email: "women@cciariseandshine.org",
      phone: "(555) 234-5678",
    },
    activities: [
      "Women's Bible Study (Tuesdays 10AM)",
      "Monthly Women's Fellowship",
      "Prayer Circle (Thursdays 7PM)",
      "Community Service Projects",
      "Annual Women's Retreat",
    ],
  },
  mens: {
    title: "Men's Ministry",
    description: "Building strong men of faith through fellowship, study, and service to God and community.",
    icon: UserCheck,
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    leader: {
      name: "Elder Robert Martinez",
      role: "Men's Ministry Leader",
      image: "/placeholder.svg?height=400&width=400",
      message:
        "Men need strong fellowship and accountability to grow in their faith. Our ministry provides a safe space for men to share their struggles, celebrate victories, and encourage one another. We focus on being godly husbands, fathers, and leaders in our community.",
      email: "men@cciariseandshine.org",
      phone: "(555) 345-6789",
    },
    activities: [
      "Men's Bible Study (Saturdays 7AM)",
      "Monthly Men's Breakfast",
      "Community Service Projects",
      "Men's Retreat Weekend",
      "Mentorship Programs",
    ],
  },
  worship: {
    title: "Worship Ministry",
    description: "Leading our congregation in heartfelt worship through music, song, and creative expression.",
    icon: Music,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    leader: {
      name: "Minister David Thompson",
      role: "Worship Leader",
      image: "/placeholder.svg?height=400&width=400",
      message:
        "Worship is the heartbeat of our church. Through music and song, we create an atmosphere where hearts can connect with God. Whether you're a seasoned musician or just love to sing, there's a place for you in our worship ministry. Come and be part of something beautiful.",
      email: "worship@cciariseandshine.org",
      phone: "(555) 456-7890",
    },
    activities: [
      "Sunday Morning Worship Team",
      "Choir Practice (Wednesdays 7PM)",
      "Instrumental Ensemble",
      "Youth Worship Band",
      "Special Event Performances",
    ],
  },
  childrens: {
    title: "Children's Ministry",
    description: "Nurturing young hearts and minds with age-appropriate lessons, activities, and loving care.",
    icon: Baby,
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    leader: {
      name: "Teacher Sarah Davis",
      role: "Children's Ministry Director",
      image: "/placeholder.svg?height=400&width=400",
      message:
        "Children are a gift from God, and it's our joy to help them discover His love in fun and meaningful ways. Our children's ministry provides a safe, nurturing environment where kids can learn about Jesus, make friends, and grow in their understanding of God's amazing love for them.",
      email: "children@cciariseandshine.org",
      phone: "(555) 567-8901",
    },
    activities: [
      "Sunday School (Ages 3-12)",
      "Children's Church Service",
      "Vacation Bible School",
      "Kids' Choir (Ages 5-12)",
      "Family Fun Events",
    ],
  },
}

export default function MinistryPage({ params }: { params: { slug: string } }) {
  const ministry = ministries[params.slug as keyof typeof ministries]

  if (!ministry) {
    notFound()
  }

  const IconComponent = ministry.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className={`py-24 px-4 relative overflow-hidden bg-gradient-to-br ${ministry.bgColor}`}>
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-10`}></div>
          <div className="absolute top-20 right-32 w-28 h-28 bg-white/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-36 h-36 bg-white/20 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className={`bg-gradient-to-br ${ministry.color} p-8 rounded-3xl shadow-xl mx-auto mb-8 w-fit`}>
              <IconComponent className="w-16 h-16 text-white mx-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">{ministry.title}</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{ministry.description}</p>
          </div>
        </div>
      </section>

      {/* Leader Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Leader Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={ministry.leader.image || "/placeholder.svg"}
                    alt={ministry.leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-20`}></div>
                </div>

                {/* Leader Info */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{ministry.leader.name}</h2>
                  <p
                    className={`text-lg font-semibold bg-gradient-to-r ${ministry.color} bg-clip-text text-transparent mb-6`}
                  >
                    {ministry.leader.role}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">{ministry.leader.message}</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <a
                        href={`mailto:${ministry.leader.email}`}
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      >
                        {ministry.leader.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <a
                        href={`tel:${ministry.leader.phone}`}
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      >
                        {ministry.leader.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ministry Activities</h2>
            <p className="text-xl text-gray-700">Join us in these regular activities and events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ministry.activities.map((activity, i) => (
              <Card key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-br ${ministry.color} p-3 rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">{activity}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className={`bg-gradient-to-br ${ministry.bgColor} border-white/60 rounded-3xl shadow-2xl`}>
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Ready to join our {ministry.title.toLowerCase()}? We'd love to have you be part of our community!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className={`bg-gradient-to-r ${ministry.color} hover:opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                >
                  <a href={`mailto:${ministry.leader.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </Button>

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
  return [{ slug: "youth" }, { slug: "womens" }, { slug: "mens" }, { slug: "worship" }, { slug: "childrens" }]
}
