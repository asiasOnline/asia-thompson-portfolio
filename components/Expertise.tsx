"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import ExpertiseCard from './ui/ExpertiseCard'
import { CgFigma } from "react-icons/cg";

const expertise = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        /*tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry design standard",
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "For custom 3D assets",
            },
            {
                id: 3,
                toolName: "Photoshop",
                designation: "Photo editor standard",
            }
        ]*/
    },
    {
        id: 2,
        title: "Front End Development",
        description: "I craft captivating, interactive web experiences by implementing modern design aesthetics, optimizing user engagement, and capitalizing on the latest front-end technologies for the appropriate projects. ",
        /*tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry design standard",
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "For custom 3D assets",
            },
            {
                id: 3,
                toolName: "Photoshop",
                designation: "Photo editor standard",
            }
        ]*/
    },
    {
        id: 3,
        title: "Back End Development",
        description: "I build robust, scalable back-end systems architecting secure APIs, optimizing database interactions, and ensuring seamless integration with front-end technologies for enhanced performance and reliability. ",
        /*
        tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry design standard",
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "For custom 3D assets",
            },
            {
                id: 3,
                toolName: "Photoshop",
                designation: "Photo editor standard",
            }
        ]*/
    },
    {
        id: 4,
        title: "Database Engineering",
        description: "I design and optimize high-performance databases by implementing efficient data structures, ensuring database integrity, and enabling storage solutions to power dynamic and data-driven applications.",
        /*tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry design standard",
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "For custom 3D assets",
            },
            {
                id: 3,
                toolName: "Photoshop",
                designation: "Photo editor standard",
            }
        ]
        */
    }
]

const Expertise = () => {
  return (
    <div className='mt-32'>
        <PageHeader title="Expertise"/>
        <ExpertiseCard 
            id={expertise[0].id}
            title={expertise[0].title}
            description={expertise[0].description}
        />
            <ExpertiseCard 
            id={expertise[1].id}
            title={expertise[1].title}
            description={expertise[1].description}
        />
            <ExpertiseCard 
            id={expertise[2].id}
            title={expertise[2].title}
            description={expertise[2].description}
        />
            <ExpertiseCard 
            id={expertise[3].id}
            title={expertise[3].title}
            description={expertise[3].description}
        />
    </div>
  )
}

export default Expertise