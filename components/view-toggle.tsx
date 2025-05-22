"use client"

import { Button } from "@/components/ui/button"
import { LayoutGrid, Rows } from "lucide-react"

interface ViewToggleProps {
  viewMode: "grid" | "tile"
  setViewMode: (mode: "grid" | "tile") => void
}

export default function ViewToggle({ viewMode, setViewMode }: ViewToggleProps) {
  return (
    <div className="flex items-center rounded-md border p-1">
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        className="h-8 gap-1"
        onClick={() => setViewMode("grid")}
      >
        <Rows className="h-4 w-4" />
        <span className="hidden sm:inline-block">Grid</span>
      </Button>
      <Button
        variant={viewMode === "tile" ? "default" : "ghost"}
        size="sm"
        className="h-8 gap-1"
        onClick={() => setViewMode("tile")}
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="hidden sm:inline-block">Tiles</span>
      </Button>
    </div>
  )
}
