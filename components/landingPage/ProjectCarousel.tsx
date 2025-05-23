"use client";

import InfiniteCarousel from '../ui/InfiniteCarousel';
import carouselProjectsTop from '../../data/carouselProjectsTop'
import carouselProjectsBottom from '../../data/carouselProjectsBottom'

import React from 'react'

const ProjectCarousel = () => {
  return (
    <section id="projectCarousel" className="space-y-6 py-10">
      <InfiniteCarousel 
        images={carouselProjectsTop} 
        speed={40}
      />
      <InfiniteCarousel 
        images={carouselProjectsBottom} 
        speed={40}
        reverse={true}
      />
    </section>
  )
}

export default ProjectCarousel