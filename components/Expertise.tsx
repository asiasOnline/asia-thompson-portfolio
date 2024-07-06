"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import ExpertiseCard from './ui/ExpertiseCard'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiLaravel, SiAstro, SiNodedotjs, SiCsharp, SiDotnet, SiPhp, SiPython, SiApollographql, SiDocker, SiKubernetes, SiAmazonaws, SiTerraform, SiMongodb, SiMicrosoftazure, SiSnowflake, SiRedis, SiApacheairflow, SiApachespark, SiTableau, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular } from "react-icons/fa6";


const IconSize20px = `w-5 h-5`
const IconSize24px = `w-6 h-6`
const IconSize28px = `w-7 h-7`
const IconSize32px = `w-8 h-8`
const IconSize40px = `w-10 h-10`
const IconSize44px = `w-11 h-11`
const IconSize48px = `w-12 h-12`

/* Tool Descriptions
Figma - Industry standard collaborative design tool
Blender - Open-source tool for creating 3D assets 
Adobe Photoshop - Industry standard photo and raster graphic software | 
Adobe Illustrator - Industry standard vector graphics editor
Adobe After Effects - Industry standard motion graphics tool
HTML5 - Markup language for web pages 
CSS3 - Stylesheet language for web design 
SASS - Standard CSS extension
TailwindCSS - Current standard CSS framework 
JavaScript - Core programming language for web page behavior 
TypeScript - The working developer's JavaScript 
React & React Native - Front end framework for web, iOS, and Android
Angular - Typescript-based framework for web applications
Laravel - PHP-based framework for web applications 
Astro - Web framework for building content-driven websites
Node.js - Tool for running JavaScript server-side 
C# - General purpose programming language for apps and games
.NET - C# framework for building web, mobile, and desktop apps
PHP - General-purpose scripting language for web development 
Python - High-level language for automation, databases, and machine learning 
Apollo GraphQL - Tool for managing local and remote data with GraphQL
Dockers - Containerization platform for virtualized app containers 
Kubernetes - Container orchestration system for automatic deployment and scaling
Amazon Web Services - Collection of cloud computing services from Amazon 
Terraform - Tool for automating various infrastructure tasks 
PostgreSQL - Relational database management system 
MongoDB - NoSQL database that utilizes JSON-like documents
Azure - Microsoft's cloud platform for infrastructure and database services
Snowflake - Platform for data storage, processing, and analytic solutions
Redis - NoSQL key-value database used for storage of complex data types 
Apache Airflow - Automation tool to programmatically schedule and monitor workflows
Apache Spark - Distributed data processing engine for data analytics and machine learning
Tableau - Business intelligence and analytics software for visualizing data
Elasticsearch - Search and analytics engine for structured and unstructured data
*/


const expertise = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        tools: [
            {
                id: 1,
                toolName: "Figma",
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
            {
                id: 9,
                toolName: "Laravel",
                designation: "1+ Years",
                icon: <SiLaravel className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 10,
                toolName: "Astro",
                designation: "1+ Years",
                icon: <SiAstro className={`${IconSize24px} md:${IconSize32px} mx-auto`}/>
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
                designation: "4+ Years",
                icon: <SiNodedotjs className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 2,
                toolName: "C#",
                designation: "4+ Years",
                icon: <SiCsharp className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
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
                toolName: "Python",
                designation: "6+ Years",
                icon: <SiPython className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 6,
                toolName: "Apollo GraphQL",
                designation: "2+ Years",
                icon: <SiApollographql className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
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
                toolName: "Amazon Web Services",
                designation: "3+ Years",
                icon: <SiAmazonaws className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 10,
                toolName: "Terraform",
                designation: "1+ Years",
                icon: <SiTerraform className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
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
                toolName: "PostgreSQL",
                designation: "6+ Years",
                icon: <BiLogoPostgresql className={`w-8 h-8 md:w-10 md:h-10 mx-auto`}/>

            },
            {
                id: 2,
                toolName: "MongoDB",
                designation: "4+ Years",
                icon: <SiMongodb className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 3,
                toolName: "Azure",
                designation: "2+ Years",
                icon: <SiMicrosoftazure className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 4,
                toolName: "Snowflake",
                designation: "1+ Years",
                icon: <SiSnowflake className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 5,
                toolName: "Redis",
                designation: "1+ Years",
                icon: <SiRedis className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 6,
                toolName: "Apache Airflow",
                designation: "1+ Years",
                icon: <SiApacheairflow className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 7,
                toolName: "Apache Spark",
                designation: "1+ Years",
                icon: <SiApachespark className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 8,
                toolName: "Tableau",
                designation: "2+ Years",
                icon: <SiTableau className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                id: 9,
                toolName: "Elasticsearch",
                designation: "1+ Years",
                icon: <SiElasticsearch className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
        ]
    }
]

const Expertise = () => {
  return (
    <div id="expertise">
        <PageHeader title="Expertise"/>
        <div className='flex flex-col gap-12 max-w-7xl mx-auto'>
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
    </div>
  )
}

export default Expertise