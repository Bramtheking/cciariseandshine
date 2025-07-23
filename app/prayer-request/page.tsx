"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Send, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PrayerRequestPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const category = formData.get("category") as string
    const request = formData.get("request") as string
    const urgent = formData.get("urgent") ? "Yes" : "No"
    const anonymous = formData.get("anonymous") ? "Yes" : "No"

    const subject = `Prayer Request - ${category}`
    const body = `Name: ${name}
Email: ${email}
Category: ${category}
Urgent: ${urgent}
Anonymous: ${anonymous}

Prayer Request:
${request}

---
Sent from Arise and Shine CCI Website`

    const mailtoLink = `mailto:cciariseandshine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/admin/login" className="flex items-center space-x-4">
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
            </Link>
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
            <h1 className="text-5xl font-bold text-purple-900 mb-4">Prayer Requests</h1>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer
              of a righteous person is powerful and effective." - James 5:16
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/40 backdrop-blur-lg border-white/50 rounded-3xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Submit a Prayer Request</h2>
                <p className="text-purple-700">
                  We believe in the power of prayer and would be honored to pray for you and your loved ones.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-900 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-900 font-medium mb-2">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-purple-900 font-medium mb-2">Prayer Request Category</label>
                  <select
                    name="category"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/50"
                  >
                    <option>General Prayer</option>
                    <option>Health & Healing</option>
                    <option>Family & Relationships</option>
                    <option>Financial Provision</option>
                    <option>Spiritual Growth</option>
                    <option>Work & Career</option>
                    <option>Salvation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-900 font-medium mb-2">Prayer Request</label>
                  <textarea
                    name="request"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-2xl border border-purple-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/50 resize-none"
                    placeholder="Please share your prayer request here. We will keep your request confidential and lift you up in prayer."
                  ></textarea>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-300"
                  />
                  <label htmlFor="urgent" className="text-purple-700">
                    This is an urgent prayer request
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-300"
                  />
                  <label htmlFor="anonymous" className="text-purple-700">
                    Keep this request anonymous
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl text-lg font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Prayer Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Pray */}
      <section className="py-16 px-4 bg-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">How We Pray for You</h2>
            <p className="text-xl text-purple-700">Your prayer requests are handled with care and confidentiality</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Prayer Team</h3>
                <p className="text-purple-700">
                  Our dedicated prayer team receives and prays over every request with compassion and faith.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Confidential</h3>
                <p className="text-purple-700">
                  All prayer requests are kept strictly confidential and shared only with our prayer team.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl text-center">
              <CardContent className="p-8">
                <Clock className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-900 mb-4">Ongoing</h3>
                <p className="text-purple-700">
                  We continue to pray for your requests over time, believing God for breakthrough and blessing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Prayer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-800 border-0 rounded-3xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Prayer?</h2>
              <p className="text-xl text-purple-100 mb-6">
                If you have an urgent prayer need, don't hesitate to contact us directly. We're here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium">
                  Call: +254 XXX XXX XXX
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
                >
                  WhatsApp Prayer Line
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
