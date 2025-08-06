import { Boxes, Briefcase, Workflow } from "lucide-react";
import React from "react";
import Card from "../global/card";

function ServicesSection() {
  const features = [
    {
      icon: Boxes,
      title: "Website Development",
      description: "Website Development for businesses.",
      href: "/service/website-development",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description: "AI Automation for businesses.",
      href: "/service/AI-automation",
    },
    {
      icon: Briefcase,
      title: "Building Product Prototype",
      description: "Building Product Prototype for businesses.",
      href: "/service/building-product-prototype",
    },
  ];
  return (
    <div id="services" className=" bg-white  py-28">
      <h2 className="w-full md:text-6xl text-5xl sm:text-5xl mx-auto font-bold text-center mb-4 md:mb-8 multi-line-gradient primary-font">
        Our Services
      </h2>
      <p className="text-center md:text-lg text-base mb-20 secondary-font">
        We help businesses thrive by building modern websites, automating
        workflows with AI, and rapidly developing product prototypes.
        <br />
        Our goal is to turn your ideas into real, scalable solutions.
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
