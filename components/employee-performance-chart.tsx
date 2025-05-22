"use client"

import type { Employee } from "@/types/employee"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface EmployeePerformanceChartProps {
  employee: Employee
}

export default function EmployeePerformanceChart({ employee }: EmployeePerformanceChartProps) {
  // Generate performance data for the chart
  const performanceData = [
    { month: "Jan", performance: 85, target: 80, teamAvg: 78 },
    { month: "Feb", performance: 82, target: 80, teamAvg: 76 },
    { month: "Mar", performance: 88, target: 82, teamAvg: 80 },
    { month: "Apr", performance: 90, target: 82, teamAvg: 81 },
    { month: "May", performance: 87, target: 84, teamAvg: 82 },
    { month: "Jun", performance: 92, target: 84, teamAvg: 83 },
    { month: "Jul", performance: 94, target: 86, teamAvg: 85 },
    { month: "Aug", performance: 91, target: 86, teamAvg: 84 },
    { month: "Sep", performance: 93, target: 88, teamAvg: 86 },
    { month: "Oct", performance: 95, target: 88, teamAvg: 87 },
    { month: "Nov", performance: 94, target: 90, teamAvg: 88 },
    { month: "Dec", performance: 96, target: 90, teamAvg: 89 },
  ]

  return (
    <Chart>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: "#888", strokeWidth: 1 }}
              axisLine={{ stroke: "#888", strokeWidth: 1 }}
            />
            <YAxis
              domain={[50, 100]}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: "#888", strokeWidth: 1 }}
              axisLine={{ stroke: "#888", strokeWidth: 1 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltip>
                      <ChartTooltipContent>
                        <div className="font-medium">{label}</div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <div>Performance: {payload[0].value}%</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                          <div>Target: {payload[1].value}%</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                          <div>Team Avg: {payload[2].value}%</div>
                        </div>
                      </ChartTooltipContent>
                    </ChartTooltip>
                  )
                }
                return null
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Performance"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--amber-500))"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              name="Target"
            />
            <Line
              type="monotone"
              dataKey="teamAvg"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Team Average"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Chart>
  )
}
