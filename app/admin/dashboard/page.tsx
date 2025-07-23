"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { db } from "@/lib/firebase"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore"
import { toast } from "sonner"
import Image from "next/image"
import { Trash2, Edit } from "lucide-react"
import { uploadToCloudinary } from "@/lib/cloudinary" // Import Cloudinary utility

// Helper to format Firebase Timestamp
const formatDate = (timestamp: any) => {
  if (!timestamp) return "N/A"
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sermons, setSermons] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [galleryItems, setGalleryItems] = useState<any[]>([])
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState<any[]>([])

  // Sermon form states
  const [sermonTitle, setSermonTitle] = useState("")
  const [sermonPreacher, setSermonPreacher] = useState("")
  const [sermonDate, setSermonDate] = useState("")
  const [sermonYoutubeUrl, setSermonYoutubeUrl] = useState("")
  const [sermonDescription, setSermonDescription] = useState("")
  const [editingSermonId, setEditingSermonId] = useState<string | null>(null)

  // Event form states
  const [eventTitle, setEventTitle] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [editingEventId, setEditingEventId] = useState<string | null>(null)

  // Blog form states
  const [blogTitle, setBlogTitle] = useState("")
  const [blogAuthor, setBlogAuthor] = useState("")
  const [blogDate, setBlogDate] = useState("")
  const [blogContent, setBlogContent] = useState("")
  const [blogImageUrl, setBlogImageUrl] = useState("")
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null)
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null)

  // Gallery form states
  const [galleryTitle, setGalleryTitle] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [galleryType, setGalleryType] = useState<"image" | "video">("image")
  const [galleryFile, setGalleryFile] = useState<File | null>(null)
  const [galleryUrl, setGalleryUrl] = useState("") // For video URLs or existing image URLs
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null)

  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth")
    if (authStatus === "true") {
      setIsLoggedIn(true)
      fetchData()
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const fetchData = async () => {
    try {
      // Fetch Sermons
      const sermonsCollection = collection(db, "sermons")
      const sermonSnapshot = await getDocs(query(sermonsCollection, orderBy("date", "desc")))
      const sermonsList = sermonSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setSermons(sermonsList)

      // Fetch Events (Announcements)
      const eventsCollection = collection(db, "announcements")
      const eventSnapshot = await getDocs(query(eventsCollection, orderBy("date", "desc")))
      const eventsList = eventSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setEvents(eventsList)

      // Fetch Blog Posts
      const blogCollection = collection(db, "blog")
      const blogSnapshot = await getDocs(query(blogCollection, orderBy("date", "desc")))
      const blogList = blogSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setBlogPosts(blogList)

      // Fetch Gallery Items
      const galleryCollection = collection(db, "gallery")
      const gallerySnapshot = await getDocs(query(galleryCollection, orderBy("dateUploaded", "desc")))
      const galleryList = gallerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setGalleryItems(galleryList)

      // Fetch Newsletter Subscriptions
      const newsletterCollection = collection(db, "newsletter_subscriptions") // Corrected collection name
      const newsletterSnapshot = await getDocs(newsletterCollection)
      const newsletterList = newsletterSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setNewsletterSubscriptions(newsletterList)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast.error("Failed to fetch data.")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    setIsLoggedIn(false)
    router.push("/admin/login")
  }

  // --- Sermon Management ---
  const handleAddSermon = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newSermon = {
        title: sermonTitle,
        preacher: sermonPreacher,
        date: new Date(sermonDate),
        youtubeUrl: sermonYoutubeUrl,
        description: sermonDescription,
      }
      if (editingSermonId) {
        await updateDoc(doc(db, "sermons", editingSermonId), newSermon)
        toast.success("Sermon updated successfully!")
      } else {
        await addDoc(collection(db, "sermons"), newSermon)
        toast.success("Sermon added successfully!")
      }
      resetSermonForm()
      fetchData()
    } catch (error) {
      console.error("Error adding/updating sermon:", error)
      toast.error("Failed to add/update sermon.")
    }
  }

  const handleEditSermon = (sermon: any) => {
    setEditingSermonId(sermon.id)
    setSermonTitle(sermon.title)
    setSermonPreacher(sermon.preacher)
    setSermonDate(sermon.date.toDate().toISOString().split("T")[0]) // Format date for input
    setSermonYoutubeUrl(sermon.youtubeUrl)
    setSermonDescription(sermon.description)
  }

  const handleDeleteSermon = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this sermon?")) {
      try {
        await deleteDoc(doc(db, "sermons", id))
        toast.success("Sermon deleted successfully!")
        fetchData()
      } catch (error) {
        console.error("Error deleting sermon:", error)
        toast.error("Failed to delete sermon.")
      }
    }
  }

  const resetSermonForm = () => {
    setSermonTitle("")
    setSermonPreacher("")
    setSermonDate("")
    setSermonYoutubeUrl("")
    setSermonDescription("")
    setEditingSermonId(null)
  }

  // --- Event Management ---
  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newEvent = {
        title: eventTitle,
        date: new Date(eventDate),
        time: eventTime,
        location: eventLocation,
        description: eventDescription,
      }
      if (editingEventId) {
        await updateDoc(doc(db, "announcements", editingEventId), newEvent)
        toast.success("Event updated successfully!")
      } else {
        await addDoc(collection(db, "announcements"), newEvent)
        toast.success("Event added successfully!")
      }
      resetEventForm()
      fetchData()
    } catch (error) {
      console.error("Error adding/updating event:", error)
      toast.error("Failed to add/update event.")
    }
  }

  const handleEditEvent = (event: any) => {
    setEditingEventId(event.id)
    setEventTitle(event.title)
    setEventDate(event.date.toDate().toISOString().split("T")[0])
    setEventTime(event.time)
    setEventLocation(event.location)
    setEventDescription(event.description)
  }

  const handleDeleteEvent = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteDoc(doc(db, "announcements", id))
        toast.success("Event deleted successfully!")
        fetchData()
      } catch (error) {
        console.error("Error deleting event:", error)
        toast.error("Failed to delete event.")
      }
    }
  }

  const resetEventForm = () => {
    setEventTitle("")
    setEventDate("")
    setEventTime("")
    setEventLocation("")
    setEventDescription("")
    setEditingEventId(null)
  }

  // --- Blog Management ---
  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageUrlToSave = blogImageUrl
      if (blogImageFile) {
        const uploadResult = await uploadToCloudinary(blogImageFile, "image")
        imageUrlToSave = uploadResult.url
      }

      const newBlog = {
        title: blogTitle,
        author: blogAuthor,
        date: new Date(blogDate),
        content: blogContent,
        imageUrl: imageUrlToSave,
      }

      if (editingBlogId) {
        await updateDoc(doc(db, "blog", editingBlogId), newBlog)
        toast.success("Blog post updated successfully!")
      } else {
        await addDoc(collection(db, "blog"), newBlog)
        toast.success("Blog post added successfully!")
      }
      resetBlogForm()
      fetchData()
    } catch (error) {
      console.error("Error adding/updating blog post:", error)
      toast.error("Failed to add/update blog post.")
    }
  }

  const handleEditBlog = (post: any) => {
    setEditingBlogId(post.id)
    setBlogTitle(post.title)
    setBlogAuthor(post.author)
    setBlogDate(post.date.toDate().toISOString().split("T")[0])
    setBlogContent(post.content)
    setBlogImageUrl(post.imageUrl || "")
    setBlogImageFile(null) // Clear file input when editing
  }

  const handleDeleteBlog = async (id: string, imageUrl?: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteDoc(doc(db, "blog", id))
        // Note: Deleting from Cloudinary securely requires a server-side operation.
        // For simplicity, we are only deleting the database record here.
        toast.success("Blog post deleted successfully!")
        fetchData()
      } catch (error) {
        console.error("Error deleting blog post:", error)
        toast.error("Failed to delete blog post.")
      }
    }
  }

  const resetBlogForm = () => {
    setBlogTitle("")
    setBlogAuthor("")
    setBlogDate("")
    setBlogContent("")
    setBlogImageUrl("")
    setBlogImageFile(null)
    setEditingBlogId(null)
  }

  // --- Gallery Management ---
  const handleAddGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let mediaUrlToSave = galleryUrl
      if (galleryFile) {
        const resourceType = galleryType === "image" ? "image" : "video"
        const uploadResult = await uploadToCloudinary(galleryFile, resourceType)
        mediaUrlToSave = uploadResult.url
      }

      const newGalleryItem = {
        title: galleryTitle,
        description: galleryDescription,
        type: galleryType,
        imageUrl: galleryType === "image" ? mediaUrlToSave : "",
        videoUrl: galleryType === "video" ? mediaUrlToSave : "",
        dateUploaded: new Date(),
      }

      if (editingGalleryId) {
        await updateDoc(doc(db, "gallery", editingGalleryId), newGalleryItem)
        toast.success("Gallery item updated successfully!")
      } else {
        await addDoc(collection(db, "gallery"), newGalleryItem)
        toast.success("Gallery item added successfully!")
      }
      resetGalleryForm()
      fetchData()
    } catch (error) {
      console.error("Error adding/updating gallery item:", error)
      toast.error("Failed to add/update gallery item.")
    }
  }

  const handleEditGalleryItem = (item: any) => {
    setEditingGalleryId(item.id)
    setGalleryTitle(item.title)
    setGalleryDescription(item.description)
    setGalleryType(item.type)
    setGalleryUrl(item.imageUrl || item.videoUrl || "")
    setGalleryFile(null)
  }

  const handleDeleteGalleryItem = async (id: string, url?: string) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      try {
        await deleteDoc(doc(db, "gallery", id))
        // Note: Deleting from Cloudinary securely requires a server-side operation.
        // For simplicity, we are only deleting the database record here.
        toast.success("Gallery item deleted successfully!")
        fetchData()
      } catch (error) {
        console.error("Error deleting gallery item:", error)
        toast.error("Failed to delete gallery item.")
      }
    }
  }

  const resetGalleryForm = () => {
    setGalleryTitle("")
    setGalleryDescription("")
    setGalleryType("image")
    setGalleryFile(null)
    setGalleryUrl("")
    setEditingGalleryId(null)
  }

  if (!isLoggedIn) {
    return null // Or a loading spinner, as redirect happens in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="destructive">
          Logout
        </Button>
      </div>

      <Tabs defaultValue="sermons" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="sermons">Sermons</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
        </TabsList>

        {/* Sermons Tab */}
        <TabsContent value="sermons" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{editingSermonId ? "Edit Sermon" : "Add New Sermon"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddSermon} className="space-y-4">
                <div>
                  <Label htmlFor="sermonTitle">Title</Label>
                  <Input
                    id="sermonTitle"
                    value={sermonTitle}
                    onChange={(e) => setSermonTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sermonPreacher">Preacher</Label>
                  <Input
                    id="sermonPreacher"
                    value={sermonPreacher}
                    onChange={(e) => setSermonPreacher(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sermonDate">Date</Label>
                  <Input
                    id="sermonDate"
                    type="date"
                    value={sermonDate}
                    onChange={(e) => setSermonDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sermonYoutubeUrl">YouTube URL</Label>
                  <Input
                    id="sermonYoutubeUrl"
                    value={sermonYoutubeUrl}
                    onChange={(e) => setSermonYoutubeUrl(e.target.value)}
                    placeholder="e.g., https://www.youtube.com/watch?v=VIDEO_ID"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sermonDescription">Description</Label>
                  <Textarea
                    id="sermonDescription"
                    value={sermonDescription}
                    onChange={(e) => setSermonDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">{editingSermonId ? "Update Sermon" : "Add Sermon"}</Button>
                  {editingSermonId && (
                    <Button type="button" variant="outline" onClick={resetSermonForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Existing Sermons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sermons.length === 0 ? (
                  <p>No sermons added yet.</p>
                ) : (
                  sermons.map((sermon) => (
                    <div key={sermon.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{sermon.title}</h3>
                        <p className="text-sm text-gray-600">
                          {sermon.preacher} - {formatDate(sermon.date)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleEditSermon(sermon)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteSermon(sermon.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{editingEventId ? "Edit Event" : "Add New Event"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <Label htmlFor="eventTitle">Title</Label>
                  <Input id="eventTitle" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="eventDate">Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="eventTime">Time</Label>
                  <Input
                    id="eventTime"
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="eventLocation">Location</Label>
                  <Input
                    id="eventLocation"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="eventDescription">Description</Label>
                  <Textarea
                    id="eventDescription"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">{editingEventId ? "Update Event" : "Add Event"}</Button>
                  {editingEventId && (
                    <Button type="button" variant="outline" onClick={resetEventForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Existing Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.length === 0 ? (
                  <p>No events added yet.</p>
                ) : (
                  events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {formatDate(event.date)} at {event.time} - {event.location}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleEditEvent(event)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteEvent(event.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blog Tab */}
        <TabsContent value="blog" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{editingBlogId ? "Edit Blog Post" : "Add New Blog Post"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddBlog} className="space-y-4">
                <div>
                  <Label htmlFor="blogTitle">Title</Label>
                  <Input id="blogTitle" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="blogAuthor">Author</Label>
                  <Input id="blogAuthor" value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="blogDate">Date</Label>
                  <Input
                    id="blogDate"
                    type="date"
                    value={blogDate}
                    onChange={(e) => setBlogDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="blogContent">Content</Label>
                  <Textarea
                    id="blogContent"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    required
                    rows={8}
                  />
                </div>
                <div>
                  <Label htmlFor="blogImage">Image</Label>
                  <Input
                    id="blogImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setBlogImageFile(e.target.files ? e.target.files[0] : null)}
                  />
                  {blogImageUrl && !blogImageFile && (
                    <p className="text-sm text-gray-500 mt-1">
                      Current image:{" "}
                      <a
                        href={blogImageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">{editingBlogId ? "Update Blog Post" : "Add Blog Post"}</Button>
                  {editingBlogId && (
                    <Button type="button" variant="outline" onClick={resetBlogForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Existing Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.length === 0 ? (
                  <p>No blog posts added yet.</p>
                ) : (
                  blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-600">
                          {post.author} - {formatDate(post.date)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleEditBlog(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDeleteBlog(post.id, post.imageUrl)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{editingGalleryId ? "Edit Gallery Item" : "Add New Gallery Item"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddGalleryItem} className="space-y-4">
                <div>
                  <Label htmlFor="galleryTitle">Title</Label>
                  <Input
                    id="galleryTitle"
                    value={galleryTitle}
                    onChange={(e) => setGalleryTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="galleryDescription">Description</Label>
                  <Textarea
                    id="galleryDescription"
                    value={galleryDescription}
                    onChange={(e) => setGalleryDescription(e.target.value)}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="galleryType">Type</Label>
                  <select
                    id="galleryType"
                    value={galleryType}
                    onChange={(e) => setGalleryType(e.target.value as "image" | "video")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                {(galleryType === "image" || galleryType === "video") && ( // Allow file input for both types
                  <div>
                    <Label htmlFor="galleryFile">{galleryType === "image" ? "Image File" : "Video File"}</Label>
                    <Input
                      id="galleryFile"
                      type="file"
                      accept={galleryType === "image" ? "image/*" : "video/*"}
                      onChange={(e) => setGalleryFile(e.target.files ? e.target.files[0] : null)}
                    />
                    {galleryUrl && !galleryFile && (
                      <p className="text-sm text-gray-500 mt-1">
                        Current {galleryType}:{" "}
                        <a
                          href={galleryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </p>
                    )}
                  </div>
                )}
                {/* Removed separate video URL input as file upload handles it */}
                <div className="flex space-x-2">
                  <Button type="submit">{editingGalleryId ? "Update Gallery Item" : "Add Gallery Item"}</Button>
                  {editingGalleryId && (
                    <Button type="button" variant="outline" onClick={resetGalleryForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Existing Gallery Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryItems.length === 0 ? (
                  <p className="col-span-full">No gallery items added yet.</p>
                ) : (
                  galleryItems.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
                      {item.type === "image" && item.imageUrl && (
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover"
                        />
                      )}
                      {item.type === "video" && item.videoUrl && (
                        <div className="w-full h-32 bg-black flex items-center justify-center text-white text-sm">
                          Video Preview
                        </div>
                      )}
                      <div className="p-3">
                        <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{formatDate(item.dateUploaded)}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 bg-transparent"
                            onClick={() => handleEditGalleryItem(item)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => handleDeleteGalleryItem(item.id, item.imageUrl || item.videoUrl)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Newsletter Tab */}
        <TabsContent value="newsletter" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newsletterSubscriptions.length === 0 ? (
                  <p>No newsletter subscribers yet.</p>
                ) : (
                  <ul className="list-disc pl-5">
                    {newsletterSubscriptions.map((sub) => (
                      <li key={sub.id} className="text-gray-800">
                        {sub.email} (Subscribed: {formatDate(sub.subscribedAt)})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
