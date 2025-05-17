import React from 'react'

interface ContentBorderProps {
  topBorderLength?: number;
  bottomBorderLength?: number;
  borderColor?: string;
}

const ContentBorder: React.FC<ContentBorderProps> = ({
  topBorderLength,
  bottomBorderLength,
  borderColor,
}) => {
  return (
    <div className='absolute'>
        <div className='w-44 relative left-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
        <div className='w-44 rotate-90 relative top-14'>
            <hr className='border-t-black dark:border-t-white'/>
        </div>
    </div>
  )
}

export default ContentBorder