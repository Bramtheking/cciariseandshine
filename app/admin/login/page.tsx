"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Eye, EyeOff } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simple authentication check
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123"

    if (username === adminUsername && password === adminPassword) {
      sessionStorage.setItem("adminAuthenticated", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid username or password")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl border-0 rounded-2xl">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/church-logo.png"
              alt="Arise and Shine CCI Thika Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">Admin Login</CardTitle>
          <p className="text-gray-600 mt-2">Access the dashboard to manage your church website</p>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-gray-700 font-semibold">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 h-12 rounded-xl border-2 border-gray-200 focus:border-purple-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700 font-semibold">
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-2 border-gray-200 focus:border-purple-500 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">{error}</div>}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {loading ? (
                "Signing in..."
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
