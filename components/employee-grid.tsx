"use client"

import type { Employee } from "@/types/employee"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials, getDepartmentColor } from "@/lib/utils"

interface EmployeeGridProps {
  employees: Employee[]
  onEmployeeSelect: (employee: Employee) => void
}

export default function EmployeeGrid({ employees, onEmployeeSelect }: EmployeeGridProps) {
  if (employees.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
        <p className="text-center text-muted-foreground">No employees found</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px]">Hire Date</TableHead>
            <TableHead className="w-[100px]">Experience</TableHead>
            <TableHead className="text-right">Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => onEmployeeSelect(employee)}
            >
              <TableCell className="font-medium">{employee.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                    <AvatarFallback className="text-xs">{getInitials(employee.name)}</AvatarFallback>
                  </Avatar>
                  <span>{employee.name}</span>
                </div>
              </TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getDepartmentColor(employee.department)}>
                  {employee.department}
                </Badge>
              </TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.location}</TableCell>
              <TableCell>
                <Badge variant={employee.status === "Active" ? "success" : "destructive"}>{employee.status}</Badge>
              </TableCell>
              <TableCell>{employee.hireDate}</TableCell>
              <TableCell>{employee.experience} years</TableCell>
              <TableCell className="text-right">${employee.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
