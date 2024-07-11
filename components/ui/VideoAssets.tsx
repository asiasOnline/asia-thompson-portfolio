import React from 'react'

export const BeeTeaOverviewVideo = () => {
  return (
    <video width="100%" height="auto" autoPlay muted loop className='rounded-lg'>Your browser did not support the video.
        <source src="/bee-tea-overview-video.mp4" type="video/mp4"/>
    </video>
  )
}

export const WarmWoodOverviewVideo = () => {
  return (
    <video width="100%" height="auto" autoPlay muted loop>Your browser did not support the video.
        <source src="/warm-wood-overview-video.mp4" type="video/mp4"/>
    </video>
  )
}