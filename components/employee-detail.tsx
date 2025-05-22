import type { Employee } from "@/types/employee"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Edit,
  Flag,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Clock,
  DollarSign,
  User,
  FileText,
  BarChart3,
} from "lucide-react"
import { getInitials, getDepartmentColor } from "@/lib/utils"
import EmployeePerformanceChart from "@/components/employee-performance-chart"

interface EmployeeDetailProps {
  employee: Employee
}

export default function EmployeeDetail({ employee }: EmployeeDetailProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
              <AvatarFallback className="text-2xl">{getInitials(employee.name)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{employee.name}</h2>
                <Badge variant={employee.status === "Active" ? "success" : "destructive"}>{employee.status}</Badge>
              </div>
              <p className="text-lg text-muted-foreground">{employee.position}</p>

              <div className="mt-3 flex flex-wrap gap-3">
                <Badge variant="outline" className={getDepartmentColor(employee.department)}>
                  {employee.department}
                </Badge>
                <div className="flex items-center text-sm">
                  <Mail className="mr-1.5 h-4 w-4 text-muted-foreground" />
                  <span>{employee.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="mr-1.5 h-4 w-4 text-muted-foreground" />
                  <span>{employee.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-1.5 h-4 w-4 text-muted-foreground" />
                  <span>{employee.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 self-start">
              <Button size="sm" className="gap-1">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </Button>
              <Button size="sm" variant="outline" className="gap-1">
                <Flag className="h-4 w-4" />
                <span>Flag</span>
              </Button>
              <Button size="sm" variant="destructive" className="gap-1">
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                    <p>{employee.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Employee ID</p>
                    <p>#{employee.id.toString().padStart(5, "0")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{employee.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>{employee.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                    <p>{employee.birthDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p>{employee.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Employment Details
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Position</p>
                    <p>{employee.position}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Department</p>
                    <Badge variant="outline" className={getDepartmentColor(employee.department)}>
                      {employee.department}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Hire Date</p>
                    <p>{employee.hireDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge variant={employee.status === "Active" ? "success" : "destructive"}>{employee.status}</Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Experience</p>
                    <p>{employee.experience} years</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p>{employee.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education & Skills
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Education</p>
                  <ul className="mt-1 space-y-2">
                    {employee.education.map((edu, index) => (
                      <li key={index} className="text-sm">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Skills</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {employee.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Compensation
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Base Salary</p>
                    <p className="text-lg font-medium">${employee.salary.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Bonus</p>
                    <p className="text-lg font-medium">${employee.bonus.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Review</p>
                    <p>{employee.lastReview}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Next Review</p>
                    <p>{employee.nextReview}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Benefits</p>
                  <ul className="mt-1 list-disc pl-5 text-sm">
                    {employee.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <h3 className="flex items-center gap-2 text-lg font-medium">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance Metrics
              </h3>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <EmployeePerformanceChart employee={employee} />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {employee.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <h3 className="flex items-center gap-2 text-lg font-medium">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activities
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {employee.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                      <div>
                        <p className="font-medium">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="mt-4">
          <Card>
            <CardHeader className="pb-2">
              <h3 className="flex items-center gap-2 text-lg font-medium">
                <FileText className="h-5 w-5 text-primary" />
                Documents
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                {employee.documents.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Added on {doc.date} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader className="pb-2">
              <h3 className="flex items-center gap-2 text-lg font-medium">
                <Clock className="h-5 w-5 text-primary" />
                Employment History
              </h3>
            </CardHeader>
            <CardContent>
              <div className="relative ml-3 border-l pl-8 pt-2">
                {employee.history.map((item, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="absolute -left-11 mt-1.5 h-4 w-4 rounded-full border-4 border-primary bg-background"></div>
                    <div>
                      <p className="font-medium">{item.position}</p>
                      <p className="text-sm text-muted-foreground">{item.department}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                      <p className="mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
