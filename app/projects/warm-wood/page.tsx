import React from 'react'
import ProjectHero from '@/components/ProjectHero'
import { WarmWoodOverviewVideo } from '@/components/ui/VideoAssets';
import { WarmWoodLogo } from '@/components/ui/ProjectLogoAssets';


const WarmWoodPage = () => {
  return (
    <>
      <ProjectHero
        projectLogo={<WarmWoodLogo />}
        title="Warm Wood"
        description="Warm Wood is all about a cozy-first approach to interior design and making professional services accessible to all. With a focus on virtual consultations that offer personalized design solutions and curated recommendations style is attainable from anywhere."
        caseStudy={true}
      >
        <WarmWoodOverviewVideo />
      </ProjectHero>
    </>
  )
}

export default WarmWoodPage