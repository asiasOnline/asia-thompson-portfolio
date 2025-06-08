import React from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import AnimatedCounter from '../ui/AnimatedCounter'
import ScrollTextOpacity from '../ui/ScrollTextOpacity'

const Vision = () => {
  return (
    <div id="vision" className='h-auto flex flex-col xl:flex-row justify-center items-center gap-32 2xl:gap-40 my-40 2xl:my-48'>
        <div className='px-10 lg:w-2/5 2xl:w-1/3 text-4xl xl:text-justify leading-16 2xl:leading-14 font-bold'>
            <ScrollTextOpacity content={<p>You have a vision for what you want. Together, we’ll turn your bold ideas into a tangible product that <em>empowers</em>, <em>inspires</em>, and <em>influences</em>.</p>}/>
        </div>
        <div className='flex flex-col items-center gap-8'>
            <div className='w-40'>
                <HeroAvatar />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 2xl:gap-16">
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={10} />+
                    </p>
                    <p className='text-lg 2xl:text-2xl'>Years of Experience</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={50} />+
                    </p>
                    <p className='text-lg 2xl:text-2xl'>Projects Completed</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={100} />%
                    </p>
                    <p className='text-lg 2xl:text-2xl'>Client Satisfaction</p>
                </div>
                <div className="flex flex-col justify-between gap-3 text-center">
                    <p className='text-4xl font-bold'>
                        <AnimatedCounter startingNumber={0} endingNumber={12} />+
                    </p>
                    <p className='text-lg 2xl:text-2xl'>Industries Served</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision