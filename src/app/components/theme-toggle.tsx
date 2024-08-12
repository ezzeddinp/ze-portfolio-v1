"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button className="rounded-md z-50" variant="outline" size="sm" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <Sun
            className="h-[14px] w-[14px] rotate-0 scale-100 transition-all"
            color="#FFD700" // Set the initial color for the sun icon (yellow)
          />
          <span className="sr-only">Switch to dark mode</span>
        </>
      ) : (
        <>
          <Moon
            className="h-[14px] w-[14px] rotate-0 scale-100 transition-all"
            color="#FFFFFF" // Set the color for the moon icon when in dark mode (white)
          />
          <span className="sr-only">Switch to light mode</span>
        </>
      )}
    </Button>
  )
}
