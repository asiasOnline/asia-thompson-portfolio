import React from 'react'

const ProjectHero = ({
    projectLogo,
    title,
    description,
    caseStudy,
    className,
    children
} : {
    projectLogo?: React.ReactNode,
    title: string,
    description: string,
    caseStudy: boolean,
    className?: string;
    children?: React.ReactNode;
}) => {
  return (
    <div className='w-screen flex'>
        <div className='w-1/3'>
            {projectLogo}
            <h1>{title}</h1>
            <p>{description}</p>
            {{caseStudy} ? 'This case study has been fabricated to act as a showcase of my process and skill set. The client and any associated names are fictitious.' : ''}
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default ProjectHero