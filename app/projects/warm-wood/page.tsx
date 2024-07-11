import React from 'react'
import Image from 'next/image'

import ProjectHero from '@/components/ProjectHero'
import ProjectOverview from '@/components/ProjectOverview';
import ProjectSectionExamples from '@/components/ui/ProjectSectionExamples';
import { WarmWoodOverviewVideo } from '@/components/ui/VideoAssets';
import { WarmWoodLogo } from '@/components/ui/ProjectLogoAssets';
import { OneStarScreen, ThreeStarScreen, ErrorScreen, Hourglass, AngryFace, CheckScreen, Stopwatch, PleasedFace } from '@/components/ui/ProjectSVGAssets';

import { PiPencilRuler } from "react-icons/pi";
import { CgFigma } from 'react-icons/cg';
import { SiTailwindcss, SiTypescript, SiPhp, SiLaravel, SiMongodb } from 'react-icons/si';
import { FaAngular } from "react-icons/fa6";


const WarmWoodPage = () => {
  return (
    <>
      <ProjectHero
        projectLogo={<WarmWoodLogo />}
        title={projectTitle}
        description={projectDescription}
        caseStudy={true}
      >
        <WarmWoodOverviewVideo />
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
            src="/warm-wood-overview-img.jpg"
            alt="Living room illustration"
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

const projectTitle = "Warm Wood"

const projectDescription = "Warm Wood is all about a cozy-first approach to interior design and making professional services accessible to all. With a focus on virtual consultations that offer personalized design solutions and curated recommendations style is attainable from anywhere."

const clientBackround = <div><p>Warm Wood is passionate about helping people transform their spaces to positively  impact their physical, mental, and spiritual health.</p> 
<br />
<p>Warm Wood&apos;s core values are accessibility, sustainability, and customer-centricity. They offer a range of services such as personalized interior design consultations, room makeovers, and various plans based on an a wide range of budgets and individual needs.</p></div>

const problemIntro = <div><p>Warm Wood has been utilizing a static website that showcases their services and requires potential clients to fill out a contact form then communicate through email correspondence.</p><br /><p>This system has created four major problems:</p></div>

const solutionIntro = <div><p>A responsive web application platform would allow Warm Wood to reach a broader audience and integrate features such as a client management system, virtual consultation tools, and an interactive design showcase. </p><br /><p>Warm Wood can address their four problems with four corresponding solutions, which include:</p></div>

const industryTitle = "Specialized Design Services"

const industryIcon = <PiPencilRuler className='w-8 h-8'/>

const weekNumber = 10

const hourTotal = 200

const designWeeks = 2

const devWeeks = 8

const roles = ["Product Designer", "UX Designer", "Information Architect", "UI Designer", "Full-Stack Developer", "SQL Developer"]

const problems = [
  {
    visual:<OneStarScreen />,
    title: "Negative Reputation",
    description: "Their current system is unprofessional which can impact the amount of clients they’re able to obtain."
  },
  {
    visual:<ErrorScreen />,
    title: "Error Prone Workflow",
    description: "The online market place is accessible and thus over saturated making it difficult to stand out."
  },
  {
    visual:<Hourglass />,
    title: "Unproductive & Fixed Workflow",
    description: "As the client grows their manual process will result in wasted time and resources, reducing their overall productivity and ability to scale."
  },
  {
    visual:<AngryFace />,
    title: "Client Dissatisfaction",
    description: "The lack of interactive and personalized online experience leads to lower client satisfaction."
  }
]

const solutions = [
  {
    visual:<ThreeStarScreen />,
    title: "Improved Reputation ",
    description: "A modern user-friendly platform will  reinforce the brand as client-centric improving their  reputation and providing a competitive edge."
  },
  {
    visual:<CheckScreen />,
    title: "Scalability",
    description: "By automating client interactions and design processes this would allow them to handle a larger amount of clients and support business growth."
  },
  {
    visual:<Stopwatch />,
    title: "Operational Efficiency",
    description: "A web application will streamline operations reducing manual work and freeing up time to focus on design tasks leading to higher productivity and operational efficiency."
  },
  {
    visual:<PleasedFace />,
    title: "Improved Client Acquisition",
    description: "A more dynamic user experience will attract more clients from diverse locations and improve client retention and satisfaction."
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
  toolName: "Angular",
  designation: "1+ Years",
  icon: <FaAngular className={`w-8 h-8 md:w-10 md:h-10 mx-auto`}/>
},
{
  id: 5,
  toolName: "PHP",
  designation: "2+ Years",
  icon: <SiPhp className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
},
{
  id: 6,
  toolName: "Laravel",
  designation: "1+ Years",
  icon: <SiLaravel className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
},
{
  id: 7,
  toolName: "MongoDB",
  designation: "4+ Years",
  icon: <SiMongodb className={`w-6 h-6 md:w-8 md:h-8 mx-auto`}/>
},
]

export default WarmWoodPage