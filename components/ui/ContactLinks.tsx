import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const ContactLinks = () => {
  return (
    <div className='w-full flex justify-evenly md:gap-6'>
        <a href="mailto:asiasatwork@gmail.com">
            <TbMailFilled className='h-8 w-8'/>
        </a>
        <a href="https://github.com/asiasAtWork" target='_blank'>
            <SiGithub className='h-7 w-7' />
        </a>
        <a href="https://www.linkedin.com/in/asiasatwork/" target='_blank'>
            <SiLinkedin className='h-8 w-8' />
        </a>
        <a href="https://x.com/asiasAtWork" target='_blank'>
            <BsTwitterX className='h-8 w-8' />
        </a>
    </div>
  )
}

export default ContactLinks