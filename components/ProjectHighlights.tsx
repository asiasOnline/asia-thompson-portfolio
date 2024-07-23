"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"
import { twMerge } from 'tailwind-merge';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import PageHeader from './ui/PageHeader'
import { BentoGrid, ProjectGridItem } from "./ui/BentoGrid";

import warmWoodPic from "../public/Warm-Wood-Portfolio-Cover.png"
import BeeTeaPic from "../public/Bee-Tea-mockup.png"
import MMFlorist from "../public/MM-Florist-Portfolio-Mockup-Cover.png"
import OABlog from "../public/OA Anime Mockup.png"
import HHManager from "../public/Happy-Home-Mockup.png"
import ATPortfolio from '../public/portfolio-mockup.png'


const ProjectHighlights = () => {
  return (
    <div id="projectHighlights">
        <PageHeader title="Project Highlights"/>
        <BentoGrid className="mx-auto gap-y-16" >
        {items.map((item, i) => (
        <ProjectGridItem
          key={i}
          title={item.title}
          year={item.year}
          description={item.description}
          header={item.header}
          className={item.className}
          locked={item.locked}
          projectLink={item.projectLink}
        />
      ))}
      </BentoGrid>
    </div>
  )
}

const Skeleton = ({
  imageSrc,
  altText,
  className,
}: {
  imageSrc: StaticImport;
  altText: string;
  className?: string;
}) => (
  <motion.div 
  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }}
  transition={{ delay:0.20, ease: [0.17, 0.67, 0.83, 0.67] }}
  className={twMerge('aspect-w-1 aspect-h-1 relative flex w-full h-full rounded-xl', className)}>
      <Image 
        src={imageSrc}
        alt={altText}
        fill
        style={{objectFit: 'cover'}}
        className='group-hover/bento:rounded-lg aspect-square'
      />
  </motion.div>
);

const zeroSaturation = "saturate-0"
const fullSaturation = "saturate-100"
const rowSpan = "row-span-2"

const items = [
  {
    title: "Warm Wood",
    year: "2024",
    description: "Website for an interior design company.",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
    className: `col-span-6 lg:col-span-4 xl:col-span-3 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation}`,
    locked: false,
    projectLink: "/projects/warm-wood"
  },
  {
    title: "Bee & Tea",
    year: "2023",
    description: "A ecommerce website for a California-based honey and tea vendor.",
    header: <Skeleton 
      imageSrc={BeeTeaPic}
      altText="Bee & Tea Project Cover"
    />,
    className: `col-span-6 lg:col-span-4 xl:col-span-3 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation}`, 
    locked: false,
    projectLink: "/projects/bee-tea",
  },
  {
    title: "Magic Moon Florist",
    year: "2023",
    description: "A responsive website for an online florist shop",
    header: <Skeleton 
      imageSrc={MMFlorist}
      altText="Magic Moon Florist Project Cover"  
      className='aspect-w-16 aspect-h-9'
    />,
    className: `col-span-6 xl:col-span-4 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation} xl:justify-center`,
    locked: true,
    projectLink: "/#projectHighlights"
  },
  {
    title: "Happy Home Manager",
    year: "2023",
    description: "A web and mobile app for a family oriented task manager",
    header: <Skeleton 
      imageSrc={HHManager}
      altText="Warm Wood Project Cover"
      className='aspect-w-3 aspect-h-4'
    />,
    className: `col-span-6 md:row-span-3 lg:col-start-2 lg:col-span-4 xl:col-span-2 xl:row-span-2 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation} justify-self-center`,
    locked: true,
    projectLink: "/#projectHighlights"
  },
  {
    title: "Asia Thompson's Portfolio",
    year: "2022",
    description: "An in-depth tutorial for a color picker tool made using HTML, CSS, and JavaScript for middle school students",
    header: <Skeleton 
      imageSrc={ATPortfolio}
      altText="Mastery Coding Color Picker Project Cover"
    />,
    className: `col-span-6 lg:col-span-4 lg:col-start-3 xl:col-span-3 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation}`, 
    locked: true,
    projectLink: "/#projectHighlights"
  },
  {
    title: "Overanalyzing Anime",
    year: "2024",
    description: "A redesigned responsive website for a content creator seeking to revamp their pre-existing blog.",
    header: <Skeleton 
      imageSrc={OABlog}
      altText="Overanalyzing Anime Blog Project Cover"
    />,
    className: `col-span-6 lg:col-span-4 lg:col-start-3 xl:col-span-3 ${rowSpan} md:${zeroSaturation} md:hover:${fullSaturation}`,
    locked: true,
    projectLink: "/#projectHighlights",
  },
];

export default ProjectHighlights