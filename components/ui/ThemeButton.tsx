"use client"

import React from 'react';
import { PiSun, PiMoon } from "react-icons/pi";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // setMounted is checked within useEffect because useEffect only runs in the client
  useEffect(() => setMounted(true), [])

  if(!mounted) return (
    <Button variant="outline">
      <PiSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
      <PiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
    </Button>
  )
}

export default ThemeButton