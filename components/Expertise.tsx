"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import ExpertiseCard from './ui/ExpertiseCard'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiElectron, SiNodedotjs, SiCsharp, SiDotnet, SiPhp, SiPython, SiApollographql } from "react-icons/si";
import { FaInvision, FaVuejs } from "react-icons/fa6";


const expertise = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry design standard",
                icon: <CgFigma className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "For custom 3D assets",
                icon: <SiBlender className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "Adobe Photoshop",
                designation: "Photo editor standard",
                icon: <SiAdobephotoshop className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "Adobe Illustrator",
                designation: "Vector editor standard",
                icon: <SiAdobeillustrator className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Invision",
                designation: "Planning and prototyping",
                icon: <FaInvision className='w-9 h-9 mx-auto'/>
            }
        ]
    },
    {
        id: 2,
        title: "Front End Development",
        description: "I craft captivating, interactive web experiences by implementing modern design aesthetics, optimizing user engagement, and capitalizing on the latest front-end technologies for the appropriate projects. ",
        tools: [
            {
                id: 1,
                toolName: "HTML5",
                designation: "The foundation of any website",
                icon: <SiHtml5 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "CSS3",
                designation: "Website styling",
                icon: <SiCss3 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "SASS",
                designation: "Traditional CSS extension",
                icon: <SiSass className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "TailwindCSS",
                designation: "The current standard CSS framework",
                icon: <SiTailwindcss className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "JavaScript",
                designation: "The programming language of the web",
                icon: <SiJavascript className='w-8 h-8 mx-auto'/>
            },
            {
                id: 6,
                toolName: "TypeScript",
                designation: "The working developer's JavaScript",
                icon: <SiTypescript className='w-8 h-8 mx-auto'/>
            }, 
            {
                id: 7,
                toolName: "React",
                designation: "The library dominating the JavaScript frameworks",
                icon: <SiReact className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Next.js",
                designation: "React if it was actually a framework",
                icon: <SiNextdotjs className='w-8 h-8 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Vue",
                designation: "The cool middle sister of the JavaScript frameworks",
                icon: <FaVuejs className='w-8 h-8 mx-auto'/>
            },
            {
                id: 10,
                toolName: "Electron",
                designation: "The web developer's entry to desktop apps",
                icon: <SiElectron className='w-8 h-8 mx-auto'/>
            }
        ]
    },
    {
        id: 3,
        title: "Back End Development",
        description: "I build robust, scalable back-end systems architecting secure APIs, optimizing database interactions, and ensuring seamless integration with front-end technologies for enhanced performance and reliability. ",
        tools: [
            {
                id: 1,
                toolName: "Node.js",
                designation: "The JavaScript runtime",
                icon: <SiNodedotjs className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "C#",
                designation: "The Microsoft programming language",
                icon: <SiCsharp className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: ".NET",
                designation: "The application platform for C#",
                icon: <SiDotnet className='w-8 h-8 mx-auto'/>
            },
        ]
    },
    {
        id: 4,
        title: "Database Engineering",
        description: "I design and optimize high-performance databases by implementing efficient data structures, ensuring database integrity, and enabling storage solutions to power dynamic and data-driven applications.",
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
        ]
    }
]

const Expertise = () => {
  return (
    <div className='mt-32'>
        <PageHeader title="Expertise"/>
        <div className='flex flex-col gap-12'>
            <ExpertiseCard 
                id={expertise[0].id}
                title={expertise[0].title}
                description={expertise[0].description}
                tools={expertise[0].tools}
            />
            <ExpertiseCard 
                id={expertise[1].id}
                title={expertise[1].title}
                description={expertise[1].description}
                tools={expertise[1].tools}
            />
            <ExpertiseCard 
                id={expertise[2].id}
                title={expertise[2].title}
                description={expertise[2].description}
                tools={expertise[2].tools}
            />
            <ExpertiseCard 
                id={expertise[3].id}
                title={expertise[3].title}
                description={expertise[3].description}
                tools={expertise[3].tools}
            />
        </div>
        {/*
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
        */}
    </div>
  )
}

export default Expertise