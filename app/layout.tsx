import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arise and Shine CCI Thika",
  description:
    "Welcome to Arise and Shine Christian Center International Thika - A place of worship, fellowship, and spiritual growth.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <div className="flex-1 flex flex-col min-h-screen">
              {/* Header with Real Church Logo */}
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger className="md:hidden" />
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/church-logo.png"
                        alt="Arise and Shine CCI Thika Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-lg">Arise and Shine</span>
                        <span className="text-sm text-muted-foreground">CCI Thika</span>
                      </div>
                    </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
                      Gallery
                    </Link>
                    <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">
                      Events
                    </Link>
                    <Link href="/sermons" className="text-sm font-medium hover:text-primary transition-colors">
                      Sermons
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                      Blog
                    </Link>
                    <Link href="/prayer-request" className="text-sm font-medium hover:text-primary transition-colors">
                      Prayer
                    </Link>
                  </nav>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-1">{children}</main>

              {/* Footer */}
              <footer className="border-t bg-muted/50">
                <div className="container py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/church-logo.png"
                          alt="Arise and Shine CCI Thika Logo"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">Arise and Shine</h3>
                          <p className="text-sm text-muted-foreground">CCI Thika</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A place of worship, fellowship, and spiritual growth in Thika, Kenya.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Quick Links</h4>
                      <div className="space-y-2 text-sm">
                        <Link href="/gallery" className="block hover:text-primary transition-colors">
                          Gallery
                        </Link>
                        <Link href="/events" className="block hover:text-primary transition-colors">
                          Events
                        </Link>
                        <Link href="/sermons" className="block hover:text-primary transition-colors">
                          Sermons
                        </Link>
                        <Link href="/blog" className="block hover:text-primary transition-colors">
                          Blog
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Connect</h4>
                      <div className="space-y-2 text-sm">
                        <Link href="/prayer-request" className="block hover:text-primary transition-colors">
                          Prayer Request
                        </Link>
                        <Link href="/giving" className="block hover:text-primary transition-colors">
                          Give
                        </Link>
                        <p className="text-muted-foreground">Phone: +254 XXX XXX XXX</p>
                        <p className="text-muted-foreground">Email: info@ariseandshine.co.ke</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Service Times</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Sunday: 9:00 AM - 12:00 PM</p>
                        <p>Wednesday: 6:00 PM - 8:00 PM</p>
                        <p>Friday: 6:00 PM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 Arise and Shine Christian Center International Thika. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
