import React from 'react'
import { CgFigma } from "react-icons/cg";
import { SiNotion, SiSlack, SiAsana, SiTrello, SiAdobephotoshop, SiAdobeillustrator, SiHotjar, SiHtml5, SiCss3, SiBootstrap, SiStrapi, SiJavascript, SiShopify, SiPhp, SiPython, SiGraphql, SiExpo, SiDocker, SiKubernetes, SiMongodb, SiOpenai, SiNextdotjs, SiNodedotjs, SiZapier, SiGit } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa6";

const serviceData = [
    {
        "id": 1,
        "title": "Product Strategy",
        "description": "Whether starting from scratch or refining an existing concept, I can help guide you through the planning and prioritization that will set your project up for success.",
        "tools": [
            {
                "id": 1,
                "toolName": "Notion",
                "designation": "4+ Years",
                "icon": <SiNotion className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "Slack",
                "designation": "6+ Years",
                "icon": <SiSlack className={`w-5 h-5 md:w-7 md:h-7 mx-auto`}/>
            },
            {
                "id": 3,
                "toolName": "Asana",
                "designation": "6+ Years",
                "icon": <SiAsana className={`w-5 h-5 md:w-7 md:h-7 mx-auto`}/>
            },
            {
                "id": 4,
                "toolName": "Trello",
                "designation": "6+ Years",
                "icon": <SiTrello className={`w-5 h-5 md:w-7 md:h-7 mx-auto`}/>
            }
        ]
    },
    {
        "id": 2,
        "title": "UX & UI Design",
        "description": "From concept I design intuitive, user-centered interfaces that balance aesthetics with usability — ensuring your product is not only beautiful, but easy to use and optimized for engagement.",
        "tools": [
            {
                "id": 1,
                "toolName": "Figma",
                "designation": "6+ Years",
                "icon": <CgFigma className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "Adobe Photoshop",
                "designation": "5+ Years",
                "icon": <SiAdobephotoshop  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                "id": 3,
                "toolName": "Adobe Illustrator",
                "designation": "3+ Years",
                "icon": <SiAdobeillustrator  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            },
            {
                "id": 4,
                "toolName": "Hotjar",
                "designation": "3+ Years",
                "icon": <SiHotjar  className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
            }
        ]
    },
    {
        "id": 3,
        "title": "Single Page Websites",
        "description": "Based on your business goals I can build a high-performing single-page website perfect for portfolios, landing pages, and campaigns — designed to tell your story and drive conversions fast.",
        "tools": [
            {
                "id": 1,
                "toolName": "HTML5",
                "designation": "10+ Years",
                "icon": <SiHtml5 className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "CSS3",
                "designation": "10+ Years",
                "icon": <SiCss3 className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 3,
                "toolName": "Bootstrap",
                "designation": "6+ Years",
                "icon": <SiBootstrap className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 4,
                "toolName": "JavaScript",
                "designation": "10+ Years",
                "icon": <SiJavascript className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 5,
                "toolName": "Git",
                "designation": "10+ Years",
                "icon": <SiGit className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            
        ]
    },
    {
        "id": 4,
        "title": "Multi-Page Websites",
        "description": "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        "tools": [
            {
                "id": 1,
                "toolName": "PHP",
                "designation": "6+ Years",
                "icon": <SiPhp className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "WordPress",
                "designation": "6+ Years",
                "icon": <FaWordpress className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 3,
                "toolName": "GraphQL",
                "designation": "4+ Years",
                "icon": <SiGraphql className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 4,
                "toolName": "Shopify",
                "designation": "4+ Years",
                "icon": <SiShopify className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            }
        ]
    },
    {
        "id": 5,
        "title": "App Development",
        "description": "For ideas that require more complex interactivity I build scalable frontend and backend code for both web and mobile applications.",
        "tools": [
            {
                "id": 1,
                "toolName": "Next.js",
                "designation": "4+ Years",
                "icon": <SiNextdotjs className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "MongoDB",
                "designation": "4+ Years",
                "icon": <SiMongodb className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 3,
                "toolName": "PostgreSQL",
                "designation": "4+ Years",
                "icon": <BiLogoPostgresql className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 4,
                "toolName": "Expo",
                "designation": "2+ Years",
                "icon": <SiExpo className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
        ]
    },
    {
        "id": 6,
        "title": "Data & AI Integration",
        "description": "Supercharge your workflow and products with AI functionality using natural language processing, automation, and generative AI tools to streamline operations and stand out from the competition.",
        "tools": [
            {
                "id": 1,
                "toolName": "Python",
                "designation": "2+ Years",
                "icon": <SiPython className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 2,
                "toolName": "OpenAI API",
                "designation": "2+ Years",
                "icon": <SiOpenai className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 3,
                "toolName": "Docker",
                "designation": "2+ Years",
                "icon": <SiDocker className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 4,
                "toolName": "Kubernetes",
                "designation": "2+ Years",
                "icon": <SiKubernetes className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            },
            {
                "id": 5,
                "toolName": "Zapier",
                "designation": "2+ Years",
                "icon": <SiZapier className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
            }
        ]
    }
]

export default serviceData