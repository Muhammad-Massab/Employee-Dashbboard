import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

// Get color based on department
export function getDepartmentColor(department: string, bg = false): string {
  const colors: Record<string, { text: string; bg: string }> = {
    Engineering: { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-600" },
    Product: { text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-600" },
    Design: { text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-600" },
    Marketing: { text: "text-green-600 dark:text-green-400", bg: "bg-green-600" },
    Data: { text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-600" },
    "Human Resources": { text: "text-red-600 dark:text-red-400", bg: "bg-red-600" },
    Finance: { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-600" },
    "Customer Success": { text: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-600" },
  }

  const defaultColor = { text: "text-slate-600 dark:text-slate-400", bg: "bg-slate-600" }
  const color = colors[department] || defaultColor

  return bg ? color.bg : color.text
}
