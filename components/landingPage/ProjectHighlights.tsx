import React from 'react'
import ProjectScroll from '../ui/ProjectScroll'

const ProjectHighlights = () => {
  return (
    <div id="projectHighlights" className='w-full h-svh px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 flex flex-col items-center '>
        <div className='w-full my-3'>
          <ProjectScroll />
        </div>
    </div>
  )
}

export default ProjectHighlights