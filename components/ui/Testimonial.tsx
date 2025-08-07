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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (React.isValidElement(node)) return getTextContent(node.props.children);
    return '';
  };

  const truncateText = (text: string | React.ReactNode, maxLength: number): string => {
    if (typeof text !== 'string') return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
  };

  const fullText = getTextContent(testimonialText);
  const displayText = isMobile ? truncateText(fullText, 160) : testimonialText;
  
  return (
    <div className='h-screen flex items-center justify-center sticky top-0'>
      <div 
      className="mx-12 p-8 md:p-14 xl:mx-0 xl:h-[600px] relative origin-top w-full xl:w-[1000px] flex flex-col items-center justify-center border border-black text-black rounded-lg"
      style={{backgroundColor: `${bgColor}`, top: `calc(-5vh + ${i * 24}px)`}}
      >
        <div className='text-lg'>{displayText}</div>
        <div className='mt-8 flex flex-col md:flex-row items-center gap-6'>
          <div className='flex justify-center'>
            <Image
            src={avatarSrc}
            alt={alt}
            width={100}
            height={100}
            className='border-2 border-black rounded-full'
            />
          </div>
          <div className=''>
            <h3 className='text-center md:text-left text-2xl'>{providerName}</h3>
            <p className='text-center md:text-left text-lg'>{role}</p>
            <p className='text-center md:text-left text-lg'>@{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial