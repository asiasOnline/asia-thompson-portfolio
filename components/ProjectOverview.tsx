import React from 'react'
import { TbWorld } from "react-icons/tb";

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
} : {
  clientBackground?: string;
  industryIcon?: React.ReactNode; 
  industryTitle?: string;
  platformWebsite: boolean;
  problemIntro?: string;
  problemExamples?: React.ReactNode;
  solutionExamples?: React.ReactNode;
  solutionIntro?: string;
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
          </div>
          <div>
            <h2>Roles</h2>
          </div>
          <div>
            <h2>Toolkit</h2>
          </div>
        </div>
    </div>
  )
}

export default ProjectOverview