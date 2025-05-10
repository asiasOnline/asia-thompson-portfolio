"use client"

import React, { useEffect, useState } from "react"
import { PiSun, PiMoon, PiMonitor } from "react-icons/pi"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  // Choose the icon based on current theme
  const getIcon = () => {
    if (!mounted) return <div className="h-6 w-6" /> // Keeps size/spacing before hydration

    if (theme === "system") {
      return <PiMonitor className="h-6 w-6 opacity-75 group-hover:opacity-100 transition duration-150" />
    }

    return resolvedTheme === "dark" ? (
      <PiMoon className="h-6 w-6 opacity-75 group-hover:opacity-100 transition duration-150" />
    ) : (
      <PiSun className="h-6 w-6 opacity-75 group-hover:opacity-100 transition duration-150" />
    )
  }

  return (
    <div className="relative group">
      <Button
        className="bg-transparent"
        variant="outline"
        size="icon"
        onClick={cycleTheme}
        aria-label="Toggle theme"
      >
        {getIcon()}
      </Button>
    </div>
  )
}

export default ThemeButton