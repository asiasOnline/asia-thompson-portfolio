import React from 'react'
import { ExpertiseTools } from './ExpertiseTools'

export const ExpertiseCard = ({
    id, title, description
}: {
    id: number,
    title: string | React.ReactNode,
    description: string | React.ReactNode,
}) => {
  return (
    <div className='flex flex-col'>
        <div className="flex flex-col gap-6">
            <div className='flex items-center gap-6'>
                <h2 className='text-4xl'>{title}</h2>
                <p className='text-xs	'>0{id}</p>
            </div>
            <p>{description} </p>
        </div>
        <ExpertiseTools />
    </div>
  )
}

export default ExpertiseCard