"use client";
import React from 'react'
import PageHeader from './PageHeader'
import ExpertiseCard from './ExpertiseCard'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiShopify, SiLaravel, SiNodedotjs, SiDotnet, SiPhp, SiPython, SiGraphql, SiDocker, SiKubernetes, SiAmazonaws, SiTerraform, SiMongodb, SiMicrosoftazure, SiLinux, SiRedis, SiApacheairflow, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAngular, FaWordpress } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";


const expertiseCards = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "4+ Years",
                icon: <CgFigma className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "2+ Years",
                icon: <SiBlender className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 3,
                toolName: "Adobe Photoshop",
                designation: "3+ Years",
                icon: <SiAdobephotoshop  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 4,
                toolName: "Adobe Illustrator",
                designation: "1+ Years",
                icon: <SiAdobeillustrator  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 5,
                toolName: "Adobe After Effects",
                designation: "1+ Years",
                icon: <SiAdobeaftereffects  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
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
                designation: "10+ Years",
                icon: <SiHtml5 className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 2,
                toolName: "CSS3",
                designation: "10+ Years",
                icon: <SiCss3 className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 3,
                toolName: "SASS",
                designation: "4+ Years",
                icon: <SiSass className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 4,
                toolName: "TailwindCSS",
                designation: "1+ Years",
                icon: <SiTailwindcss className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 5,
                toolName: "JavaScript",
                designation: "10+ Years",
                icon: <SiJavascript className={`w-5 h-5 md:w-7 md:h-7 mx-auto`}/>
            },
            {
                id: 6,
                toolName: "TypeScript",
                designation: "2+ Years",
                icon: <SiTypescript className={`$w-5 h-5 md:w-7 md:h-7 mx-auto`}/>
            }, 
            {
                id: 7,
                toolName: "React & React Native",
                designation: "4+ Years",
                icon: <SiReact className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 8,
                toolName: "Angular",
                designation: "1+ Years",
                icon: <FaAngular className={`w-8 h-8 md:w-10 md:h-10 mx-auto`}/>
            },
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
                designation: "4+ Years",
                icon: <SiNodedotjs className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 2,
                toolName: "C#",
                designation: "4+ Years",
                icon: <TbBrandCSharp className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 3,
                toolName: ".NET",
                designation: "2+ Years",
                icon: <SiDotnet className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 4,
                toolName: "PHP",
                designation: "2+ Years",
                icon: <SiPhp className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 5,
                toolName: "Laravel",
                designation: "1+ Years",
                icon: <SiLaravel className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 6,
                toolName: "GraphQL",
                designation: "2+ Years",
                icon: <SiGraphql className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 7,
                toolName: "Wordpress",
                designation: "2+ Years",
                icon: <FaWordpress className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 8,
                toolName: "Shopify",
                designation: "1+ Years",
                icon: <SiShopify className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            /*
            {
                id: 7,
                toolName: "Dockers",
                designation: "1+ Years",
                icon: <SiDocker className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 8,
                toolName: "Kubernetes",
                designation: "1+ Years",
                icon: <SiKubernetes className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 9,
                toolName: "Terraform",
                designation: "1+ Years",
                icon: <SiTerraform className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            */
        ]
    },
    {
        id: 4,
        title: "Database Management",
        description: "I design and optimize high-performance databases by implementing efficient data structures, ensuring database integrity, and enabling storage solutions to power dynamic and data-driven applications.",
        tools: [
            {
                id: 1,
                toolName: "PostgreSQL",
                designation: "6+ Years",
                icon: <BiLogoPostgresql className={`w-8 h-8 md:w-10 md:h-10 mx-auto`}/>

            },
            {
                id: 2,
                toolName: "MySQL",
                designation: "2+ Years",
                icon: <GrMysql className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 3,
                toolName: "MongoDB",
                designation: "4+ Years",
                icon: <SiMongodb className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 4,
                toolName: "Elasticsearch",
                designation: "1+ Years",
                icon: <SiElasticsearch className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 5,
                toolName: "Redis",
                designation: "1+ Years",
                icon: <SiRedis className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 6,
                toolName: "Amazon Web Services",
                designation: "2+ Years",
                icon: <SiAmazonaws className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 7,
                toolName: "Azure",
                designation: "2+ Years",
                icon: <SiMicrosoftazure className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            /*
            {
                id: 8,
                toolName: "Linux",
                designation: "2+ Years",
                icon: <SiLinux className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            */
            {
                id: 9,
                toolName: "Python",
                designation: "6+ Years",
                icon: <SiPython className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            /*
            {
                id: 10,
                toolName: "Apache Airflow",
                designation: "1+ Years",
                icon: <SiApacheairflow className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            */
        ]
    }
]

const Expertise = () => {
  return (
    <div id="expertise">
        <PageHeader title="Services"/>
        <div className='flex flex-col gap-12 max-w-7xl mx-auto'>
            {
                expertiseCards.map((card) => (
                    <ExpertiseCard 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        tools={card.tools}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Expertise