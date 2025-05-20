import React from 'react'
import { Button } from '../ui/Button'
import Image from 'next/image'

const projects = [
      { 
      id: "1",
      title: "Holistic Hands",  
      year: "2024",
      industry: "Health",
      jobTags: ["Branding", "Web Design"],
      description: "Lorem ipsum dolor sit amet consectetur. Lacus velit mi vitae mi amet est orci leo eget. Arcu faucibus nam pulvinar venenatis amet in scelerisque.",
      image: {
        src: "/project-assets/holistic-hands-project-cover.png", 
        alt: "reiki healing website project cover",
        square: false
      }
    },
    { 
      id: "2",
      title: "Bee & Tea",  
      year: "2022",
      industry: "Ecommerce",
      jobTags: ["Branding", "Web Design", "Web Development"],
      description: "Lorem ipsum dolor sit amet consectetur. Lacus velit mi vitae mi amet est orci leo eget. Arcu faucibus nam pulvinar venenatis amet in scelerisque.",
      image: {
        src: "/project-assets/bee-tea-project-cover.png", 
        alt: "bee tea project cover",
        square: false
      }
    },
      { 
      id: "3",
      title: "MM Florist",  
      year: "2021",
      industry: "Ecommerce",
      jobTags: ["Web Design", "Web Development"],
      description: "Lorem ipsum dolor sit amet consectetur. Lacus velit mi vitae mi amet est orci leo eget. Arcu faucibus nam pulvinar venenatis amet in scelerisque.",
      image: {
        src: "/project-assets/mm-florist-project-cover.png", 
        alt: "MM florist project cover",
        square: false
      }
    },
    ]

const ProjectScroll = () => {
  return (
    <div className='w-full gap-16 gap-lg-0 flex flex-col justify-between px-6 max-h-[600px] border-black border-y-2 overflow-y-auto'>
      {projects.map((project, index) => {
        return <div className='flex my-8'>
          {/*Project Details*/}
          <div className='w-1/2'>
            <div>
            <p className='italic'>{project.id}/{projects.length}</p>
          </div>
          <div className='flex flex-col gap-6 border-slate-500 border-y-2 py-12'>
            <div className='w-full flex justify-between pb-4'>
              <p>{project.year}</p>
              <p className='font-bold'>{project.industry}</p>
            </div>
            <div>
              <h4 className='text-7xl'>{project.title}</h4>
            </div>
            <div className='flex gap-4'>
              {project.jobTags.map((tag) => {
                  return <div className='p-2 bg-slate-400 rounded-lg'>{tag}</div>
                })}
            </div>
            <div>
              <p className='text-xl'>{project.description}</p>
            </div>
            <Button 
              variant="outline" 
              type="submit" 
              className="text-md w-2/5 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-black dark:text-white dark:border-white dark:button-shadow-none"
              >View My Projects
          </Button>
          </div>
          </div>
          {/*Project Image*/}
          <div className='w-1/2 flex justify-center'>
            <Image 
              key={index}
              src={project.image.src}
              alt={project.image.alt}
              width={720}
              height={405}
              className="border-2 border-black rounded-md"
              />
          </div>
        </div>
      })}
    </div>
  )
}

export default ProjectScroll