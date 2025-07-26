import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface TestimonialProps {
    i: number;
    providerName: string;
    avatarSrc: string;
    alt: string;
    role: string;
    bgColor: string;
    company: string;
    testimonialText: string | React.ReactNode;
}

const Testimonial: React.FC<TestimonialProps> = ({i, providerName, avatarSrc, alt, role, bgColor, company, testimonialText}) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  
  return (
    <div className={`${isMobile ? 'relative' : 'h-screen sticky top-0'} flex items-center justify-center`}>
      <div 
      className='w-full xl:w-4/5 2xl:w-3/5 mx-12 px-14 py-14 xl:mx-0 xl:h-[600px] relative origin-top flex flex-col items-center justify-center gap-8 border border-black bg-white rounded-lg  dark:border-white dark:bg-black' 
      style={{backgroundColor: `${bgColor}`, top: isMobile ? undefined : `calc(-5vh + ${i * 24}px)`}}
      >
        <div className='text-lg'>{testimonialText}</div>
        <div className='flex items-center gap-6'>
          <div>
            <Image
            src={avatarSrc}
            alt={alt}
            width={100}
            height={100}
            className='border-2 border-black dark:border-white rounded-full'
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