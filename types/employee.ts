export interface Employee {
  id: number
  name: string
  email: string
  phone: string
  position: string
  department: string
  location: string
  status: "Active" | "Inactive"
  hireDate: string
  experience: number
  salary: number
  bonus: number
  avatar: string
  birthDate: string
  address: string
  education: {
    degree: string
    institution: string
    year: string
  }[]
  skills: string[]
  lastReview: string
  nextReview: string
  benefits: string[]
  achievements: {
    title: string
    date: string
  }[]
  activities: {
    description: string
    date: string
  }[]
  documents: {
    name: string
    date: string
    size: string
  }[]
  history: {
    position: string
    department: string
    period: string
    description: string
  }[]
}
