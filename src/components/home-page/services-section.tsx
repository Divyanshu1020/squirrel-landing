import { Boxes, Workflow, Briefcase } from "lucide-react";
import React from "react";
import Card from "../global/card";

function ServicesSection() {
  const features = [
    {
      icon: Boxes,
      title: "Website Development",
      description: "Website Development for small businesses.",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description:
        "AI Automation for small businesses.",
    },
    {
      icon: Briefcase,
      title: "Building Product Prototype",
      description:
        "Building Product Prototype for small businesses.",
    },
    
  ];
  return (
    <div id="services" className=" bg-white  py-28">
      <h2 className="w-full md:text-6xl text-5xl sm:text-5xl mx-auto font-bold text-center mb-4 md:mb-8 multi-line-gradient primary-font">
        Our Services
      </h2>
      <p className="text-center md:text-lg text-base mb-20 secondary-font">
        Our founders Dustin Moskovitz and Justin Rosenstein met while leading
        Engineering.
        <br />
        Tortor porttitor tortor vitae commodo et.
      </p>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  grid-cols-1 sm:grid-cols-2 justify-around lg:grid-cols-3 w-fit mx-auto gap-6 ">
          {features.map((feature, index) => (
            <Card feature={feature} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
