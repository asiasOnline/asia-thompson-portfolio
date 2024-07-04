import React from 'react'
import { ExpertiseTools } from './ExpertiseTools'

type toolType = {
    id: number,
    toolName: string,
    designation: string,
    icon?: React.ReactNode,
}

export const ExpertiseCard = ({
    id, title, description, tools
}: {
    id: number,
    title: string | React.ReactNode,
    description: string | React.ReactNode,
    tools: any
}) => {
  return (
    <div className="relative group">
        <div className='absolute 
        -inset-0.5 
        bg-gradient-to-r from-fountainBlue via-slateBlue to-steelPink 
        rounded-md 
        blur-md 
        opacity-0
        group-hover:opacity-75 transition duration-500
        '/>
        <div className='p-6 md:p-10 lg:p-12 flex flex-col md:flex-row md:justify-between bg-white relative border-4 rounded-2xl border-black/10 dark:bg-black dark:border-white/10'>
            <div className="md:w-1/2 flex flex-col gap-6">
                <div className='flex justify-between items-center md:gap-6'>
                    <h2 className='text-2xl font-bold tracking-wider text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>{title}</h2>
                    <p className='text-xs'>0{id}</p>
                </div>
                <p className='lg:pr-40'>{description} </p>
            </div>
            <ExpertiseTools className="flex flex-row flex-wrap items-center justify-center md:place-content-center mt-4 md:w-1/2 md:mt-0 lg:w-3/5 lg:min-w-96" tools={tools}/>
        </div>
    </div>
  )
}

export default ExpertiseCard