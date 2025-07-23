import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function CallToSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-28">
      <div className="p-[5px] rounded-3xl primary-gradient">
        <div className="bg-gray-50 rounded-[19px] p-8 md:p-16 text-center">
          <h3 className="text-[1.8rem] md:text-5xl font-semibold primary-font text-gray-900 mb-4">
            Want to Chat? Feel free to <br className="md:block hidden" /> Contact our Team.
          </h3>
          <p className="text-gray-600 md:text-lg text-base mb-8 secondary-font">
            If you have anything in mind just contact us with our expert.
          </p>
          <div className="p-[2px] rounded-full primary-gradient inline-block">
            <Button
              variant="outline"
              size="lg"
              className=" hover:bg-primary-gradient cursor-pointer  px-8 py-6 rounded-full text-lg font-medium  border-0 hover-primary-gradient secondary-font hover:text-white bg-white focus:text-white focus:bg-primary-gradient transition-all duration-400"
            >
              <Link href='#contact' >Let&apos;s Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToSection;
