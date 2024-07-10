import React from 'react'
import ProjectHero from '@/components/ProjectHero'
import { BeeTeaOverviewVideo } from '@/components/ui/VideoAssets';
import { BeeTeaLogo } from '@/components/ui/ProjectLogoAssets';


const BeeTeaPage = () => {
  return (
    <>
      <ProjectHero
        projectLogo={<BeeTeaLogo />}
        title="Bee & Tea"
        description="Bee & Tea’s journey is centered around a passion for nature and reflecting that in the products we consume regularly."
        caseStudy={true}
      >
        <BeeTeaOverviewVideo />
      </ProjectHero>
    </>
  )
}

export default BeeTeaPage