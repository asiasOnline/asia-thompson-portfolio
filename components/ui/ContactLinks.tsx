import React from 'react'
import { cn } from "@/lib/utils"
import { TbMailFilled } from "react-icons/tb";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const ContactLinks = () => {
  return (
    <div className='w-full md:w-1/2 flex flex-row justify-evenly lg:items-center md:gap-6'>
        <a href="mailto:asiasatwork@gmail.com">
            <TbMailFilled className='h-8 w-8 lg:h-10 lg:w-10'/>
        </a>
        <a href="https://github.com/asiasAtWork" target='_blank'>
            <SiGithub className='h-7 w-7 lg:h-9 lg:w-9' />
        </a>
        <a href="https://www.linkedin.com/in/asiasatwork/" target='_blank'>
            <SiLinkedin className='h-8 w-8 lg:h-10 lg:w-10' />
        </a>
        <a href="https://x.com/asiasAtWork" target='_blank'>
            <BsTwitterX className='h-8 w-8 lg:h-10 lg:w-10' />
        </a>
    </div>
  )
}

export default ContactLinks