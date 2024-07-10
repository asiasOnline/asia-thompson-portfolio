import React from 'react'
import { MdEmojiFoodBeverage } from "react-icons/md";
import ProjectHero from '@/components/ProjectHero'
import { BeeTeaOverviewVideo } from '@/components/ui/VideoAssets';
import { BeeTeaLogo } from '@/components/ui/ProjectLogoAssets';
import ProjectOverview from '@/components/ProjectOverview';


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
      <ProjectOverview 
        clientBackground='Bee & Tea began as a passion project fueled by a strong commitment to sustainability, quality, community, along with the founder’s personal love of beekeeping and gardening. 

Starting from humble beginnings as their popularity has grown they’ve stayed true to their values and methods ensuring their products are free from any additives and preservatives. 

Their goal is to inspire healthy living and environmental stewardship through their products sourced from their own maintained hives and seasonal tea blends.'
        industryIcon={<MdEmojiFoodBeverage />}
        platformWebsite={true}
      />
    </>
  )
}

export default BeeTeaPage