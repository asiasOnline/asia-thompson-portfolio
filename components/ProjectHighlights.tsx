"use client";
import React from 'react'
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import PageHeader from './ui/PageHeader'
import { AspectRatio } from './ui/AspectRatio';
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
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]" >
        {items.map((item, i) => (
        <ProjectGridItem
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
  aspectRatio,
  imageSrc,
  altText,
}: {
  aspectRatio: number,
  imageSrc: StaticImport;
  altText: string;
}) => (
  <div className="relative flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <AspectRatio ratio={aspectRatio}>
      <Image 
          src={imageSrc}
          alt={altText}
          fill
          style={{objectFit: 'contain'}}
          className='hover:rounded-lg'
        />
    </AspectRatio>
  </div>
);
const items = [
  {
    title: "Warm Wood",
    year: "2024",
    description: "Website for an interior design company.",
    header: <Skeleton 
      aspectRatio={1 / 1}
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
    className: "md:col-span-3 row-span-2 saturate-0 hover:saturate-100",
  },
  {
    title: "Overanalyzing Anime",
    year: "2024",
    description: "A redesigned responsive website for a content creator seeking to revamp their pre-existing blog.",
    className: "md:col-span-3 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      aspectRatio={1 / 1}
      imageSrc={OABlog}
      altText="Overanalyzing Anime Blog Project Cover"
    />,
  },
  {
    title: "Magic Moon Florist",
    year: "2023",
    description: "A responsive website for an online florist shop",
    className: "md:col-span-4 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      aspectRatio={16 / 9}
      imageSrc={MMFlorist}
      altText="Magic Moon Florist Project Cover"  
    />,
  },
  {
    title: "Happy Home Manager",
    year: "2023",
    description:
      "A web and mobile app for a family oriented task manager",
    className: "md:col-span-2 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      aspectRatio={1 / 1}
      imageSrc={HHManager}
      altText="Warm Wood Project Cover"
    />,
  },
  {
    title: "Bee & Tea",
    year: "2023",
    description: "A ecommerce website for a California-based honey and tea vendor.",
    className: "md:col-span-3 row-span-2 saturate-0 hover:saturate-100", 
    header: <Skeleton 
      aspectRatio={1 / 1}
      imageSrc={BeeTeaPic}
      altText="Bee & Tea Project Cover"
    />,
  },
  {
    title: "Asia Thompson's Portfolio",
    year: "2022",
    description: "An in-depth tutorial for a color picker tool made using HTML, CSS, and JavaScript for middle school students",
    className: "md:col-span-3 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      aspectRatio={1 / 1}
      imageSrc={ATPortfolio}
      altText="Mastery Coding Color Picker Project Cover"
    />,
  },
];

export default ProjectHighlights