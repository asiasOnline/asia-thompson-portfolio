import React from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import AnimatedCounter from '../ui/AnimatedCounter'

const Vision = () => {
  return (
    <div className='flex justify-center items-center gap-40 my-48'>
        <div className='w-1/3'>
            <p className='text-4xl text-justify leading-14 font-bold'>
                You have a vision for what you want.  Your project may stem from a lifelong goal or a new creative ambition. Regardless I’m here to help bring that passion to life. 
            </p>
        </div>
        <div className='flex flex-col items-center gap-8'>
            <div className='w-40'>
                <HeroAvatar />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-16">
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={10} />+
                    </p>
                    <p className='text-2xl'>Years of Experience</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={50} />+
                    </p>
                    <p className='text-2xl'>Projects Completed</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={100} />%
                    </p>
                    <p className='text-2xl'>Client Satisfaction</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={12} />+
                    </p>
                    <p className='text-2xl'>Industries Served</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision