import React from 'react'
import { ExpertiseTools } from './ExpertiseTools'

interface Tool {
    id: number;
    toolName: string;
    designation: string;
    icon: React.JSX.Element;
}

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
        <div className='w-full h-full min-h-32 p-6 md:py-8 flex flex-col md:place-items-center lg:justify-between gap-6 lg:gap-4 bg-white relative border rounded-2xl border-black card-shadow dark:bg-black dark:border-white/10 hover:border-black/5 hover:shadow-none'>
            <div className="w-full px-5 flex flex-col gap-6">
                <div className='flex justify-between items-center md:gap-6 lg:justify-start'>
                    <p className='text-xs'>0{id}</p>
                    <h2 className='text-2xl font-bold tracking-wider text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>{title}</h2>
                </div>
                <p className='text-lg'>{description} </p>
            </div>
            <ExpertiseTools className="flex flex-row flex-wrap items-center place-content-center lg:justify-center md:mt-0 lg:min-w-96" tools={tools}/>
        </div>
    </div>
  )
}

export default ExpertiseCard