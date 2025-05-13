"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";


interface InfiniteCarouselProps {
  images: { src: string; alt: string; square: boolean; }[];
  reverse?: boolean;
  speed?: number; 
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: number; 
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  images,
  reverse= false,
  speed= 30,
  gradient= false,
  gradientColor= 'white',
  gradientWidth= 200,
}) => {

  return (
    <Marquee
      speed={speed}
      gradient={gradient}
      gradientColor={gradientColor}
      gradientWidth={gradientWidth}
      direction={reverse ? "right" : "left"}
    >
      <div className="overflow-hidden w-full relative">
          <div className="flex">
            {[...images, ...images].map((image, index) => {
            return <Image 
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.square ? 512 : 720}
              height={512}
              className="mr-6 border-2 border-black rounded-md"
            />
          })}
          </div>
      </div>
    </Marquee>
  );
};

export default InfiniteCarousel;