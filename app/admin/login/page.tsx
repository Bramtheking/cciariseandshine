"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if already logged in
    const isLoggedIn = localStorage.getItem("adminAuth")
    if (isLoggedIn === "true") {
      router.push("/admin/dashboard")
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const hardcodedUsername = "admin"
    const hardcodedPassword = "bram"

    // Check environment variables for production credentials
    const envUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
    const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    let isAuthenticated = false

    // Check hardcoded credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      isAuthenticated = true
    }

    // Check environment variable credentials if they exist
    if (envUsername && envPassword && username === envUsername && password === envPassword) {
      isAuthenticated = true
    }

    if (isAuthenticated) {
      localStorage.setItem("adminAuth", "true") // Corrected key
      toast.success("Login successful!")
      router.push("/admin/dashboard")
    } else {
      toast.error("Invalid username or password.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-purple-800">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
