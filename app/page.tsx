import { Suspense } from "react"
import EmployeeDashboard from "@/components/employee-dashboard"
import { Loader2 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Suspense fallback={<DashboardLoading />}>
        <EmployeeDashboard />
      </Suspense>
    </main>
  )
}

function DashboardLoading() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <span className="ml-2 text-xl font-medium text-muted-foreground">Loading dashboard...</span>
    </div>
  )
}
