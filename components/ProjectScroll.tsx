import React from 'react'
import { Button } from './ui/Button'
import LocomotiveScroll from './ui/LocomotiveScroll'

const projectImages = [
      { src: "/project-assets/holistic-hands-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},

      { src: "/project-assets/warm-wood-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},

      { src: "/project-assets/mm-florist-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},
    ]

const ProjectScroll = () => {
  return (
    <div className='w-full flex justify-between px-6 max-h-[520px] border-black border-y-2'>
        <div className='w-2/5 h-full my-6 flex flex-col justify-around border-black'>
            <div>
                <p className='italic'>02/05</p>
            </div>
            <div className='flex flex-col gap-2 border-black border-y-2 py-16'>
              <div className='w-full flex justify-between pb-4'>
              <p>2024</p>
              <p className='font-bold'>HEALTH</p>
            </div>
            <div>
              <h4 className='text-7xl'>Holistic Hands</h4>
            </div>
            <div className='flex gap-4'>
              <p>Branding</p>
              <p>Web Design</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur. Lacus velit mi vitae mi amet est orci leo eget. Arcu faucibus nam pulvinar venenatis amet in scelerisque.</p>
            </div>
            <Button 
          variant="outline" 
          type="submit" 
          className="text-md w-1/2 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-black dark:text-white dark:border-white dark:button-shadow-none"
          >View My Projects
        </Button>
            
            </div>
        </div>
        <div className="w-1/2 relative pt-10 pb-14 overflow-scroll">
                <LocomotiveScroll images={projectImages} />
            </div>
    </div>
  )
}

export default ProjectScroll