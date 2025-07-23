"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav" // Import the MobileNav component

export default function Navbar() {
  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Sermons", href: "/sermons" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Giving", href: "/giving" },
  ]

  const handleLogoClick = () => {
    router.push("/admin/login")
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Clickable to admin */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <Image
              src="/logo.png"
              alt="Christian Church International Logo"
              width={48}
              height={48}
              className="rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-purple-900 hover:text-purple-600 transition-colors">
                Arise & Shine CCI
              </h1>
              <p className="text-sm text-purple-600">Thika</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (handled by MobileNav component) */}
          <MobileNav className="md:hidden" />
        </div>
      </div>
    </nav>
  )
}
