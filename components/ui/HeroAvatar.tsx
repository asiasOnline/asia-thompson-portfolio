import React from 'react'
import { getImageProps } from 'next/image'

const HeroAvatar = () => {
    const common = { alt: 'Profile avatar', width: 300, height: 300 }

    const {
        props: { srcSet: dark },
      } = getImageProps({ ...common, src: '/asiaAvatarDark.png' })
      const {
        props: { srcSet: light, ...rest },
      } = getImageProps({ ...common, src: '/asiaAvatarLight.png' })
     
      return (
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet={dark} />
          <source media="(prefers-color-scheme: light)" srcSet={light} />
          <img {...rest} style={{ width: '100%', height: 'auto' }}/>
        </picture>
      )
    }
export default HeroAvatar