import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Baby, Music, Globe, HandIcon as Hands } from "lucide-react"

export default function MinistriesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(219,39,119,0.12),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Our Ministries</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
            Serving God through various ministries and outreach programs
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Youth Ministry",
              description: "Empowering young people to arise and shine for Christ",
              icon: Users,
              gradient: "from-purple-500 to-purple-600",
              delay: "0",
            },
            {
              title: "Women's Ministry",
              description: "Building strong Christian women and mothers",
              icon: Heart,
              gradient: "from-purple-600 to-pink-600",
              delay: "100",
            },
            {
              title: "Men's Ministry",
              description: "Raising godly men and fathers in the community",
              icon: Users,
              gradient: "from-pink-500 to-purple-500",
              delay: "200",
            },
            {
              title: "Children's Ministry",
              description: "Nurturing the next generation in God's love",
              icon: Baby,
              gradient: "from-purple-400 to-pink-500",
              delay: "300",
            },
            {
              title: "Worship Ministry",
              description: "Leading the congregation in heartfelt worship",
              icon: Music,
              gradient: "from-pink-600 to-purple-600",
              delay: "400",
            },
            {
              title: "Outreach Ministry",
              description: "Reaching our community with God's love",
              icon: Globe,
              gradient: "from-purple-500 to-pink-400",
              delay: "500",
            },
          ].map(({ title, description, icon: Icon, gradient, delay }) => (
            <Card
              key={title}
              className={`bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-6 hover:rotate-1 transition-all duration-500 animate-fade-in-up animation-delay-${delay} group overflow-hidden`}
            >
              <CardContent className="p-8 text-center relative">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div
                  className={`bg-gradient-to-br ${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>

                {/* Decorative element */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <Hands className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
            <p className="text-gray-700 mb-6">Join one of our ministries and be part of God's work in our community</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
