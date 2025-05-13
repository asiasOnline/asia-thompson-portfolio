import InfiniteCarousel from './ui/InfiniteCarousel';

const projectImagesTop = [
    { src: "/project-assets/bee-tea-project-cover.png", 
      alt: "reiki healing website project cover",
      square: true},
    
      { src: "/project-assets/holistic-hands-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},
    
      { src: "/project-assets/dave-dave-project-cover.png", 
      alt: "reiki healing website project cover",
      square: true},
];

const projectImagesBottom = [
    { src: "/project-assets/warm-wood-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},

      { src: "/project-assets/sweet-pea-project-cover.png", 
      alt: "reiki healing website project cover",
      square: true},

      { src: "/project-assets/mm-florist-project-cover.png", 
      alt: "reiki healing website project cover",
      square: false},
];

import React from 'react'

const ProjectCarousel = () => {
  return (
    <section className="space-y-6 py-10">
      <InfiniteCarousel 
        images={projectImagesTop} 
        speed={40}
        gradient={true}
        gradientWidth={60}
        gradientColor='rgb(245 245 245)'
      />
      <InfiniteCarousel 
        images={projectImagesBottom} 
        speed={40}
        reverse={true}
        gradient={true}
        gradientWidth={60}
        gradientColor='rgb(245 245 245)'
      />
    </section>
  )
}

export default ProjectCarousel