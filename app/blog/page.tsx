import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, BookOpen, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
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
              <Link
                href="/gallery"
                className="text-gray-900 hover:text-gray-600 font-bold transition-colors duration-200"
              >
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
              <Link href="/blog" className="text-purple-600 font-bold">
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
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8">Blog</h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              Insights, inspiration, and updates from our church community
            </p>
            <div className="flex items-center justify-center space-x-4">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in group overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-lg font-bold mb-6 shadow-lg animate-pulse">
                    ⭐ Featured Post
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">New Year, New Beginnings</h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    As we step into 2024, let's explore how to start the year with purpose, faith, and a heart ready to
                    arise and shine for God's glory.
                  </p>

                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-800 font-semibold">January 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-800 font-semibold">Pastor John Doe</span>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Read Full Article
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-8 left-8 w-16 h-16 border-4 border-white rounded-full"></div>
                      <div className="absolute bottom-8 right-8 w-12 h-12 border-4 border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white rounded-full"></div>
                    </div>
                    <div className="relative z-10 bg-white/90 rounded-full p-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-16 h-16 text-purple-600" />
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Heart className="w-10 h-10 text-white fill-current" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { label: "All Posts", active: true },
              { label: "Faith" },
              { label: "Community" },
              { label: "Events" },
              { label: "Youth" },
              { label: "Testimonies" },
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

      {/* Blog Posts */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Community Outreach Success",
                excerpt:
                  "Celebrating our recent community service initiatives and the impact we're making together in Thika.",
                author: "Pastor Jane Smith",
                date: "January 10, 2024",
                category: "Community",
                readTime: "5 min read",
                gradient: "from-green-500 to-blue-500",
              },
              {
                title: "Youth Ministry Update",
                excerpt: "Exciting developments in our youth ministry as young people arise and shine for Christ.",
                author: "Youth Pastor Mark",
                date: "January 5, 2024",
                category: "Youth",
                readTime: "3 min read",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Prayer Changes Everything",
                excerpt: "Testimonies and insights on the power of prayer in our personal lives and church community.",
                author: "Elder Sarah Wilson",
                date: "December 28, 2023",
                category: "Faith",
                readTime: "7 min read",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                title: "Christmas Celebration Recap",
                excerpt:
                  "Highlights from our beautiful Christmas celebration and the joy of celebrating Christ's birth together.",
                author: "Events Team",
                date: "December 26, 2023",
                category: "Events",
                readTime: "4 min read",
                gradient: "from-red-500 to-pink-500",
              },
              {
                title: "Walking in God's Purpose",
                excerpt: "Discovering and fulfilling God's unique purpose for your life in the new year.",
                author: "Pastor John Doe",
                date: "December 20, 2023",
                category: "Faith",
                readTime: "6 min read",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "Testimony: God's Faithfulness",
                excerpt: "A powerful testimony of God's faithfulness through challenging times and seasons of growth.",
                author: "Mary Kamau",
                date: "December 15, 2023",
                category: "Testimonies",
                readTime: "8 min read",
                gradient: "from-pink-500 to-purple-500",
              },
            ].map((post, i) => (
              <Card
                key={i}
                className={`bg-white/90 backdrop-blur-xl border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 animate-fade-in-up animation-delay-${
                  i * 150
                } group overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${post.gradient} opacity-15 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500`}
                  ></div>

                  <div className="aspect-video bg-gradient-to-br from-purple-200 via-purple-300 to-pink-300 rounded-2xl mb-6 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="relative z-10 bg-white/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Tag className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-bold shadow-lg`}
                    >
                      {post.category}
                    </div>
                    <span className="text-purple-600 text-xs font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${post.gradient} hover:shadow-xl text-white rounded-full py-3 font-bold transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Stories to Share</h3>
            <p className="text-gray-700 mb-6">Discover more inspiring content from our community</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
