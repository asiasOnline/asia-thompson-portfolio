"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import warmWoodPic from "../public/warm-wood-project-cover.png"
import { motion } from "framer-motion"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const ProjectHighlights = () => {
  return (
    <div className='mt-32'>
        <PageHeader title="Project Highlights"/>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[18rem]" >
        {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          year={item.year}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
      </BentoGrid>
    </div>
  )
}

const Skeleton = ({
  imageSrc,
  altText
}: {
  imageSrc: StaticImport;
  altText: string;
}) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image 
        src={imageSrc}
        alt={altText}
        fill
        style={{objectFit: 'cover'}}
      />
  </div>
);
const items = [
  {
    title: "Warm Wood",
    year: "2024",
    description: "Website for an interior design company that’s focused on bringing the art and science of aesthetic pleasure to a wider audience.",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
    className: "md:col-span-2 row-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-2 row-span-2", 
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-2 row-span-2",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"  
    />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2 row-span-2",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "md:col-span-2 row-span-2",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "md:col-span-2 row-span-2",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
  },
];

export default ProjectHighlights