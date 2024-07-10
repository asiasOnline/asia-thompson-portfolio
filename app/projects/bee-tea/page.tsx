"use client";

import React from 'react'
import { MdEmojiFoodBeverage } from "react-icons/md";
import { CgFigma } from 'react-icons/cg';
import { SiTailwindcss, SiReact, SiTypescript, SiShopify } from 'react-icons/si';
import ProjectHero from '@/components/ProjectHero'
import { BeeTeaOverviewVideo } from '@/components/ui/VideoAssets';
import { BeeTeaLogo } from '@/components/ui/ProjectLogoAssets';
import ProjectOverview from '@/components/ProjectOverview';
import ProjectSectionExamples from '@/components/ui/ProjectSectionExamples';
import { OneStarScreen } from '@/components/ui/ProjectSVGAssets';

const BeeTeaPage = () => {
  return (
    <>
      <ProjectHero
        projectLogo={<BeeTeaLogo />}
        title={projectTitle}
        description={projectDescription}
        caseStudy={true}
      >
        <BeeTeaOverviewVideo />
      </ProjectHero>

      <ProjectOverview 
        clientBackground={clientBackround}
        industryIcon={<MdEmojiFoodBeverage />}
        industryTitle={industryTitle}
        platformWebsite={true}
        problemIntro={problemIntro}
        problemExamples={<ProblemExamples />}
        solutionIntro={solutionIntro}
        solutionExamples={<SolutionExamples />}
        roles={roles}
        tools={tools}
      />
    </>
  )
}

const ProblemExamples = () => {
  return (
    <div>
    {
      problems.map((problem, i) => (
        <ProjectSectionExamples
          key={i}
          visual={problem.visual}
          title={problem.title}
          description={problem.description}
        />
      ))
    }
  </div>
  )
}

const SolutionExamples = () => {
  return (
    <div>
    {
      solutions.map((solution, i) => (
        <ProjectSectionExamples
          key={i}
          visual={solution.visual}
          title={solution.title}
          description={solution.description}
        />
      ))
    }
  </div>
  )
}

const projectTitle = "Bee & Tea"

const projectDescription = "Bee & Tea’s journey is centered around a passion for nature and reflecting that in the products we consume regularly."

const clientBackround = "Bee & Tea began as a passion project fueled by a strong commitment to sustainability, quality, community, along with the founder’s personal love of beekeeping and gardening. \nStarting from humble beginnings as their popularity has grown they’ve stayed true to their values and methods ensuring their products are free from any additives and preservatives. \nTheir goal is to inspire healthy living and environmental stewardship through their products sourced from their own maintained hives and seasonal tea blends."

const problemIntro = "Bee & Tea have been offering their wares locally at various farmers markets and noted how their popularity has grown both in-person and through their social media accounts. /nWith an increase in profits they’ve carefully scaled their ability to produce more product and would like to break into the e-commerce market. To assist them in making this transition successful there are three main factors I’d like to keep at the forefront:"

const solutionIntro = "To break into the e-commerce market a responsive website that’s tailored to Bee and Tea’s brand identity and their customer engagement is the solution. /nThe website that’s made should address the specific aspects of the problem by incorporating the following elements into the end result:"

const industryTitle = "Food & Beverage"

const roles = ["Product Designer", "UX Designer", "Information Architect", "UI Designer", "Full-Stack Developer", "Shopify Developer"]

const problems = [
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  }
]

const solutions = [
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<OneStarScreen />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
]

const tools = [
  {
    id: 1,
    toolName: "Figma",
    designation: "4+ Years",
    icon: <CgFigma className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
  },
  {
    id: 2,
    toolName: "TailwindCSS",
    designation: "1+ Years",
    icon: <SiTailwindcss className='w-6 h-6 md:w-8 md:h-8 mx-auto'/>
  },
  {
    id: 3,
    toolName: "TypeScript",
    designation: "2+ Years",
    icon: <SiTypescript className='w-5 h-5 md:w-7 md:h-7 mx-auto'/>
}, 
  {
    id: 4,
    toolName: "React",
    designation: "4+ Years",
    icon: <SiReact className='w-5 h-5 md:w-7 md:h-7 mx-auto'/>
  },
  {
    id: 5,
    toolName: "Shopify",
    designation: "1+ Years",
    icon: <SiShopify className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
},
]

export default BeeTeaPage