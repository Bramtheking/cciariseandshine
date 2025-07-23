"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, Users, Star, Heart } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.15),transparent_50%)]"></div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-32 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full filter blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-40 w-28 h-28 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Visit Us</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">We'd love to welcome you to our church family</p>
          <div className="flex items-center justify-center space-x-4">
            <MapPin className="w-8 h-8 text-purple-600" />
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: "Location",
              content: ["Thika, Kiambu County", "Kenya"],
              gradient: "from-purple-500 to-purple-600",
              delay: "0",
              clickable: true,
            },
            {
              icon: Phone,
              title: "Phone",
              content: ["+254 XXX XXX XXX"],
              gradient: "from-purple-600 to-pink-600",
              delay: "100",
              clickable: false,
            },
            {
              icon: Mail,
              title: "Email",
              content: ["cciariseandshine@gmail.com"],
              gradient: "from-pink-500 to-purple-500",
              delay: "200",
              clickable: false,
            },
            {
              icon: Clock,
              title: "Office Hours",
              content: ["Mon-Fri: 9AM-5PM", "Sat: 9AM-2PM"],
              gradient: "from-purple-400 to-pink-500",
              delay: "300",
              clickable: false,
            },
          ].map(({ icon: Icon, title, content, gradient, delay, clickable }) => (
            <Card
              key={title}
              className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-2 transition-all duration-500 animate-fade-in-up animation-delay-${delay} group overflow-hidden ${clickable ? "cursor-pointer" : ""}`}
              onClick={
                clickable
                  ? () => window.open("https://maps.google.com/?q=cci+arise+and+shine+Thika+Kenya", "_blank")
                  : undefined
              }
            >
              <CardContent className="p-8 text-center relative">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div
                  className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <div className="space-y-1">
                  {content.map((line, i) => (
                    <p key={i} className="text-gray-700 font-medium">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-4 flex justify-center">
                  <div className={`w-12 h-1 bg-gradient-to-r ${gradient} rounded-full`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-left group overflow-hidden">
            <CardContent className="p-10 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                <p className="text-gray-700">We'll get back to you as soon as possible</p>
              </div>

              <form action="mailto:cciariseandshine@gmail.com" method="post" encType="text/plain" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Subject</label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm transition-all duration-300"
                  >
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Ministry Information</option>
                    <option>Event Information</option>
                    <option>Pastoral Care</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm resize-none transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Service Times & Map */}
          <div className="space-y-8">
            {/* Service Times */}
            <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-right group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Us for Worship</h3>
                  <p className="text-gray-700">All are welcome to arise and shine with us!</p>
                </div>

                <div className="space-y-4">
                  {[
                    { service: "Sunday Service", time: "9:00 AM - 12:00 PM", desc: "Main worship with communion" },
                    {
                      service: "Wednesday Youth Service",
                      time: "7:00 PM",
                      desc: "Youth service and Bible study",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-white/60 rounded-2xl shadow-lg">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-3 h-3 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.service}</h4>
                        <p className="text-purple-600 font-semibold text-sm">{item.time}</p>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Section - Clickable */}
            <Card
              className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-right animation-delay-200 group overflow-hidden cursor-pointer"
              onClick={() => window.open("https://maps.google.com/?q=cci+arise+and+shine+Thika+Kenya", "_blank")}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300 flex items-center justify-center relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-16 h-16 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full"></div>
                  </div>

                  <div className="text-center relative z-10">
                    <div className="bg-white/90 rounded-full p-6 shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-12 h-12 text-purple-600" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Find Us</h4>
                    <p className="text-white/90 text-sm">Thika, Kiambu County, Kenya</p>
                    <p className="text-white/80 text-xs mt-2">Click to open in Google Maps</p>
                  </div>

                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Star className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Family?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Whether you're new to faith or looking for a church home, we'd love to welcome you with open arms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Plan Your Visit
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600 px-8 py-3 rounded-full font-bold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Call: +254 XXX XXX XXX
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
