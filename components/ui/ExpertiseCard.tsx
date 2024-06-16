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
    <div className='flex border-4 rounded-2xl border-black/10 p-12'>
        <div className="flex flex-col gap-6">
            <div className='flex items-center gap-6'>
                <h2 className='text-4xl text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>{title}</h2>
                <p className='text-xs	'>0{id}</p>
            </div>
            <p>{description} </p>
        </div>
        <ExpertiseTools tools={tools}/>
    </div>
  )
}

export default ExpertiseCard