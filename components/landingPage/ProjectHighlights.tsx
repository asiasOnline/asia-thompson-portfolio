import React from 'react'
import HeroAvatar from '../ui/HeroAvatar'
import ProjectScroll from '../landingPage/ProjectScroll'

const ProjectHighlights = () => {
  return (
    <div id="projectHighlights" className='w-full h-svh flex flex-col items-center '>
        <div id="projectHighlightsHeader" 
            className='w-2/5 flex align-content-center justify-content-center my-5'>
          <div>
            <h3 className='text-6xl'>Highlighted Work</h3>
            <p className='mt-4 mr-4'>I only accept projects from businesses and within industries that I find interesting, so my projects are a great way to gain a little more insight into who I am.</p>
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