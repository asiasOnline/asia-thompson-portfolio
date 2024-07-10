import React from 'react'
import { ExpertiseTools } from './ExpertiseTools'

interface ExpertiseCardProps {
    id: number;
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    tools: Tool[];
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({id, title, description, tools}) => {
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
        <div className='w-full p-6 md:p-10 flex flex-col md:place-items-center lg:flex-row lg:justify-between gap-6 lg:gap-4 bg-white relative border-4 rounded-2xl border-black/10 dark:bg-black dark:border-white/10'>
            <div className="md:w-4/5 lg:3/5 flex flex-col gap-6">
                <div className='flex justify-between items-center md:gap-6 lg:justify-start'>
                    <h2 className='text-2xl font-bold tracking-wider text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>{title}</h2>
                    <p className='text-xs'>0{id}</p>
                </div>
                <p className='xl:pr-40'>{description} </p>
            </div>
            <ExpertiseTools className="flex flex-row flex-wrap items-center place-content-center lg:justify-center md:w-9/12 md:mt-0 lg:w-3/5 lg:min-w-96" tools={tools}/>
        </div>
    </div>
  )
}

export default ExpertiseCard