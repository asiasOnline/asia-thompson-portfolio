import React from 'react'
import { cn } from "@/lib/utils"

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
                "grid md:auto-rows-[18rem] grid-cols-6 md:grid:cols-2 gap-8 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

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
      <div className={cn(
        "row-span-2 rounded-md group/bento hover:shadow-lg transition duration-2000 shadow-input p-4 dark:bg-black  bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
        <div className="invisible group-hover/bento:visible">
          <div className="w-full flex justify-between font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            <div className='text-2xl font-bold tracking-wider'>{title}</div>
            <div>{year}</div>
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {header}
      </div>
    );
  };

  /*
  export const AboutGridItem = ({
    className,
    title,
    description,
    images,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    images?: {
      imageSrc: StaticImport; 
      altText: string;
    }[];
  }) => {
    return (
      <div className={cn(
        "row-span-2 rounded-md group/bento hover:shadow-xl transition duration-2000 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
        <div className="invisible group-hover/bento:visible">
          <div className="w-full flex justify-between font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            <div>{title}</div>
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {images && images.map((image, i) => (
          <div>
            <Image
            key={i}
            src={image.imageSrc}
            alt={image.altText}
          />
          </div>
      ))}
      </div>
    );
  };
  */

  export default BentoGrid