"use client"

import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from "framer-motion"

const HorizontalScrollCarousel = ({children}: {children?: React.ReactNode;}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-47%"]);

  return (
    <div ref={targetRef} className="relative w-full h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel