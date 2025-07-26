import React, {useEffect, useState} from 'react'
import Testimonial from '../ui/Testimonial'
import testimonials from '../../data/testimonials'

const Testimonials = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  

  return (
    <div>
        <div className='my-24 xl:my-12' style={{ height: isMobile ? 'auto' : `${testimonials.length * 100}vh` }}>
           {
            testimonials.map( (testimonial, i) => {
              return <Testimonial 
                key={`p_${i}`}
                i={i}
                providerName={testimonial.providerName}
                avatarSrc={testimonial.avatarSrc}
                alt={testimonial.alt}
                role={testimonial.role}
                bgColor={testimonial.bgColor}
                company={testimonial.company}
                testimonialText={testimonial.testimonialText}
              />
            })
           }
        </div>
    </div>
  )
}

export default Testimonials