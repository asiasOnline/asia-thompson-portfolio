"use client";

import React from 'react'
import Image from 'next/image'

import { MdEmojiFoodBeverage } from "react-icons/md";
import { CgDesignmodo, CgFigma } from 'react-icons/cg';
import { SiTailwindcss, SiReact, SiTypescript, SiShopify } from 'react-icons/si';

import ProjectHero from '@/components/ProjectHero'
import { BeeTeaOverviewVideo } from '@/components/ui/VideoAssets';
import { BeeTeaLogo } from '@/components/ui/ProjectLogoAssets';
import ProjectOverview from '@/components/ProjectOverview';
import ProjectSectionExamples from '@/components/ui/ProjectSectionExamples';
import { TopThreeTier, HeartChat, AlertScreen, ThreeStarScreen, SmileyFaceChat, WindowSettingsScreen } from '@/components/ui/ProjectSVGAssets';

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

    <div className='flex'>
      <div className='w-1/5'></div>
      <ProjectOverview 
          clientBackground={clientBackround}
          industryIcon={industryIcon}
          industryTitle={industryTitle}
          platformWebsite={true}
          overviewAsset={
            <Image
            src="/bee-tea-overview-img.jpg"
            alt="Woman beekeeping"
            fill
            style={{objectFit: 'contain'}}
            />
          }
          problemIntro={problemIntro}
          problemExamples={<ProblemExamples />}
          solutionIntro={solutionIntro}
          solutionExamples={<SolutionExamples />}
          weekNumber={weekNumber}
          hourTotal={hourTotal}
          designWeeks={designWeeks}
          devWeeks={devWeeks}
          roles={roles}
          tools={tools}
        />
    </div>
    </>
  )
}

const ProblemExamples = () => {
  return (
    <div className='flex gap-20'>
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
    <div className='flex gap-20'>
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

const clientBackround = <div><p>Bee & Tea began as a passion project fueled by a strong commitment to sustainability, quality, community, along with the founder&apos;s personal love of beekeeping and gardening.</p><br /> <p>Starting from humble beginnings as their popularity has grown they&apos;ve stayed true to their values and methods ensuring their products are free from any additives and preservatives.</p> <br /><p>Their goal is to inspire healthy living and environmental stewardship through their products sourced from their own maintained hives and seasonal tea blends.</p></div>

const problemIntro = <div><p>Bee & Tea have been offering their wares locally at various farmers markets and noted how their popularity has grown both in-person and through their social media accounts.</p><br /><p>With an increase in profits they’ve carefully scaled their ability to produce more product and would like to break into the e-commerce market. To assist them in making this transition successful there are three main factors I’d like to keep at the forefront:</p></div>

const solutionIntro = <div><p>To break into the e-commerce market a responsive website that’s tailored to Bee and Tea’s brand identity and their customer engagement is the solution. /nThe website that’s made should address the specific aspects of the problem by incorporating the following elements into the end result:</p></div>

const industryTitle = "Food & Beverage"

const industryIcon = <MdEmojiFoodBeverage className='w-8 h-8'/>

const weekNumber = 4

const hourTotal = 100

const designWeeks = 1

const devWeeks = 3

const roles = ["Product Designer", "UX Designer", "Information Architect", "UI Designer", "Full-Stack Developer", "Shopify Developer"]

const problems = [
  {
    visual:<TopThreeTier />,
    title: "Competitve Pressure",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<HeartChat />,
    title: "Inability to Engage Customers",
    description: "Extensive time has been spent engaging with customers directly and that connection will be harder to maintain online."
  },
  {
    visual:<AlertScreen />,
    title: "Lacking Technical Expertise",
    description: "The client has limited experience running a e-commerce store so the solution needs to be straightforward and easy to maintain."
  }
]

const solutions = [
  {
    visual:<ThreeStarScreen />,
    title: "Market & Competition Analysis",
    description: "By conducting market research and an analysis of the competition a differentiation strategy can be implemented to highlight unique selling points."
  },
  {
    visual:<SmileyFaceChat />,
    title: "Customer Engagement & Feedback",
    description: "Implementing engagement tactics and feedback mechanisms will resonate with a pre-existing and new audience and help replicate the personal touch."
  },
  {
    visual:<WindowSettingsScreen />,
    title: "User-Friendly & Scalable Platform",
    description: "Selecting a intuitive e-commerce platform that’s easy to manage without extensive technical expertise will provide the client with confidence to utilize the platform effectively."
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