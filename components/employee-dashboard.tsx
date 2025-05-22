"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { Employee } from "@/types/employee"
import { fetchEmployees } from "@/lib/api"
import MainNavigation from "@/components/main-navigation"
import MobileNavigation from "@/components/mobile-navigation"
import ViewToggle from "@/components/view-toggle"
import EmployeeGrid from "@/components/employee-grid"
import EmployeeTiles from "@/components/employee-tiles"
import EmployeeDetail from "@/components/employee-detail"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "tile">("tile")
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees()
        setEmployees(data)
      } catch (error) {
        console.error("Failed to fetch employees:", error)
      } finally {
        setLoading(false)
      }
    }

    loadEmployees()
  }, [])

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(employee)
  }

  const handleBackToList = () => {
    setSelectedEmployee(null)
  }

  if (loading) {
    return <div className="p-8 text-center">Loading employee data...</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      {isMobile ? <MobileNavigation /> : <MainNavigation />}

      <div className="container mx-auto max-w-7xl px-4 py-6">
        {selectedEmployee ? (
          <div>
            <Button
              variant="ghost"
              onClick={handleBackToList}
              className="mb-4 flex items-center gap-1 text-primary hover:text-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {viewMode === "grid" ? "Grid" : "Tiles"}
            </Button>
            <EmployeeDetail employee={selectedEmployee} />
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Employee Directory
              </h1>
              <div className="flex w-full flex-1 flex-col gap-4 sm:flex-row md:w-auto md:justify-end">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search employees..."
                    className="w-full pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
            </div>

            {viewMode === "grid" ? (
              <EmployeeGrid employees={filteredEmployees} onEmployeeSelect={handleEmployeeSelect} />
            ) : (
              <EmployeeTiles employees={filteredEmployees} onEmployeeSelect={handleEmployeeSelect} />
            )}
          </>
        )}
      </div>
    </div>
  )
}
