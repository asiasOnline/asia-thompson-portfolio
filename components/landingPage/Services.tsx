import ExpertiseCard from '../ui/ExpertiseCard'
import services from '../../data/services'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiShopify, SiLaravel, SiNodedotjs, SiDotnet, SiPhp, SiPython, SiGraphql, SiDocker, SiKubernetes, SiAmazonaws, SiTerraform, SiMongodb, SiMicrosoftazure, SiLinux, SiRedis, SiApacheairflow, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAngular, FaWordpress } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

export default function Services() {
  
  return (
    <div>
        <div>
          <div><h3>Tailored Solutions to</h3></div>
          <div><h3>Grow Your Business</h3></div>
          <p>I offer tailored design and development solutions that empower businesses to reach new heights. From ideation to development, I’m here to support your business goals.</p>
          <p>Here’s how I can help.</p>
        </div>
        <div className='flex flex-col gap-12 max-w-7xl mx-auto'>
          {
            services.map((card: any) => (
                <ExpertiseCard 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    tools={card.tools}
                />
            ))
        }
      </div>
    </div>
  )
}