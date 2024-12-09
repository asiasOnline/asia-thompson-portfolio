import React from 'react'

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className='w-60 border-y-2 border-black uppercase mb-10 dark:border-white text-center'>
        <p className='py-2'>{title}</p>
    </div>
  )
}

export default PageHeader