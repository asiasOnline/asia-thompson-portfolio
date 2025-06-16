import React from 'react'
import Image from 'next/image';

interface TestimonialProps {
    i: number;
    providerName: string;
    avatarSrc: string;
    alt: string;
    role: string;
    company: string;
    testimonialText: string | React.ReactNode;
}

const Testimonial: React.FC<TestimonialProps> = ({i, providerName, avatarSrc, alt, role, company, testimonialText}) => {
  return (
    <div className='h-screen sticky top-0 flex items-center justify-center'>
      <div className='w-3/5 xl:h-[500px] relative origin-top flex flex-col items-center justify-center gap-8 border border-black bg-white rounded-lg px-14 py-14' style={{top:`calc(-5vh + ${i * 24}px)`}}>
        <div className='text-lg'>{testimonialText}</div>
        <div className='flex items-center gap-6'>
          <div>
            <Image
            src={avatarSrc}
            alt={alt}
            width={100}
            height={100}
            className='border-2 border-black rounded-full'
            />
          </div>
          <div className=''>
            <h3 className='text-2xl'>{providerName}</h3>
            <p className='text-lg'>{role} @{company}</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonial