import { Loader2 } from "lucide-react"

export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-20">
          <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Events</h2>
          <p className="text-gray-600">Please wait while we load the events...</p>
        </div>
      </div>
    </div>
  )
}
