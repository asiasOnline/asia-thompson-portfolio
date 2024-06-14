import React from 'react'
import PageHeader from './ui/PageHeader'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const ProjectHighlights = () => {
  return (
    <div className='mt-32'>
        <PageHeader title="Project Highlights"/>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[18rem]" >
        {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
      </BentoGrid>
    </div>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 row-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "row-span-1", 
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "row-span-1",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "row-span-1	col-span-1",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    className: "row-span-1	col-span-2",
    header: <Skeleton />,
  },
];

export default ProjectHighlights