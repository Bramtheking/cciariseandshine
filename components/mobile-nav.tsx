"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function MobileNav({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={className}>
          {" "}
          {/* Apply className prop here */}
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[min(80vw,320px)] bg-white p-0 flex flex-col"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <Link href="/" className="flex items-center space-x-2" onClick={closeSheet}>
            <Image src="/logo.png" alt="Arise and Shine CCI Logo" width={40} height={40} className="rounded-full" />
            <span className="text-lg font-bold text-gray-900">Arise & Shine CCI</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={closeSheet}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close navigation menu</span>
          </Button>
        </div>
        <Separator />
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Home
          </Link>
          <Link
            href="/our-story"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Our Story
          </Link>
          <Link
            href="/sermons"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Sermons
          </Link>
          <Link
            href="/events"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Events
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Blog
          </Link>
          <Link
            href="/gallery"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Gallery
          </Link>
          <Link
            href="/giving"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Giving
          </Link>
          <Link
            href="/prayer-request"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Prayer Request
          </Link>
          <Link
            href="/admin/login"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
            onClick={closeSheet}
          >
            Admin Login
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
