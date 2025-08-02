"use client"

import React from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { FaLock } from "react-icons/fa";
import highlightedProjects from '../../data/highlightedProjects';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "../ui/Dialog"

const ProjectHighlights = () => {
  const [open, setOpen] = React.useState(false)

  function openProject() {
    setOpen(open)
  }

  return (
    <div 
      id="projectHighlights" 
      className='w-full w-max-[1920px] mx-auto px-8 md:px-16 lg:px-24 xl:px-28 2xl:px-32 2xl:mb-20 flex flex-col items-center'>
        <div className='w-full h-auto gap-20 flex flex-col justify-between 2xl:justify-center border-black '>
          {highlightedProjects.map((project, index) => (
            <div 
              key={project.key} 
              className='flex flex-col xl:flex-row gap-10 xl:gap-20 py-24 items-center justify-center'>
              
              {/*Project Details*/}
              <div className='w-full px-8 mb-6 xl:mb-0 xl:px-0 xl:w-1/3'>
                <div className='flex justify-between'>
                <p className='italic'>{project.key}/{highlightedProjects.length}</p>
                <FaLock />
              </div>
              <div className='flex flex-col gap-6 border-slate-500 border-y-2 py-12'>
                <div className='w-full flex justify-between pb-4 text-lg'>
                  <p>{project.year}</p>
                  <p>{project.industry}</p>
                </div>
                <div>
                  <h4 className='text-6xl'>{project.title}</h4>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {project.jobTags.map((tag, i) => {
                      return <div 
                      key={`${project.key}-${tag}-${i}`} className='min-w-24 p-2 px-4 rounded-lg border-2 border-black dark:text-black' style={{backgroundColor: `#${project.projectColor}`}}>{tag}</div>
                    })}
                </div>
                <div>
                  <p className='text-xl'>{project.description}</p>
                </div>
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      onClick={openProject}
                      className="text-md md:w-2/5 gap-4 font-bold tracking-wide p-6 border-2 border-black button-shadow-xl dark:bg-black dark:text-white dark:border-white dark:button-shadow-none hover:shadow-none hover:translate-y-2 hover:-translate-x-2"
                      >View Project
                    </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full mr-4 md:w-3/5 2xl:h-2/5 py-8 px-6 md:px-10 flex flex-col justify-between gap-6 2xl:gap-0">
                      <DialogHeader>
                        <div className='flex items-center justify-start gap-8'>
                            <DialogTitle><h4 className='text-left text-lg md:text-3xl tracking-wide'>This Project <br/> Is Current Locked</h4></DialogTitle>
                            <FaLock className='hidden md:block w-5 h-5 md:w-6 md:h-6'/>
                        </div>
                        <DialogDescription className='pt-3'>
                            <p className='text-base text-left'>If you have the password to view this case study enter it below. Or, contact me directly for access.</p>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-2">
                          <Label htmlFor="projectPassword" className="text-base md:text-xl font-bold">Password</Label>
                          <Input id="password" type='password' name="password" placeholder="Enter project password" />
                      </div>
                      <div className='flex justify-between'>
                      <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button 
                          type="submit"
                          className="tracking-wide py-3 px-6"
                      >View Project</Button>
                      </div>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
              </div>

              {/*Project Image*/}
              <div className='w-full xl:w-auto flex justify-center'>
                <div className='px-6 xl:px-0'>
                <Image 
                  src={project.image.src}
                  alt={project.image.alt}
                  width={720}
                  height={405}
                  className="border-2 border-black rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
    </div>
  </div>
  )
}

export default ProjectHighlights