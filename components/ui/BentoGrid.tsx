import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { BiSolidLockAlt } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { Url } from 'next/dist/shared/lib/router/router';

export const BentoGrid = ({
    className,
    children
}: { 
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-6 gap-8 max-w-[1920px] mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

const variants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: {duration: 0.5} }
}

export const ProjectGridItem = ({
    className,
    title,
    year,
    description,
    header,
    locked,
    projectLink
  }: {
    className?: string;
    title?: string | React.ReactNode;
    year?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    locked: boolean;
    projectLink: Url;
  }) => {
    return (
      <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ delay:0.20, ease: [0.17, 0.67, 0.83, 0.67] }}
        className={cn(
          "w-full h-full row-span-2 group/bento shadow-input p-4 dark:bg-black  bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
      )}>
        <div className='max-h-32 flex flex-col'>
          <div className="w-full flex justify-between items-center font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            <div className='text-xl md:text-2xl font-bold tracking-wider'>{title}</div>
            <div className="text-sm md:text-base">{year}</div>
          </div>
          <div className="text-sm md:text-base align-bottom dark:text-white">
            {description}
          </div>
        </div>
        <Link href={projectLink}>
          <div className='mt-2'>
              {locked ? <div className='flex items-center gap-2'><BiSolidLockAlt /><p className='text-sm md:text-base'>Contact to discuss this project</p></div> : <div className='flex'><p className='text-sm md:text-base'>View Project</p><GoArrowUpRight /></div> }
          </div>
          {header}
        </Link>
      </motion.div>
    );
  };

  export default BentoGrid