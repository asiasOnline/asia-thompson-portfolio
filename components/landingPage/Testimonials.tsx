import React from 'react'
import Testimonial from '../ui/Testimonial'
import testimonials from '../../data/testimonials'

const Testimonials = () => {
  return (
    <div>
        <div className='my-20'>
           {
            testimonials.map( (testimonial, i) => {
              return <Testimonial 
                key={`p_${i}`}
                i={i}
                providerName={testimonial.providerName}
                avatarSrc={testimonial.avatarSrc}
                alt={testimonial.alt}
                role={testimonial.role}
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