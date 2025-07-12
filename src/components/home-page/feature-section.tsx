import { Globe, Mic, Type, AudioWaveformIcon as Waveform } from "lucide-react";
import Card from "../global/card";

export default function FeatureSection() {
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
    <div id="features" className="  bg-[#F6F6F6]  py-28">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 justify-around items-start gap-16 lg:gap-0">
          {/* Left side - Main headline */}
          <div className="space-y-4 font-semibold text-2xl">
            <h1 className=" font-semibold leading-tight font-poppins">
              <span className="multi-line-gradient block text-center sm:text-start  md:text-6xl text-4xl sm:text-5xl">
                Generative voice
                <br />
                AI platform
                <br />
                ensuring scale,
                <br />
                security.
              </span>
            </h1>
          </div>

          {/* Right side - Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-around gap-6 lg:gap-2 ">
            {features.map((feature, index) => (
              <Card feature={feature} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
