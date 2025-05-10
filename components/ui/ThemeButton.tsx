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
    <Button className="bg-transparent" variant="outline" size="icon">
      <TbLoader2 className='h-6 w-6 animate-spin'/>
    </Button>
  )

  if (resolvedTheme === 'dark') {
    return <div className="relative group bg-black">
        <Button className="relative bg-black" variant="outline" size="icon" onClick={() => setTheme('light')}>
              <PiSun className='h-6 w-6 opacity-75 bg-black group-hover:bg-opacity-100 transition duration-150'/>
          </Button>
      </div>
  }

  if (resolvedTheme === 'light') {
    return <div className="relative group">
        <Button className="bg-white relative" variant="outline" size="icon" onClick={() => setTheme('dark')}>
              <PiMoon className='h-6 w-6 opacity-75 group-hover:opacity-100 transition duration-150'/>
        </Button>
      </div>
  }
}

export default ThemeButton