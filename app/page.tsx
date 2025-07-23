import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServiceTimesSection from "@/components/sections/service-times-section"
import LeadershipSection from "@/components/sections/leadership-section"
import MinistriesSection from "@/components/sections/ministries-section"
import GalleryPreviewSection from "@/components/sections/gallery-preview-section"
import SermonsPreviewSection from "@/components/sections/sermons-preview-section"
import EventsPreviewSection from "@/components/sections/events-preview-section"
import BlogPreviewSection from "@/components/sections/blog-preview-section"
import PrayerPreviewSection from "@/components/sections/prayer-preview-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceTimesSection />
        <LeadershipSection />
        <MinistriesSection />
        <GalleryPreviewSection />
        <SermonsPreviewSection />
        <EventsPreviewSection />
        <BlogPreviewSection />
        <PrayerPreviewSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Church Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Arise & Shine CCI</h3>
              <p className="text-gray-400 mb-4">
                Christian Church International Thika - A place where faith meets community and lives are transformed
                through God's love.
              </p>
              <div className="text-gray-400">
                <p>📍 Thika, Kenya</p>
                <p>📞 +254 XXX XXX XXX</p>
                <p>✉️ info@ccithika.org</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/sermons" className="text-gray-400 hover:text-white transition-colors">
                    Sermons
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-gray-400 hover:text-white transition-colors">
                    Announcements
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/prayer-request" className="text-gray-400 hover:text-white transition-colors">
                    Prayer Request
                  </a>
                </li>
              </ul>
            </div>

            {/* Ministries */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Ministries</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/ministry/youth" className="text-gray-400 hover:text-white transition-colors">
                    Youth Ministry
                  </a>
                </li>
                <li>
                  <a href="/ministry/children" className="text-gray-400 hover:text-white transition-colors">
                    Children's Ministry
                  </a>
                </li>
                <li>
                  <a href="/ministry/worship" className="text-gray-400 hover:text-white transition-colors">
                    Worship Team
                  </a>
                </li>
                <li>
                  <a href="/ministry/outreach" className="text-gray-400 hover:text-white transition-colors">
                    Community Outreach
                  </a>
                </li>
                <li>
                  <a href="/ministry/prayer" className="text-gray-400 hover:text-white transition-colors">
                    Prayer Ministry
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Times */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Times</h4>
              <div className="text-gray-400 space-y-2">
                <p>
                  <strong>Sunday Service:</strong>
                  <br />
                  9:00 AM - 12:00 PM
                </p>
                <p>
                  <strong>Wednesday Prayer:</strong>
                  <br />
                  6:00 PM - 8:00 PM
                </p>
                <p>
                  <strong>Friday Youth:</strong>
                  <br />
                  6:00 PM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Christian Church International Thika. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
