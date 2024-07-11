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
    <div className='w-fit flex mx-40'>
        <div className='w-1/5 flex flex-col justify-center gap-8 mr-10'>
            <div className='w-40 h-40 relative'>{projectLogo}</div>
            <div>
                <h1 className='text-lg md:text-2xl lg:text-3xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'>{title}</h1>
                <p>{description}</p>
            </div>
            {{caseStudy} ? <p className='text-xs italic'>This case study has been fabricated to act as a showcase of my process and skill set. The client and any associated names are fictitious.</p> : ''}
        </div>
        <div className='w-full h-auto'>
            {children}
        </div>
    </div>
  )
}

export default ProjectHero