import { SidebarTrigger } from "@/components/ui/sidebar"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-2 px-6 py-4 border-b">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>

      <div className="flex-1 p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <Settings className="h-16 w-16 text-muted-foreground mx-auto" />
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="text-muted-foreground max-w-md">
              Application settings, user preferences, and configuration options would be available here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
