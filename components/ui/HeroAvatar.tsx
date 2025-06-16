import React from 'react'

const HeroAvatar = () => {
      return (
        <>
          <img 
              src="/asiaAvatarLight.png" 
              className="block dark:hidden w-full h-full" 
              alt='default light mode friendly logo'
            />
            <img 
            src="/asiaAvatarDark.png"  
            className="hidden dark:block w-full h-full" 
            alt='dark mode friendly logo'
            />
        </>
      )
    }
export default HeroAvatar