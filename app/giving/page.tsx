import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Smartphone, Building, Gift, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Arise and Shine CCI Thika Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-purple-900">Arise and Shine</h1>
                <p className="text-sm text-purple-600">CCI Thika</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-purple-900 hover:text-purple-600 font-medium">
                Home
              </Link>
              <Link href="/gallery" className="text-purple-900 hover:text-purple-600 font-medium">
                Gallery
              </Link>
              <Link href="/events" className="text-purple-900 hover:text-purple-600 font-medium">
                Events
              </Link>
              <Link href="/sermons" className="text-purple-900 hover:text-purple-600 font-medium">
                Sermons
              </Link>
              <Link href="/blog" className="text-purple-900 hover:text-purple-600 font-medium">
                Blog
              </Link>
              <Link href="/giving" className="text-purple-600 font-medium">
                Give
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-pink-100/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(219,39,119,0.15),transparent_50%)]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-purple-900 mb-8">Give</h1>
            <p className="text-2xl text-purple-700 max-w-3xl mx-auto mb-6">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Heart className="w-8 h-8 text-purple-600" />
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <Gift className="w-8 h-8 text-pink-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-6">Why We Give</h2>
            <p className="text-xl text-purple-700">Giving is an act of worship and partnership in God's work</p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Worship</h3>
                <p className="text-purple-700">
                  Giving is a form of worship that acknowledges God as the source of all our blessings and expresses our
                  gratitude.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Ministry</h3>
                <p className="text-purple-700">
                  Your gifts support our ministries, outreach programs, and help us serve our community with God's love.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Partnership</h3>
                <p className="text-purple-700">
                  When you give, you become a partner in advancing God's kingdom and impacting lives for eternity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Money Giving Options */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-6">Give via Mobile Money</h2>
            <p className="text-xl text-purple-700">Quick, convenient, and secure mobile giving</p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Paybill Option */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-purple-900 mb-6">M-Pesa Paybill</h3>

                <div className="bg-purple-50/50 rounded-2xl p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-900 font-semibold">Paybill Number:</span>
                      <span className="text-purple-700 font-bold text-lg">XXXXXX</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-900 font-semibold">Account Number:</span>
                      <span className="text-purple-700 font-bold text-lg">Your Name</span>
                    </div>
                  </div>
                </div>

                <p className="text-purple-700 mb-6 text-sm">
                  Use your full name as the account number to help us identify your contribution
                </p>

                <Button
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-bold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Copy Paybill Details
                </Button>
              </CardContent>
            </Card>

            {/* Send Money Option */}
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="bg-gradient-to-br from-pink-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-xl">
                  <Phone className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-purple-900 mb-6">Send Money</h3>

                <div className="bg-pink-50/50 rounded-2xl p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-900 font-semibold">Phone Number:</span>
                      <span className="text-purple-700 font-bold text-lg">+254 XXX XXX XXX</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-900 font-semibold">Name:</span>
                      <span className="text-purple-700 font-bold text-lg">CCI Arise & Shine</span>
                    </div>
                  </div>
                </div>

                <p className="text-purple-700 mb-6 text-sm">
                  Send money directly to our church phone number for instant giving
                </p>

                <Button
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-bold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Copy Phone Number
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-6">Giving Categories</h2>
            <p className="text-xl text-purple-700">Direct your gift to specific areas of ministry</p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Offering</h3>
                <p className="text-purple-700">
                  Regular weekly offerings that support the general ministry and operations of the church.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Tithe</h3>
                <p className="text-purple-700">
                  Biblical tithe - returning the first tenth of your income to God as an act of worship and obedience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Building Fund</h3>
                <p className="text-purple-700">
                  Help us expand and improve our facilities to better serve our growing congregation and community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-white fill-current" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">A Heart of Gratitude</h2>
            <p className="text-xl text-purple-100 mb-6 italic">
              "Giving has transformed my relationship with God. It's not about the amount, but about the heart behind
              it. When I give, I'm reminded that everything I have comes from Him, and I'm blessed to be a blessing to
              others."
            </p>
            <p className="text-purple-200">- Church Member Testimony</p>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              <h2 className="text-3xl font-bold text-purple-900 mb-4">Questions About Giving?</h2>
              <p className="text-purple-700 mb-6">
                We're here to help! If you have questions about giving, need assistance with mobile money donations, or
                want to discuss planned giving options, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-bold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Call: +254 XXX XXX XXX
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
