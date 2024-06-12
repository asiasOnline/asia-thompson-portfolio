import React from 'react'
import Navbar from '@/components/Navbar'

const Projectlayout = ({ children, }: { children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Projectlayout