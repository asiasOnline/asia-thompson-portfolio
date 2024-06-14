"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
const tools = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
  },
];

export function ExpertiseTools() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={tools} />
    </div>
  );
}
