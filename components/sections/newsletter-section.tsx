"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await addDoc(collection(db, "newsletter_subscriptions"), {
        email,
        name,
        subscribedAt: serverTimestamp(),
        status: "active",
      })

      setStatus("success")
      setMessage("Thank you for subscribing! You'll receive our latest updates.")
      setEmail("")
      setName("")

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    } catch (error) {
      console.error("Error subscribing:", error)
      setStatus("error")
      setMessage("Something went wrong. Please try again.")

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    }
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-white/95 backdrop-blur-xl border-white/50 rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Stay Connected</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates, prayer requests, and inspirational content
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-medium">{message}</p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center justify-center space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <p className="text-red-800 font-medium">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/90 backdrop-blur-sm text-lg disabled:opacity-50"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none bg-white/90 backdrop-blur-sm text-lg disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-6">We respect your privacy. Unsubscribe at any time.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
