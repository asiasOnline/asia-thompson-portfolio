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
    <div>
        <h1>Overview</h1>
        <h2>Client Background</h2>
        <p>{clientBackground}</p>
        <div>
          <div>
            <h2>Industry</h2>
            <div className='flex'>{industryIcon}{industryTitle}</div>
          </div>
          <div>
            <h2>Platforms</h2>
            {platformWebsite ? website.icon : ''}
          </div>
        </div>
        <div>
          <h2>The Problem</h2>
          {problemIntro}
        </div>
        {problemExamples}
        <div>
          <h2>The Solution</h2>
          {solutionIntro}
        </div>
        {solutionExamples}
        <div>
          <div>
            <h2>Timeline</h2>
            <div>
              <div>{weekNumber} Weeks - {hourTotal}+ Hours Total</div>
              <div>{designWeeks} Weeks | Design</div>
              <div>{devWeeks} Weeks | Development</div>
            </div>
          </div>
          <div>
            <h2>Roles</h2>
            <ul>
            {roles.map((role) => (<li>{role}</li>))}
            </ul>
          </div>
          <div>
            <h2>Toolkit</h2>
            <ExpertiseTools tools={tools}/>
          </div>
        </div>
    </div>
  )
}

export default ProjectOverview