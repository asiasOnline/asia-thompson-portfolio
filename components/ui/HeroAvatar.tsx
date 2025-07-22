import React from 'react'

const HeroAvatar = () => {
      return (
        <>
          <img 
              src="personal-avatars/asiaAvatarLight.png" 
              className="block dark:hidden w-full h-full" 
              alt='default light mode friendly logo'
            />
            <img 
            src="personal-avatars/asiaAvatarDark.png"  
            className="hidden dark:block w-full h-full" 
            alt='dark mode friendly logo'
            />
        </>
      )
    }
export default HeroAvatar