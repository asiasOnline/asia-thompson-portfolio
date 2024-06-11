"use client"

import React from 'react';
import { PiSun, PiMoon } from "react-icons/pi";
import { TbLoader2 } from "react-icons/tb";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // setMounted is checked within useEffect because useEffect only runs in the client
  useEffect(() => setMounted(true), [])

  if(!mounted) return (
    <Button disabled>
      <TbLoader2 className='h-6 w-6 animate-spin'/>
    </Button>
  )

  if (resolvedTheme === 'dark') {
    return <Button variant="outline" size="icon" onClick={() => setTheme('light')}>
              <PiSun className='h-6 w-6'/>
          </Button>
  }

  if (resolvedTheme === 'light') {
    return <Button variant="outline" size="icon" onClick={() => setTheme('dark')}>
              <PiMoon className='h-6 w-6'/>
          </Button>
  }
}

export default ThemeButton