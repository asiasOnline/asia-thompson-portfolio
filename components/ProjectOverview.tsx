import React from 'react'
import { TbWorld } from "react-icons/tb";
import { ExpertiseTools } from './ui/ExpertiseTools';

const website = {
  type: "Website",
  icon: <TbWorld className='w-8 h-8'/>
}

const ProjectOverview = ({
  clientBackground,
  industryIcon,
  industryTitle,
  platformWebsite,
  problemIntro,
  overviewAsset,
  problemExamples,
  solutionExamples,
  solutionIntro,
  weekNumber,
  hourTotal,
  designWeeks,
  devWeeks,
  roles,
  tools,
} : {
  clientBackground?: string | React.JSX.Element;
  industryIcon?: React.ReactNode; 
  industryTitle?: string;
  platformWebsite: boolean;
  overviewAsset?: React.ReactNode;
  problemIntro?: string | React.JSX.Element;
  problemExamples?: React.ReactNode;
  solutionExamples?: React.ReactNode;
  solutionIntro?: string | React.JSX.Element;
  weekNumber?: number;
  hourTotal?: number;
  designWeeks?: number;
  devWeeks?: number;
  roles: string[];
  tools?: any;
}) => {
  return (
    <div className='w-3/4 mt-32 flex flex-col gap-16'>
      <div className='flex'>
        <div className='w-full'>
          <h2 className='text-lg md:text-2xl lg:text-3xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'>Overview</h2>
          <h3 className='text-2xl font-bold tracking-wider'>Client Background</h3>
          {clientBackground}
          <div className='flex gap-20 mt-10'>
            <div>
              <h3 className='text-2xl font-bold tracking-wider'>Industry</h3>
              <div className='flex items-center gap-4'>{industryIcon}{industryTitle}</div>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-2xl font-bold tracking-wider'>Platforms</h3>
              {platformWebsite ? <div className='flex items-center gap-4'><TbWorld className='w-8 h-8'/>Website</div> : ''}
            </div>
          </div>
        </div>
        <div className='w-full relative'>
          {overviewAsset}
        </div>
      </div>
        <div className='w-1/2'>
          <h3 className='text-2xl font-bold tracking-wider'>The Problem</h3>
          {problemIntro}
        </div>
        {problemExamples}
        <div className='w-1/2'>
          <h3 className='text-2xl font-bold tracking-wider'>The Solution</h3>
          {solutionIntro}
        </div>
        {solutionExamples}
        <div className='flex gap-40'>
          <div>
            <h3 className='text-2xl font-bold tracking-wider'>Timeline</h3>
            <div>
              <div className='mb-2'>{weekNumber} Weeks - {hourTotal}+ Hours Total</div>
              <div>{designWeeks} Weeks | Design</div>
              <div>{devWeeks} Weeks | Development</div>
            </div>
          </div>
          <div>
            <h3 className='text-2xl font-bold tracking-wider'>Roles</h3>
            <ul className='grid grid-cols-2 gap-y-4 gap-x-10 list-disc'>
            {roles.map((role) => (<li>{role}</li>))}
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-bold tracking-wider'>Toolkit</h3>
            <ExpertiseTools className="flex" tools={tools}/>
          </div>
        </div>
    </div>
  )
}

export default ProjectOverview