import AIProductPhotographyPage from "@/components/product/AI-product-photography-page";
import { Metadata } from "next";
import React from "react";


export const metadata : Metadata = {
  title: "AI Product Photography",
  description: "AI Product Photography",
};

function AIProductPhotography() {
  return (
    <AIProductPhotographyPage />
  );
}

export default AIProductPhotography;


    // <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background">
    //   <div className="flex flex-col md:flex-row items-center gap-12">
    //     {/* Left: Logo or Product Image */}
    //     <div className="w-full md:w-fit flex justify-center">
    //       <div className="relative w-full h-auto">
    //         <Image
    //           src="/images/AI-product-photography.jpg"
    //           alt="AI Product Photography"
    //           width={474}
    //           height={795}
    //           className="rounded-2xl shadow-lg w-full h-auto object-cover"
    //           quality={100}
    //         />
    //       </div>
    //     </div>

    //     {/* Right: Text Content */}
    //     <div className="w-full  text-center md:text-left">
    //       <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 multi-line-gradient font-poppins mx-auto">
    //         AI Product <br /> Photography
    //       </h2>
    //       <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium mx-auto">
    //         We create stunning AI-generated videos and images that showcase your
    //         products like never before. Perfect for ads, ecommerce, and social
    //         media campaigns — without the cost of traditional photography.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="m-20 w-full">
    //     <div className=" mb-12">
    //       <h2 className="w-full text-3xl sm:text-5xl md:text-6xl mx-auto font-bold  mb-4 md:mb-8 multi-line-gradient primary-font">
    //         Gallery
    //       </h2>
    //       <p className=" md:text-lg text-base mb-20 secondary-font"></p>
    //     </div>
    //   </div>
    // </section>