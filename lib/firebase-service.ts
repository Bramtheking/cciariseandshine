import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"
import { db } from "./firebase"

// Types
export interface GalleryItem {
  id: string
  title: string
  description: string
  type: "image" | "video"
  url: string
  thumbnail?: string
  tags: string[]
  date: string
  createdAt: Date
  updatedAt: Date
}

export interface Sermon {
  id: string
  title: string
  description: string
  preacher: string
  series?: string
  youtubeId?: string
  image?: string
  tags: string[]
  date: string
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  image?: string
  tags: string[]
  date: string
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  location: string
  time: string
  endDate?: string
  type: "event" | "announcement"
  featured: boolean
  image?: string
  tags: string[]
  date: string
  createdAt: Date
  updatedAt: Date
}

// Gallery functions
export const getAllGalleryItems = async (): Promise<GalleryItem[]> => {
  try {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as GalleryItem[]
  } catch (error) {
    console.error("Error getting gallery items:", error)
    throw error
  }
}

export const addGalleryItem = async (item: Omit<GalleryItem, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  try {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, "gallery"), {
      ...item,
      createdAt: now,
      updatedAt: now,
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding gallery item:", error)
    throw error
  }
}

export const updateGalleryItem = async (id: string, updates: Partial<GalleryItem>): Promise<void> => {
  try {
    const docRef = doc(db, "gallery", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating gallery item:", error)
    throw error
  }
}

export const deleteGalleryItem = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "gallery", id))
  } catch (error) {
    console.error("Error deleting gallery item:", error)
    throw error
  }
}

// Sermon functions
export const getAllSermons = async (): Promise<Sermon[]> => {
  try {
    const q = query(collection(db, "sermons"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as Sermon[]
  } catch (error) {
    console.error("Error getting sermons:", error)
    throw error
  }
}

export const addSermon = async (sermon: Omit<Sermon, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  try {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, "sermons"), {
      ...sermon,
      createdAt: now,
      updatedAt: now,
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding sermon:", error)
    throw error
  }
}

export const updateSermon = async (id: string, updates: Partial<Sermon>): Promise<void> => {
  try {
    const docRef = doc(db, "sermons", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating sermon:", error)
    throw error
  }
}

export const deleteSermon = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "sermons", id))
  } catch (error) {
    console.error("Error deleting sermon:", error)
    throw error
  }
}

// Blog functions
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, "blog"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
  } catch (error) {
    console.error("Error getting blog posts:", error)
    throw error
  }
}

export const addBlogPost = async (post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  try {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, "blog"), {
      ...post,
      createdAt: now,
      updatedAt: now,
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding blog post:", error)
    throw error
  }
}

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<void> => {
  try {
    const docRef = doc(db, "blog", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating blog post:", error)
    throw error
  }
}

export const deleteBlogPost = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "blog", id))
  } catch (error) {
    console.error("Error deleting blog post:", error)
    throw error
  }
}

// Event functions
export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as Event[]
  } catch (error) {
    console.error("Error getting events:", error)
    throw error
  }
}

export const addEvent = async (event: Omit<Event, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  try {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, "events"), {
      ...event,
      createdAt: now,
      updatedAt: now,
    })
    return docRef.id
  } catch (error) {
    console.error("Error adding event:", error)
    throw error
  }
}

export const updateEvent = async (id: string, updates: Partial<Event>): Promise<void> => {
  try {
    const docRef = doc(db, "events", id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating event:", error)
    throw error
  }
}

export const deleteEvent = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "events", id))
  } catch (error) {
    console.error("Error deleting event:", error)
    throw error
  }
}

// Helper functions for getting recent items
export const getRecentGalleryItems = async (limitCount = 6): Promise<GalleryItem[]> => {
  try {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"), limit(limitCount))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as GalleryItem[]
  } catch (error) {
    console.error("Error getting recent gallery items:", error)
    throw error
  }
}

export const getRecentSermons = async (limitCount = 3): Promise<Sermon[]> => {
  try {
    const q = query(collection(db, "sermons"), orderBy("createdAt", "desc"), limit(limitCount))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as Sermon[]
  } catch (error) {
    console.error("Error getting recent sermons:", error)
    throw error
  }
}

export const getRecentBlogPosts = async (limitCount = 3): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, "blog"), orderBy("createdAt", "desc"), limit(limitCount))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
  } catch (error) {
    console.error("Error getting recent blog posts:", error)
    throw error
  }
}

export const getUpcomingEvents = async (limitCount = 3): Promise<Event[]> => {
  try {
    const q = query(collection(db, "events"), orderBy("date", "asc"), limit(limitCount))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as Event[]
  } catch (error) {
    console.error("Error getting upcoming events:", error)
    throw error
  }
}

// Legacy function names for backward compatibility
export const getGalleryItems = getAllGalleryItems
export const getSermons = getAllSermons
export const getBlogPosts = getAllBlogPosts
export const getEvents = getAllEvents
