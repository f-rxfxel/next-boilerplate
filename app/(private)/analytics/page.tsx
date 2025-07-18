import { SidebarTrigger } from "@/components/ui/sidebar"
import { BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-2 px-6 py-4 border-b">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Analytics</h1>
      </header>

      <div className="flex-1 p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto" />
            <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
            <p className="text-muted-foreground max-w-md">
              Detailed analytics and reporting features would be implemented here, including property performance
              metrics, lead conversion rates, and market insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
