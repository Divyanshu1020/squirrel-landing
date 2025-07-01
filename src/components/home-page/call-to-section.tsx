import React from "react";
import { Button } from "../ui/button";

function CallToSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
      <div className="p-[5px] rounded-3xl primary-gradient">
        <div className="bg-gray-50 rounded-[19px] p-8 md:p-16 text-center">
          <h3 className="text-3xl md:text-5xl font-semibold primary-font text-gray-900 mb-4">
            Want to Chat? Feel free to <br /> Contact our Team.
          </h3>
          <p className="text-gray-600 text-lg mb-8 secondary-font">
            If you have anything in mind just contact us with our expert.
          </p>
          <div className="p-[2px] rounded-full primary-gradient inline-block">
            <Button
              variant="outline"
              size="lg"
              className=" hover:bg-primary-gradient  px-8 py-6 rounded-full text-lg font-medium bg-gray-50"
            >
              Let&apos;s Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToSection;
