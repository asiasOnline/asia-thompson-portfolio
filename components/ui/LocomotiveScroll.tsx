"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LocomotiveScrollProps {
  images: { src: string; alt: string; }[];
  speed?: number; 
}

const LocomotiveScroll: React.FC<LocomotiveScrollProps> = ({
  images,
  speed= 30,
}) => {

  return (
    <motion.div className="flex flex-col overflow-scroll gap-6">
        {[...images].map((image, index) => {
        return <Image 
        key={index}
        src={image.src}
        alt={image.alt}
        width={640}
        height={360}
        className="border-2 border-black rounded-md"
        />
    })}
    </motion.div>
  )
}

export default LocomotiveScroll