import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, CreditCard, Smartphone, Building, Gift } from "lucide-react"
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
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
            <h1 className="text-5xl font-bold text-purple-900 mb-4">Give</h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Why We Give</h2>
            <p className="text-xl text-purple-700">Giving is an act of worship and partnership in God's work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Worship</h3>
                <p className="text-purple-700">
                  Giving is a form of worship that acknowledges God as the source of all our blessings and expresses our
                  gratitude.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Building className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Ministry</h3>
                <p className="text-purple-700">
                  Your gifts support our ministries, outreach programs, and help us serve our community with God's love.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Gift className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Partnership</h3>
                <p className="text-purple-700">
                  When you give, you become a partner in advancing God's kingdom and impacting lives for eternity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-16 px-4 bg-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Ways to Give</h2>
            <p className="text-xl text-purple-700">Choose the method that works best for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8 text-center">
                <CreditCard className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Online Giving</h3>
                <p className="text-purple-700 mb-6">
                  Give securely online with your credit card, debit card, or bank transfer. Set up one-time or recurring
                  gifts.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Give Online
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8 text-center">
                <Smartphone className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Mobile Money</h3>
                <p className="text-purple-700 mb-6">
                  Give using M-Pesa or other mobile money services. Quick, convenient, and secure.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-purple-900 font-medium">M-Pesa Paybill:</p>
                  <p className="text-purple-700">Business No: XXXXXX</p>
                  <p className="text-purple-700">Account: Your Name</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
                >
                  Copy Details
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8 text-center">
                <Building className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Bank Transfer</h3>
                <p className="text-purple-700 mb-6">
                  Transfer directly to our church bank account for larger gifts or regular giving.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-purple-900 font-medium">Bank Details:</p>
                  <p className="text-purple-700">Bank: [Bank Name]</p>
                  <p className="text-purple-700">Account: XXXXXXXXXX</p>
                  <p className="text-purple-700">Branch: Thika</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
                >
                  Copy Details
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
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Giving Categories</h2>
            <p className="text-xl text-purple-700">Direct your gift to specific areas of ministry</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">General Fund</h3>
                <p className="text-purple-700 mb-6">
                  Supports the overall ministry of the church including pastoral care, worship services, facility
                  maintenance, and general operations.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Give to General Fund
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Building Fund</h3>
                <p className="text-purple-700 mb-6">
                  Help us expand and improve our facilities to better serve our growing congregation and community
                  outreach programs.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Give to Building Fund
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Missions</h3>
                <p className="text-purple-700 mb-6">
                  Support our local and international mission work, evangelism efforts, and community outreach programs.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">Give to Missions</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Youth Ministry</h3>
                <p className="text-purple-700 mb-6">
                  Invest in the next generation through youth programs, camps, activities, and discipleship
                  opportunities.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Give to Youth Ministry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
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
          <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-purple-900 mb-4">Questions About Giving?</h2>
              <p className="text-purple-700 mb-6">
                We're here to help! If you have questions about giving, need assistance with online donations, or want
                to discuss planned giving options, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                    Contact Us
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full bg-transparent"
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
