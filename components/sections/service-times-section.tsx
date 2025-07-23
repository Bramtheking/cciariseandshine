import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"

export default function ServiceTimesSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with subtle purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100/50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Service Times</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Join us for worship, prayer, and fellowship</p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Sunday Service",
              time: "9:00 AM – 12:00 PM",
              description: "Main worship service with communion",
              icon: Calendar,
              delay: "0",
              gradient: "from-purple-500 to-purple-600",
            },
            {
              title: "Wednesday Youth Service",
              time: "6:00 PM – 8:00 PM",
              description: "Youth service and Bible study",
              icon: Clock,
              delay: "200",
              gradient: "from-purple-600 to-pink-600",
            },
          ].map(({ title, time, description, icon: Icon, delay, gradient }) => (
            <Card
              key={title}
              className={`bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 animate-fade-in-up animation-delay-${delay} group overflow-hidden`}
            >
              <CardContent className="p-8 relative">
                {/* Card background gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div
                  className={`bg-gradient-to-br ${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-xl font-semibold text-gray-800 mb-2">{time}</p>
                <p className="text-gray-600">{description}</p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
