import React from 'react'
import { TbWorld } from "react-icons/tb";
import { ExpertiseTools } from './ui/ExpertiseTools';

const website = {
  type: "Website",
  icon: <TbWorld />
}

const ProjectOverview = ({
  clientBackground,
  industryIcon,
  industryTitle,
  platformWebsite,
  problemIntro,
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
  clientBackground?: string;
  industryIcon?: React.ReactNode; 
  industryTitle?: string;
  platformWebsite: boolean;
  problemIntro?: string;
  problemExamples?: React.ReactNode;
  solutionExamples?: React.ReactNode;
  solutionIntro?: string;
  weekNumber?: number;
  hourTotal?: number;
  designWeeks?: number;
  devWeeks?: number;
  roles: string[];
  tools?: any;
}) => {
  return (
    <div className='w-3/4'>
        <h2 className='text-lg md:text-2xl lg:text-3xl leading-8 md:leading-10 lg:leading-14 2xl:leading-16 font-display tracking-wider'>Overview</h2>
        <h3 className='text-2xl font-bold tracking-wider '>Client Background</h3>
        <p>{clientBackground}</p>
        <div>
          <div>
            <h3 className='text-2xl font-bold tracking-wider '>Industry</h3>
            <div className='flex'>{industryIcon}{industryTitle}</div>
          </div>
          <div>
            <h3>Platforms</h3>
            {platformWebsite ? website.icon : ''}
          </div>
        </div>
        <div>
          <h3>The Problem</h3>
          {problemIntro}
        </div>
        {problemExamples}
        <div>
          <h3>The Solution</h3>
          {solutionIntro}
        </div>
        {solutionExamples}
        <div>
          <div>
            <h3>Timeline</h3>
            <div>
              <div>{weekNumber} Weeks - {hourTotal}+ Hours Total</div>
              <div>{designWeeks} Weeks | Design</div>
              <div>{devWeeks} Weeks | Development</div>
            </div>
          </div>
          <div>
            <h3>Roles</h3>
            <ul>
            {roles.map((role) => (<li>{role}</li>))}
            </ul>
          </div>
          <div>
            <h3>Toolkit</h3>
            <ExpertiseTools tools={tools}/>
          </div>
        </div>
    </div>
  )
}

export default ProjectOverview