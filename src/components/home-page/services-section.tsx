import { Globe, Mic, Type, AudioWaveformIcon as Waveform } from "lucide-react";
import React from "react";
import Card from "../global/card";

function ServicesSection() {
  const features = [
    {
      icon: Mic,
      title: "Rapid AI Voice Cloning",
      description: "Create authentic AI voices with a simple 10-second sample.",
    },
    {
      icon: Waveform,
      title: "Hyper-realistic AI Voices",
      description:
        "With just 10 seconds of audio, generate lifelike AI voices effortlessly.",
    },
    {
      icon: Type,
      title: "Text-to-Speech",
      description:
        "Control AI voice nuances with your own voice input, ideal for films & games.",
    },
    {
      icon: Globe,
      title: "100+ Multilingual Support",
      description:
        "Switch easily between over 100+ languages using the cloned voice for clarity.",
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
