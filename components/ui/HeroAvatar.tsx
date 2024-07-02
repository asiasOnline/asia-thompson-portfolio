import React from 'react'
import { getImageProps } from 'next/image'

const HeroAvatar = () => {
    const common = { alt: 'Profile avatar', width: 200, height: 200 }

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
          <img {...rest} />
        </picture>
      )
    }
export default HeroAvatar