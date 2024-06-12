import React from 'react'
import Logo from './ui/Logo'
import ThemeButton from './ui/ThemeButton'

const Navbar = () => {
  return (
    <nav className='w-screen px-24 py-14 flex justify-between items-center'>
      <Logo 
        width="172"
        height="88"
      />
      <div className='flex items-center gap-20'>
        <ThemeButton />
        <div className='flex gap-10 text-base '>
          <a>Expertise</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar