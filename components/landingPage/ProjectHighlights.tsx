import React from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import ProjectScroll from '../ui/ProjectScroll'

const ProjectHighlights = () => {
  return (
    <div id="projectHighlights" className='w-full h-svh px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 flex flex-col items-center '>
        <div id="projectHighlightsHeader" 
            className='w-3/5 flex self-start ml-14 my-5'>
          <div className="relative w-full max-w-40 h-auto">
            < HeroAvatar />
          </div>
          <div className='ml-8'>
            <h3 className='text-6xl'>Highlighted Work</h3>
            <p className='mt-4 text-lg'>I only accept projects from businesses and within industries that I find interesting, so my projects are a great way to gain a little more insight into who I am.</p>
          </div>
        </div>
        <div className='w-full my-3'>
          <ProjectScroll />
        </div>
    </div>
  )
}

export default ProjectHighlights