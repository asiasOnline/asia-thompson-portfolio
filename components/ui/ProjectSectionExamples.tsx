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
    <div className='flex flex-col'>
        {visual}
        {title}
        {description}
    </div>
  )
}

export default ProjectSectionExamples