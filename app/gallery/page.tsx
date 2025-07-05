import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Camera, ImageIcon, Video, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <Link href="/" className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200">
                Home
              </Link>
              <Link href="/gallery" className="text-purple-600 font-bold">
                Gallery
              </Link>
              <Link
                href="/events"
                className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200"
              >
                Events
              </Link>
              <Link
                href="/sermons"
                className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200"
              >
                Sermons
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Header */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/30 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300/30 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full bg-white/90 backdrop-blur-sm shadow-lg font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8">Gallery</h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              Capturing moments of worship, fellowship, and God's work in our community
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Camera className="w-8 h-8 text-purple-600" />
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { label: "All Photos", active: true },
              { label: "Worship" },
              { label: "Events" },
              { label: "Community" },
              { label: "Youth" },
              { label: "Baptisms" },
            ].map(({ label, active }, index) => (
              <Button
                key={label}
                className={`${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600 bg-white/80"
                } rounded-full px-6 py-3 font-bold transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up animation-delay-${
                  index * 100
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Photo Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 24 }, (_, i) => (
              <Card
                key={i}
                className={`bg-white/80 backdrop-blur-xl border-white/60 rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 group transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up animation-delay-${
                  (i % 8) * 100
                }`}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300 flex items-center justify-center group-hover:from-purple-300 group-hover:to-pink-400 transition-all duration-500 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white rounded-full"></div>
                    </div>

                    <div className="relative z-10 text-center">
                      {i % 4 === 0 ? (
                        <Video className="w-16 h-16 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <ImageIcon className="w-16 h-16 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      <p className="text-white font-bold text-sm">
                        {i % 4 === 0 ? "Video" : "Photo"} {i + 1}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Camera className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {["Sunday Worship", "Youth Fellowship", "Community Outreach", "Prayer Meeting"][i % 4]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {["Main Service", "Youth Event", "Community", "Prayer Time"][i % 4]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Load More */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            <Camera className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Photos Coming</h3>
            <p className="text-gray-700 mb-6">Stay tuned for more beautiful moments from our church family</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Load More Photos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
