import React from 'react'
import { ExpertiseTools } from './ExpertiseTools'

export const ExpertiseCard = ({
    cardContent,
}: {
    cardContent: {
        id: number,
        title: string | React.ReactNode,
        description: string | React.ReactNode,
    }
}) => {
  return (
    <div className='flex flex-col'>
        <div className="flex flex-col gap-6">
            <div className='flex items-center gap-6'>
                <h2 className='text-4xl'>{cardContent.title}</h2>
                <p className='text-xs	'>0{cardContent.id}</p>
            </div>
            <p>{cardContent.description} </p>
        </div>
        <ExpertiseTools />
    </div>
  )
}

export default ExpertiseCard