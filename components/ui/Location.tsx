import React from 'react'
import { IoLocation } from "react-icons/io5";


const Location = () => {
  return (
    <div className='flex justify-center gap-2'>
        <IoLocation className='w-5 h-5'/>
        <p>Henderson, Nevada</p>
    </div>
  )
}

export default Location