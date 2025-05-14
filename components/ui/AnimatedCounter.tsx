'use client';

import { KeyframeOptions, animate, useInView, useIsomorphicLayoutEffect } from 'framer-motion'
import React, { useRef } from 'react'; 

type AnimatedCounterProps = {
    startingNumber: number, 
    endingNumber: number,
    animationOptions?: KeyframeOptions
}

const AnimatedCounter = ({startingNumber, endingNumber, animationOptions}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, {once: true});

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if (!element) return;
        if (!inView) return;

        element.textContent = String(startingNumber)

        const controls = animate(startingNumber, endingNumber, {
            duration: 1.5,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = (value.toFixed(0));
            }
        })

        return () => {
            controls.stop()
        }
    }, [ref, inView, startingNumber, endingNumber])

  return (
    <span 
        ref={ref}
    />
  )
}

export default AnimatedCounter