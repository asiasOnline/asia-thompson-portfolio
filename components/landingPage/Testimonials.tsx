import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div>
        <div className='px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 mb-20'>
            <div className='w-full flex justify-center'>
              <div className='w-3/5 flex flex-col items-center border border-black rounded-md px-14 py-20'>
              <div className='text-2xl flex flex-col gap-6'>
                <p>
                  I had the chance to work with Asia for over a year, and I truly enjoyed the opportunity I got to collaborate with her. 
                </p>
                <p>
                  There were several occasions when her insights and ideas helped me to improve the designs I produce in my work as well.
                </p>
                <p>
                  I can confidently recommend Asia as I know that her excitement to learn and tackle challenges and her ability to connect with others are sure to contribute greatly to any future teams.
                </p>
            </div>
            <div>
              <h3>Reviewer Name</h3>
              <div className='flex gap-4'>
                <p>Reviewer Role</p>
                <p>@Company</p>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials