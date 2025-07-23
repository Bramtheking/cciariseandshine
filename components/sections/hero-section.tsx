"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-24 px-4 text-center overflow-hidden min-h-screen flex items-center">
      {/* Enhanced animated background with purple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-400 to-pink-400">
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/20 rounded-full animate-ping animation-delay-3000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-16 border border-white/50 shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
          {/* Logo above text with enhanced styling */}
          <div className="mb-10 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 scale-110"></div>
              <Image
                src="/logo.png"
                alt="Christian Church International Logo"
                width={140}
                height={140}
                className="mx-auto rounded-full shadow-2xl ring-8 ring-white/80 hover:ring-purple-200/50 transition-all duration-500 relative z-10"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 animate-fade-in-up animation-delay-200 tracking-tight">
            Arise and{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Shine
            </span>
          </h1>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8 animate-fade-in-up animation-delay-400">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Christian Church International Thika</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed font-medium italic">
            {'"Arise, shine, for your light has come, and the glory of the Lord rises upon you." – Isaiah 60:1'}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 border-2 border-purple-500">
              Join Us Sunday
            </Button>
            <Button
              variant="outline"
              className="border-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-12 py-6 rounded-full text-xl font-bold bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-gray-500/25 transform hover:-translate-y-2 transition-all duration-300"
              onClick={() => window.open("https://youtube.com/@placeholder-channel", "_blank")}
            >
              Watch Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
