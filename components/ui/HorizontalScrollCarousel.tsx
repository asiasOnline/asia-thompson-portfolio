"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion"

const HorizontalScrollCarousel = ({children}: {children?: React.ReactNode;}) => {
  const targetRef = useRef(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setMobile(window.innerWidth < 1024); 
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["24%", "-80%"]);

  if(isMobile) {
    return (
      <div className="w-full overflow-x-auto px-10 py-8 mb-24">
        <div className="flex gap-4 w-max">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div ref={targetRef} className="relative w-full h-[250vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel