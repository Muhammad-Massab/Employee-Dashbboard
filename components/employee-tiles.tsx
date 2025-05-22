"use client"

import type { Employee } from "@/types/employee"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, Flag, MoreVertical, Trash2, Mail, MapPin, Calendar, Briefcase } from "lucide-react"
import { getInitials, getDepartmentColor } from "@/lib/utils"

interface EmployeeTilesProps {
  employees: Employee[]
  onEmployeeSelect: (employee: Employee) => void
}

export default function EmployeeTiles({ employees, onEmployeeSelect }: EmployeeTilesProps) {
  if (employees.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
        <p className="text-center text-muted-foreground">No employees found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {employees.map((employee) => (
        <Card key={employee.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <div className="cursor-pointer" onClick={() => onEmployeeSelect(employee)}>
            <div className={`h-2 w-full ${getDepartmentColor(employee.department, true)}`} />
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <Avatar className="h-16 w-16 border-2 border-background">
                  <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                  <AvatarFallback className="text-lg">{getInitials(employee.name)}</AvatarFallback>
                </Avatar>
                <Badge variant={employee.status === "Active" ? "success" : "destructive"}>{employee.status}</Badge>
              </div>

              <h3 className="mb-1 text-xl font-semibold">{employee.name}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{employee.position}</p>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{employee.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className={getDepartmentColor(employee.department)}>
                    {employee.department}
                  </Badge>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{employee.location}</span>
                </div>
              </div>
            </CardContent>
          </div>

          <CardFooter className="flex items-center justify-between bg-muted/30 px-6 py-3">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Joined {employee.hireDate}</span>
            </div>
            <EmployeeActions employee={employee} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function EmployeeActions({ employee }: { employee: Employee }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center">
          <Edit className="mr-2 h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center">
          <Flag className="mr-2 h-4 w-4" />
          <span>Flag for review</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center text-destructive focus:text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
