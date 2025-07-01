import { Card as CardComponent, CardContent } from "@/components/ui/card";
import React from "react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
export default function Card({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  return (
    <CardComponent key={index} className=" shadow-none h-[368px] rounded-4xl p-0 ">
      <CardContent className="h-full p-6">
        <div className="flex flex-col h-full ">
          <div className="flex items-center justify-center p-4 rounded-full primary-gradient size-15">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2 mt-auto">
            <h2 className="text-2xl font-semibold primary-font">
              {feature.title}
            </h2>
            <p className="text-gray-600 secondary-font text-lg secondary-font">
              {feature.description}
            </p>
          </div>
        </div>
      </CardContent>
    </CardComponent>
  );
}
