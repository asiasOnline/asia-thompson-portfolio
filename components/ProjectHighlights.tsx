"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";
import warmWoodPic from "../public/Warm-Wood-Portfolio-Cover.png"
import BeeTeaPic from "../public/Bee-Tea-portfolio-mockup.png"
import MMFlorist from "../public/MM-Florist-Portfolio-Mockup-Cover.png"
import OABlog from "../public/OA Anime Mockup.png"
import HHManager from "../public/Happy-Home-Mockup.png"
import MCColorPicker from "../public/MC Color Picker Tutorial Mockup.png"
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
    description: "Website for an interior design company.",
    header: <Skeleton 
      imageSrc={warmWoodPic}
      altText="Warm Wood Project Cover"
    />,
    className: "md:col-span-2 row-span-2 saturate-0 hover:saturate-100",
  },
  {
    title: "Overanalyzing Anime",
    year: "2024",
    description: "A redesigned responsive website for a content creator seeking to revamp their pre-existing blog.",
    className: "md:col-span-2 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      imageSrc={OABlog}
      altText="Overanalyzing Anime Blog Project Cover"
    />,
  },
  {
    title: "MM Florist",
    description: "A responsive website for an online florist shop",
    className: "md:col-span-3 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      imageSrc={MMFlorist}
      altText="Magic Moon Florist Project Cover"  
    />,
  },
  {
    title: "Happy Home Manager",
    description:
      "A web and mobile app for a family oriented task manager",
    className: "md:col-span-1 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      imageSrc={HHManager}
      altText="Warm Wood Project Cover"
    />,
  },
  {
    title: "Bee & Tea",
    year: "2023",
    description: "A ecommerce website for a California-based honey and tea vendor.",
    className: "md:col-span-2 row-span-2 saturate-0 hover:saturate-100", 
    header: <Skeleton 
      imageSrc={BeeTeaPic}
      altText="Bee & Tea Project Cover"
    />,
  },
  {
    title: "Mastery Coding Color Picker",
    description: "An in-depth tutorial for a color picker tool made using HTML, CSS, and JavaScript for middle school students",
    className: "md:col-span-2 row-span-2 saturate-0 hover:saturate-100",
    header: <Skeleton 
      imageSrc={MCColorPicker}
      altText="Mastery Coding Color Picker Project Cover"
    />,
  },
];

export default ProjectHighlights