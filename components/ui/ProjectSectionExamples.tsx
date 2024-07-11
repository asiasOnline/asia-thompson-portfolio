import React from 'react'

const ProjectSectionExamples = ({
    visual,
    title,
    description,
} : {
    visual?: React.ReactNode;
    title: string;
    description?: string;
}) => {
  return (
    <div className='w-1/3 flex flex-col items-center gap-2'>
        <div className='w-32 h-32'>{visual}</div>
        <p className='font-bold'>{title}</p>
        <p className='text-center'>{description}</p>
    </div>
  )
}

export default ProjectSectionExamples