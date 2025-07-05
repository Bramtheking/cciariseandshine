import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Facebook, Instagram, Twitter, Youtube, Menu } from "lucide-react"

const HeroSection = dynamic(() => import("@/components/sections/hero-section"))
const ServiceTimesSection = dynamic(() => import("@/components/sections/service-times-section"))
const AboutSection = dynamic(() => import("@/components/sections/about-section"))
const LeadershipSection = dynamic(() => import("@/components/sections/leadership-section"))
const MinistriesSection = dynamic(() => import("@/components/sections/ministries-section"))
const GalleryPreviewSection = dynamic(() => import("@/components/sections/gallery-preview-section"))
const EventsPreviewSection = dynamic(() => import("@/components/sections/events-preview-section"))
const SermonsPreviewSection = dynamic(() => import("@/components/sections/sermons-preview-section"))
const BlogPreviewSection = dynamic(() => import("@/components/sections/blog-preview-section"))
const PrayerPreviewSection = dynamic(() => import("@/components/sections/prayer-preview-section"))
const ContactSection = dynamic(() => import("@/components/sections/contact-section"))
const NewsletterSection = dynamic(() => import("@/components/sections/newsletter-section"))

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-30 scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="Arise and Shine CCI Thika Logo"
                  width={55}
                  height={55}
                  className="rounded-full shadow-lg ring-4 ring-white/80 relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-gray-900 leading-tight">Arise and Shine</h1>
                <p className="text-sm font-semibold text-gray-600 leading-tight">CCI Thika</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/events", label: "Events" },
                { href: "/sermons", label: "Sermons" },
                { href: "/blog", label: "Blog" },
                { href: "/prayer-request", label: "Prayer" },
                { href: "/giving", label: "Give" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-900 hover:text-gray-600 font-bold transition-all duration-200 hover:scale-105 transform relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <button className="md:hidden p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 hover:from-purple-200 hover:to-pink-200 transition-all duration-200 shadow-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Lazy-loaded content */}
      <HeroSection />
      <ServiceTimesSection />
      <AboutSection />
      <LeadershipSection />
      <MinistriesSection />
      <GalleryPreviewSection />
      <EventsPreviewSection />
      <SermonsPreviewSection />
      <BlogPreviewSection />
      <PrayerPreviewSection />
      <ContactSection />
      <NewsletterSection />

      {/* Ultra Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

          {/* Floating particles */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-ping animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-50 scale-110"></div>
                  <Image
                    src="/logo.png"
                    alt="Arise and Shine CCI Thika Logo"
                    width={50}
                    height={50}
                    className="rounded-full ring-4 ring-white/20 relative z-10"
                  />
                </div>
                <div>
                  <h3 className="font-black text-2xl">Arise and Shine</h3>
                  <p className="text-gray-300 font-semibold">CCI Thika</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Arising and shining for Jesus Christ in Thika and beyond, transforming lives through God's love and
                grace.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h4 className="font-black mb-8 text-xl">Quick Links</h4>
              <ul className="space-y-4 text-gray-300">
                {[
                  { href: "/", label: "Home" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/events", label: "Events" },
                  { href: "/sermons", label: "Sermons" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-all duration-200 hover:translate-x-2 transform inline-block font-medium"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <h4 className="font-black mb-8 text-xl">Service Times</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Sunday: 9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Wednesday: 6:00 PM - 8:00 PM</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Friday: 7:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <h4 className="font-black mb-8 text-xl">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                  { Icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                  { Icon: Twitter, href: "#", color: "hover:bg-blue-400" },
                  { Icon: Youtube, href: "#", color: "hover:bg-red-600" },
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 font-medium">
              &copy; 2024 Arise and Shine CCI Thika. All rights reserved. Built with ❤️ for God's glory.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
