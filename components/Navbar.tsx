import React from 'react'
import Logo from './ui/Logo'
import ThemeButton from './ui/ThemeButton'

const Navbar = () => {
  return (
    <nav className='w-screen px-24 py-14 flex'>
      <Logo 
        width="280"
        height="128"
      />
      <div className='flex'>
        <ThemeButton />
        <div>
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