import { Bot, Camera, MessageCircleMore } from "lucide-react";
import Card from "../global/card";

export default function FeatureSection() {
  const features = [
    {
      icon: MessageCircleMore,
      title: "AI Chatbot for Website",
      description:
        "AI Chatbot for Website that can be used to chat with your website visitors.",
      href: "https://chat.thesquirrel.tech/",
    },
    {
      icon: Bot,
      title: "Smart Insta",
      description:
        "Appointment Booking inside Instagram that can be used to book appointments with your website visitors.",
      href: "https://smartinsta.thesquirrel.tech/",
    },
    {
      icon: Camera,
      title: "AI Product Photography",
      description:
        "AI Product Photography that can be used to create product Ads.",
      href: "/product/AI-product-photography",
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
                Our
                <br />
                Products
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
