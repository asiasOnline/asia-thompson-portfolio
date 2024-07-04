import React from 'react'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

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
                "grid md:auto-rows-[18rem] grid-cols-6 gap-8 max-w-7xl mx-auto",
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
    icon,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    year?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
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
        <div>
          <div className="w-full flex justify-between items-center font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            <div className='text-xl md:text-2xl font-bold tracking-wider'>{title}</div>
            <div className="text-sm md:text-base">{year}</div>
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {header}
      </motion.div>
    );
  };

  export default BentoGrid