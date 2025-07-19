"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const email = (e.target as HTMLFormElement).email.value
    window.location.href = `mailto:cciAriseAndShine@gmail.com?subject=Newsletter Subscription&body=Please subscribe me to your newsletter. My email is: ${email}`
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Stay Connected</h2>
        <p className="text-xl text-purple-100 mb-8">
          Subscribe to our newsletter for updates, prayer requests, and inspirational content
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-purple-300 outline-none"
          />
          <Button
            type="submit"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
