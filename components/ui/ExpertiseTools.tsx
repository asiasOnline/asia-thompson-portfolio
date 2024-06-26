"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";

export function ExpertiseTools({ 
  className,
  tools 
}: {
  className?: string,
  tools: any
}) {
  return (
    <div className={className}>
      <AnimatedTooltip items={tools} />
    </div>
  );
}
