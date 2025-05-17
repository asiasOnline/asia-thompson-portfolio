import React from 'react'
import HeroAvatar from './ui/HeroAvatar'
import ProjectScroll from './ProjectScroll'

const ProjectHighlights = () => {
  return (
    <div id="projectHighlights" className='w-full flex flex-col items-center'>
        <div id="projectHighlightsHeader" 
            className='w-1/2 flex align-content-center justify-content-center'>
          <div>
            <h3 className='text-6xl'>Highlighted Work</h3>
            <p className='w-4/5'>I only accept projects from businesses and within industries that I find interesting, so my projects are a great way to gain a little more insight into who I am.</p>
          </div>
          <div className="relative w-full max-w-40 h-auto">
            < HeroAvatar />
          </div>
        </div>
        <div className='w-full my-3'>
          <ProjectScroll />
        </div>
    </div>
  )
}

export default ProjectHighlights