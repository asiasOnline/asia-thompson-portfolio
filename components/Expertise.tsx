"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import ExpertiseCard from './ui/ExpertiseCard'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiLaravel, SiAstro, SiNodedotjs, SiCsharp, SiDotnet, SiPhp, SiPython, SiApollographql, SiDocker, SiKubernetes, SiAmazonaws, SiTerraform, SiMongodb, SiMicrosoftazure, SiSnowflake, SiRedis, SiApacheairflow, SiApachespark, SiTableau, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular } from "react-icons/fa6";


const smallIconSize = `w-6 h-6`
const baseIconSize = `w-8 h-8`


const expertise = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "Industry standard collaborative design tool | 4+ Years",
                icon: <CgFigma className={`${smallIconSize} md:${baseIconSize} mx-auto`}/>
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "Open-source tool for creating 3D assets | 2+ Years",
                icon: <SiBlender className={`${smallIconSize} md:${baseIconSize} mx-auto`}/>
            },
            {
                id: 3,
                toolName: "Adobe Photoshop",
                designation: "Industry standard photo and raster graphic software | 3+ Years",
                icon: <SiAdobephotoshop  className={`${smallIconSize} md:${baseIconSize} mx-auto`}/>
            },
            {
                id: 4,
                toolName: "Adobe Illustrator",
                designation: "Industry standard vector graphics editor | 1+ Years",
                icon: <SiAdobeillustrator  className={`${smallIconSize} md:${baseIconSize} mx-auto`}/>
            },
            {
                id: 5,
                toolName: "Adobe After Effects",
                designation: "Industry standard motion graphics tool | 1+ Years",
                icon: <SiAdobeaftereffects  className={`${smallIconSize} md:${baseIconSize} mx-auto`}/>
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
                designation: "Markup language for web pages | 10+ Years",
                icon: <SiHtml5 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "CSS3",
                designation: "Stylesheet language for web design | 10+ Years",
                icon: <SiCss3 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "SASS",
                designation: "Standard CSS extension | 4+ Years",
                icon: <SiSass className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "TailwindCSS",
                designation: "Current standard CSS framework | 1+ Years",
                icon: <SiTailwindcss className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "JavaScript",
                designation: "Core programming language for web page behavior | 10+ Years",
                icon: <SiJavascript className='w-7 h-7 mx-auto'/>
            },
            {
                id: 6,
                toolName: "TypeScript",
                designation: "The working developer's JavaScript | 2+ Years",
                icon: <SiTypescript className='w-7 h-7 mx-auto'/>
            }, 
            {
                id: 7,
                toolName: "React & React Native",
                designation: "Front end framework for web, iOS, and Android | 4+ Years",
                icon: <SiReact className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Angular",
                designation: "Typescript-based framework for web applications | 1+ Years",
                icon: <FaAngular className='w-10 h-10 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Laravel",
                designation: "PHP-based framework for web applications | 1+ Years",
                icon: <SiLaravel className='w-8 h-8 mx-auto'/>
            },
            {
                id: 10,
                toolName: "Astro",
                designation: "Web framework for building content-driven websites | 1+ Years",
                icon: <SiAstro className='w-8 h-8 mx-auto'/>
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
                designation: "Tool for running JavaScript server-side | 4+ Years",
                icon: <SiNodedotjs className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "C#",
                designation: "General purpose programming language for apps and games | 4+ Years",
                icon: <SiCsharp className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: ".NET",
                designation: "C# framework for building web, mobile, and desktop apps | 2+ Years",
                icon: <SiDotnet className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "PHP",
                designation: "General-purpose scripting language for web development | 2+ Years",
                icon: <SiPhp className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Python",
                designation: "High-level language for automation, databases, and machine learning | 6+ Years",
                icon: <SiPython className='w-8 h-8 mx-auto'/>
            },
            {
                id: 6,
                toolName: "Apollo GraphQL",
                designation: "Tool for managing local and remote data with GraphQL | 2+ Years",
                icon: <SiApollographql className='w-8 h-8 mx-auto'/>
            },
            {
                id: 7,
                toolName: "Dockers",
                designation: "Containerization platform for virtualized app containers | 1+ Years",
                icon: <SiDocker className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Kubernetes",
                designation: "Container orchestration system for automatic deployment and scaling | 1+ Years",
                icon: <SiKubernetes className='w-8 h-8 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Amazon Web Services",
                designation: "Collection of cloud computing services from Amazon | 3+ Years",
                icon: <SiAmazonaws className='w-8 h-8 mx-auto'/>
            },
            {
                id: 10,
                toolName: "Terraform",
                designation: "Tool for automating various infrastructure tasks | 1+ Years",
                icon: <SiTerraform className='w-8 h-8 mx-auto'/>
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
                designation: "Relational database management system | 6+ Years",
                icon: <BiLogoPostgresql className='w-10 h-10 mx-auto'/>

            },
            {
                id: 2,
                toolName: "MongoDB",
                designation: "NoSQL database that utilizes JSON-like documents | 4+ Years",
                icon: <SiMongodb className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "Azure",
                designation: "Microsoft's cloud platform for infrastructure and database services | 2+ Years",
                icon: <SiMicrosoftazure className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "Snowflake",
                designation: "Platform for data storage, processing, and analytic solutions | 1+ Years",
                icon: <SiSnowflake className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Redis",
                designation: "NoSQL key-value database used for storage of complex data types | 1+ Years",
                icon: <SiRedis className='w-8 h-8 mx-auto'/>
            },
            {
                id: 6,
                toolName: "Apache Airflow",
                designation: "Automation tool to programmatically schedule and monitor workflows | 1+ Years",
                icon: <SiApacheairflow className='w-8 h-8 mx-auto'/>
            },
            {
                id: 7,
                toolName: "Apache Spark",
                designation: "Distributed data processing engine for data analytics and machine learning | 1+ Years",
                icon: <SiApachespark className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Tableau",
                designation: "Business intelligence and analytics software for visualizing data | 2+ Years",
                icon: <SiTableau className='w-8 h-8 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Elasticsearch",
                designation: "Search and analytics engine for structured and unstructured data | 1+ Years",
                icon: <SiElasticsearch className='w-8 h-8 mx-auto'/>
            },
        ]
    }
]

const Expertise = () => {
  return (
    <div id="expertise">
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
    </div>
  )
}

export default Expertise