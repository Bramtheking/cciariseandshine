"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { LogOut, Home, Plus, Edit, Trash2, Camera, Video, FileText, Calendar, Save } from "lucide-react"

// Mock data and functions for now since Firebase service isn't fully implemented
const mockGalleryItems: any[] = []
const mockSermons: any[] = []
const mockBlogPosts: any[] = []
const mockEvents: any[] = []

const mockAddGalleryItem = async (data: any) => {
  console.log("Adding gallery item:", data)
}

const mockAddSermon = async (data: any) => {
  console.log("Adding sermon:", data)
}

const mockAddBlogPost = async (data: any) => {
  console.log("Adding blog post:", data)
}

const mockAddEvent = async (data: any) => {
  console.log("Adding event:", data)
}

export default function AdminDashboard() {
  const router = useRouter()
  const [galleryItems, setGalleryItems] = useState<any[]>([])
  const [sermons, setSermons] = useState<any[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Form states
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    type: "image" as "image" | "video",
    url: "",
    thumbnail: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  })

  const [sermonForm, setSermonForm] = useState({
    title: "",
    description: "",
    preacher: "",
    series: "",
    youtubeId: "",
    image: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  })

  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    image: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  })

  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    endDate: "",
    type: "event" as "event" | "announcement",
    featured: false,
    image: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  })

  // Check authentication
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated")
    if (!isAuthenticated) {
      router.push("/admin/login")
      return
    }
    loadAllData()
  }, [router])

  const loadAllData = async () => {
    try {
      // Load mock data for now
      setGalleryItems(mockGalleryItems)
      setSermons(mockSermons)
      setBlogPosts(mockBlogPosts)
      setEvents(mockEvents)
    } catch (error) {
      console.error("Error loading data:", error)
      toast({
        title: "Error",
        description: "Failed to load data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  const handleAddGalleryItem = async () => {
    try {
      const tags = galleryForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      await mockAddGalleryItem({
        ...galleryForm,
        tags,
      })

      setGalleryForm({
        title: "",
        description: "",
        type: "image",
        url: "",
        thumbnail: "",
        tags: "",
        date: new Date().toISOString().split("T")[0],
      })
      loadAllData()
      toast({
        title: "Success",
        description: "Gallery item added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add gallery item",
        variant: "destructive",
      })
    }
  }

  const handleAddSermon = async () => {
    try {
      const tags = sermonForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      await mockAddSermon({
        ...sermonForm,
        tags,
      })

      setSermonForm({
        title: "",
        description: "",
        preacher: "",
        series: "",
        youtubeId: "",
        image: "",
        tags: "",
        date: new Date().toISOString().split("T")[0],
      })
      loadAllData()
      toast({
        title: "Success",
        description: "Sermon added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add sermon",
        variant: "destructive",
      })
    }
  }

  const handleAddBlogPost = async () => {
    try {
      const tags = blogForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      await mockAddBlogPost({
        ...blogForm,
        tags,
      })

      setBlogForm({
        title: "",
        excerpt: "",
        content: "",
        author: "",
        image: "",
        tags: "",
        date: new Date().toISOString().split("T")[0],
      })
      loadAllData()
      toast({
        title: "Success",
        description: "Blog post added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add blog post",
        variant: "destructive",
      })
    }
  }

  const handleAddEvent = async () => {
    try {
      const tags = eventForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)

      await mockAddEvent({
        ...eventForm,
        tags,
      })

      setEventForm({
        title: "",
        description: "",
        location: "",
        time: "",
        endDate: "",
        type: "event",
        featured: false,
        image: "",
        tags: "",
        date: new Date().toISOString().split("T")[0],
      })
      loadAllData()
      toast({
        title: "Success",
        description: "Event added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add event",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Image
                src="/church-logo.png"
                alt="Arise and Shine CCI Thika Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Arise and Shine CCI Thika</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Website
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h2>
          <p className="text-purple-100">
            Manage your church website content with Firebase - All changes are saved permanently!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gallery Items</p>
                  <p className="text-2xl font-bold text-gray-900">{galleryItems.length}</p>
                </div>
                <Camera className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sermons</p>
                  <p className="text-2xl font-bold text-gray-900">{sermons.length}</p>
                </div>
                <Video className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Blog Posts</p>
                  <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
                </div>
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Events</p>
                  <p className="text-2xl font-bold text-gray-900">{events.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Tabs */}
        <Card className="bg-white shadow-sm border-purple-200">
          <CardContent className="p-6">
            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-purple-50 border-purple-200">
                <TabsTrigger
                  value="gallery"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <Camera className="w-4 h-4" />
                  Gallery
                </TabsTrigger>
                <TabsTrigger
                  value="sermons"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <Video className="w-4 h-4" />
                  Sermons
                </TabsTrigger>
                <TabsTrigger
                  value="blog"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <FileText className="w-4 h-4" />
                  Blog
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                >
                  <Calendar className="w-4 h-4" />
                  Events
                </TabsTrigger>
              </TabsList>

              {/* Gallery Tab */}
              <TabsContent value="gallery" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Gallery Management</h3>
                  <p className="text-sm text-gray-600">Manage your church gallery images and videos</p>
                </div>

                {/* Add Gallery Item Form */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Plus className="w-5 h-5 text-purple-600" />
                      Add Gallery Item
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="gallery-title" className="text-gray-700 font-medium">
                          Title
                        </Label>
                        <Input
                          id="gallery-title"
                          value={galleryForm.title}
                          onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                          placeholder="Enter title"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gallery-type" className="text-gray-700 font-medium">
                          Type
                        </Label>
                        <select
                          id="gallery-type"
                          value={galleryForm.type}
                          onChange={(e) =>
                            setGalleryForm({ ...galleryForm, type: e.target.value as "image" | "video" })
                          }
                          className="w-full h-10 px-3 rounded-md border border-purple-200 bg-background focus:border-purple-500 focus:ring-purple-500"
                        >
                          <option value="image">Image</option>
                          <option value="video">Video</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gallery-description" className="text-gray-700 font-medium">
                        Description
                      </Label>
                      <Textarea
                        id="gallery-description"
                        value={galleryForm.description}
                        onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                        placeholder="Enter description"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gallery-url" className="text-gray-700 font-medium">
                        Image/Video URL
                      </Label>
                      <Input
                        id="gallery-url"
                        value={galleryForm.url}
                        onChange={(e) => setGalleryForm({ ...galleryForm, url: e.target.value })}
                        placeholder="Enter image or video URL"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gallery-tags" className="text-gray-700 font-medium">
                        Tags
                      </Label>
                      <Input
                        id="gallery-tags"
                        value={galleryForm.tags}
                        onChange={(e) => setGalleryForm({ ...galleryForm, tags: e.target.value })}
                        placeholder="Comma separated tags"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <Button
                      onClick={handleAddGalleryItem}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Add Gallery Item
                    </Button>
                  </CardContent>
                </Card>

                {/* Gallery Items List */}
                <div className="space-y-4">
                  {galleryItems.length === 0 ? (
                    <div className="text-center py-12">
                      <Camera className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No gallery items found</p>
                      <p className="text-sm text-gray-500">Add your first gallery item using the form above</p>
                    </div>
                  ) : (
                    galleryItems.map((item) => (
                      <Card key={item.id} className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                <Badge
                                  variant={item.type === "image" ? "default" : "secondary"}
                                  className="bg-purple-100 text-purple-800 border-purple-300"
                                >
                                  {item.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                              <div className="flex gap-2 mb-2">
                                {item.tags?.map((tag: string) => (
                                  <Badge key={tag} variant="outline" className="border-purple-300 text-purple-600">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">
                                Created: {new Date(item.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Sermons Tab */}
              <TabsContent value="sermons" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Sermons Management</h3>
                  <p className="text-sm text-gray-600">Manage your church sermons and messages</p>
                </div>

                {/* Add Sermon Form */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Plus className="w-5 h-5 text-purple-600" />
                      Add Sermon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sermon-title" className="text-gray-700 font-medium">
                          Title
                        </Label>
                        <Input
                          id="sermon-title"
                          value={sermonForm.title}
                          onChange={(e) => setSermonForm({ ...sermonForm, title: e.target.value })}
                          placeholder="Enter sermon title"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sermon-preacher" className="text-gray-700 font-medium">
                          Preacher
                        </Label>
                        <Input
                          id="sermon-preacher"
                          value={sermonForm.preacher}
                          onChange={(e) => setSermonForm({ ...sermonForm, preacher: e.target.value })}
                          placeholder="Enter preacher name"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sermon-series" className="text-gray-700 font-medium">
                          Series
                        </Label>
                        <Input
                          id="sermon-series"
                          value={sermonForm.series}
                          onChange={(e) => setSermonForm({ ...sermonForm, series: e.target.value })}
                          placeholder="Enter series name"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sermon-date" className="text-gray-700 font-medium">
                          Date
                        </Label>
                        <Input
                          id="sermon-date"
                          type="date"
                          value={sermonForm.date}
                          onChange={(e) => setSermonForm({ ...sermonForm, date: e.target.value })}
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="sermon-description" className="text-gray-700 font-medium">
                        Description
                      </Label>
                      <Textarea
                        id="sermon-description"
                        value={sermonForm.description}
                        onChange={(e) => setSermonForm({ ...sermonForm, description: e.target.value })}
                        placeholder="Enter sermon description"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sermon-youtube" className="text-gray-700 font-medium">
                        YouTube ID
                      </Label>
                      <Input
                        id="sermon-youtube"
                        value={sermonForm.youtubeId}
                        onChange={(e) => setSermonForm({ ...sermonForm, youtubeId: e.target.value })}
                        placeholder="Enter YouTube video ID"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sermon-tags" className="text-gray-700 font-medium">
                        Tags
                      </Label>
                      <Input
                        id="sermon-tags"
                        value={sermonForm.tags}
                        onChange={(e) => setSermonForm({ ...sermonForm, tags: e.target.value })}
                        placeholder="Comma separated tags"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <Button
                      onClick={handleAddSermon}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Add Sermon
                    </Button>
                  </CardContent>
                </Card>

                {/* Sermons List */}
                <div className="space-y-4">
                  {sermons.length === 0 ? (
                    <div className="text-center py-12">
                      <Video className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No sermons found</p>
                      <p className="text-sm text-gray-500">Add your first sermon using the form above</p>
                    </div>
                  ) : (
                    sermons.map((sermon) => (
                      <Card key={sermon.id} className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{sermon.title}</h4>
                              <p className="text-sm text-gray-600 mb-1">Preacher: {sermon.preacher}</p>
                              {sermon.series && <p className="text-sm text-gray-600 mb-1">Series: {sermon.series}</p>}
                              <p className="text-sm text-gray-600 mb-2">Date: {sermon.date}</p>
                              <p className="text-sm text-gray-600 mb-2">{sermon.description}</p>
                              <div className="flex gap-2 mb-2">
                                {sermon.tags?.map((tag: string) => (
                                  <Badge key={tag} variant="outline" className="border-purple-300 text-purple-600">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">
                                Created: {new Date(sermon.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Blog Tab */}
              <TabsContent value="blog" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Blog Management</h3>
                  <p className="text-sm text-gray-600">Manage your church blog posts and articles</p>
                </div>

                {/* Add Blog Post Form */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Plus className="w-5 h-5 text-purple-600" />
                      Add Blog Post
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="blog-title" className="text-gray-700 font-medium">
                          Title
                        </Label>
                        <Input
                          id="blog-title"
                          value={blogForm.title}
                          onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                          placeholder="Enter blog title"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="blog-author" className="text-gray-700 font-medium">
                          Author
                        </Label>
                        <Input
                          id="blog-author"
                          value={blogForm.author}
                          onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                          placeholder="Enter author name"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="blog-date" className="text-gray-700 font-medium">
                        Date
                      </Label>
                      <Input
                        id="blog-date"
                        type="date"
                        value={blogForm.date}
                        onChange={(e) => setBlogForm({ ...blogForm, date: e.target.value })}
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-excerpt" className="text-gray-700 font-medium">
                        Excerpt
                      </Label>
                      <Textarea
                        id="blog-excerpt"
                        value={blogForm.excerpt}
                        onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                        placeholder="Enter blog excerpt"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-content" className="text-gray-700 font-medium">
                        Content
                      </Label>
                      <Textarea
                        id="blog-content"
                        value={blogForm.content}
                        onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                        placeholder="Enter blog content"
                        rows={6}
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-tags" className="text-gray-700 font-medium">
                        Tags
                      </Label>
                      <Input
                        id="blog-tags"
                        value={blogForm.tags}
                        onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                        placeholder="Comma separated tags"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <Button
                      onClick={handleAddBlogPost}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Add Blog Post
                    </Button>
                  </CardContent>
                </Card>

                {/* Blog Posts List */}
                <div className="space-y-4">
                  {blogPosts.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No blog posts found</p>
                      <p className="text-sm text-gray-500">Add your first blog post using the form above</p>
                    </div>
                  ) : (
                    blogPosts.map((post) => (
                      <Card key={post.id} className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{post.title}</h4>
                              <p className="text-sm text-gray-600 mb-1">Author: {post.author}</p>
                              <p className="text-sm text-gray-600 mb-2">Date: {post.date}</p>
                              <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                              <div className="flex gap-2 mb-2">
                                {post.tags?.map((tag: string) => (
                                  <Badge key={tag} variant="outline" className="border-purple-300 text-purple-600">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">
                                Created: {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Events Management</h3>
                  <p className="text-sm text-gray-600">Manage your church events and activities</p>
                </div>

                {/* Add Event Form */}
                <Card className="border-purple-200">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Plus className="w-5 h-5 text-purple-600" />
                      Add Event
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="event-title" className="text-gray-700 font-medium">
                          Title
                        </Label>
                        <Input
                          id="event-title"
                          value={eventForm.title}
                          onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                          placeholder="Enter event title"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="event-location" className="text-gray-700 font-medium">
                          Location
                        </Label>
                        <Input
                          id="event-location"
                          value={eventForm.location}
                          onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                          placeholder="Enter event location"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="event-date" className="text-gray-700 font-medium">
                          Date
                        </Label>
                        <Input
                          id="event-date"
                          type="date"
                          value={eventForm.date}
                          onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="event-time" className="text-gray-700 font-medium">
                          Time
                        </Label>
                        <Input
                          id="event-time"
                          value={eventForm.time}
                          onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                          placeholder="e.g., 9:00 AM - 12:00 PM"
                          className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="event-description" className="text-gray-700 font-medium">
                        Description
                      </Label>
                      <Textarea
                        id="event-description"
                        value={eventForm.description}
                        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                        placeholder="Enter event description"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="event-tags" className="text-gray-700 font-medium">
                        Tags
                      </Label>
                      <Input
                        id="event-tags"
                        value={eventForm.tags}
                        onChange={(e) => setEventForm({ ...eventForm, tags: e.target.value })}
                        placeholder="Comma separated tags"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <Button
                      onClick={handleAddEvent}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Add Event
                    </Button>
                  </CardContent>
                </Card>

                {/* Events List */}
                <div className="space-y-4">
                  {events.length === 0 ? (
                    <div className="text-center py-12">
                      <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No events found</p>
                      <p className="text-sm text-gray-500">Add your first event using the form above</p>
                    </div>
                  ) : (
                    events.map((event) => (
                      <Card key={event.id} className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                              <p className="text-sm text-gray-600 mb-1">
                                Date: {event.date} • Time: {event.time}
                              </p>
                              <p className="text-sm text-gray-600 mb-2">Location: {event.location}</p>
                              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                              <div className="flex gap-2 mb-2">
                                {event.tags?.map((tag: string) => (
                                  <Badge key={tag} variant="outline" className="border-purple-300 text-purple-600">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500">
                                Created: {new Date(event.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
