"use client";

import InfiniteCarousel from '../ui/InfiniteCarousel';
import carouselProjects from '../../data/carouselProjects'

import React from 'react'

const ProjectCarousel = () => {
  return (
    <section id="projectCarousel" className="space-y-6 py-6">
      <InfiniteCarousel 
        images={carouselProjects} 
        speed={60}
      />
    </section>
  )
}

export default ProjectCarousel