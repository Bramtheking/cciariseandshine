"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServiceTimesSection from "@/components/sections/service-times-section"
import LeadershipSection from "@/components/sections/leadership-section"
import MinistriesSection from "@/components/sections/ministries-section"
import GalleryPreviewSection from "@/components/sections/gallery-preview-section"
import SermonsPreviewSection from "@/components/sections/sermons-preview-section"
import BlogPreviewSection from "@/components/sections/blog-preview-section"
import EventsPreviewSection from "@/components/sections/events-preview-section"
import PrayerPreviewSection from "@/components/sections/prayer-preview-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import ContactSection from "@/components/sections/contact-section"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/sermons", label: "Sermons" },
    { href: "/blog", label: "Blog" },
    { href: "/prayer-request", label: "Prayer" },
  ]

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-10">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
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
      </div>

      {/* Enhanced Navigation */}
      <nav className="bg-white/98 backdrop-blur-2xl border-b border-gray-200/50 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/admin/login" className="flex items-center space-x-6">
              <div className="relative w-20 h-20 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-30 scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="Arise and Shine CCI Thika Logo"
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg ring-4 ring-white/80 relative z-10 object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black text-gray-900 leading-tight">Arise and Shine</h1>
                <p className="text-lg font-semibold text-gray-600 leading-tight">CCI Thika</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-gray-600 font-bold transition-all duration-200 hover:scale-105 transform relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 hover:from-purple-200 hover:to-pink-200 transition-all duration-200 shadow-lg relative z-50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
            style={{ touchAction: "none" }}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`
          fixed top-0 right-0 h-full w-80 bg-white backdrop-blur-2xl shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
          style={{ touchAction: "none" }}
        >
          <div className="p-6 pt-24 h-full overflow-y-auto">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-30 scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="Arise and Shine CCI Thika Logo"
                  width={64}
                  height={64}
                  className="rounded-full shadow-lg ring-4 ring-white/80 relative z-10 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-black text-gray-900 leading-tight">Arise and Shine</h2>
                <p className="text-sm font-semibold text-gray-600 leading-tight">CCI Thika</p>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`
                    block px-6 py-4 rounded-2xl text-gray-900 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${
                      index % 2 === 0
                        ? "hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600"
                        : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? "bg-purple-400" : "bg-pink-400"}`}></div>
                    <span>{link.label}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>+254 XXX XXX XXX</span>
                </p>
                <p className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>cciAriseAndShine@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Thika, Kiambu County</span>
                </p>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, color: "bg-blue-600" },
                  { Icon: Instagram, color: "bg-pink-600" },
                  { Icon: Twitter, color: "bg-blue-400" },
                  { Icon: Youtube, color: "bg-red-600" },
                ].map(({ Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transform transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

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
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-50 scale-110"></div>
                  <Image
                    src="/logo.png"
                    alt="Arise and Shine CCI Thika Logo"
                    width={64}
                    height={64}
                    className="rounded-full ring-4 ring-white/20 relative z-10 object-cover"
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
                  <span className="font-medium">Wednesday: Youth Service – 7:00 PM</span>
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
    </SidebarInset>
  )
}
