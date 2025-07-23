"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "The chatbot integration from The Squirrel has truly transformed our user experience. It offers instant support and makes navigating our platform seamless.",
    name: "Aniket Thakur",
    role: "Founder",
    company: "Aidcircle.in",
    rating: 5,
    avatar: "/images/company1.png",
  },
  {
    id: 4,
    quote:
      "The chatbot has helped us handle technical queries efficiently and freed up our team's time. The Squirrel has been incredibly responsive and supportive.",
    name: "Cameron Norris",
    role: "Co-founder",
    company: "Social Hardware",
    rating: 5,
    avatar: "/images/company3.png",
  },
  {
    id: 2,
    quote:
      "The Squirrel has been a reliable partner in developing AI-powered chatbots and complex web projects. Their solutions are always innovative and on-point.",
    name: "Shodhan Moolya",
    role: "Founder",
    company: "Torq Designs",
    rating: 5,
    avatar: "/images/company2.png",
  },
  {
    id: 3,
    quote:
      "From design to deployment, The Squirrel's team captured our vision perfectly. Their responsiveness and commitment to quality are unmatched.",
    name: "Cameron Norris",
    role: "Co-founder",
    company: "Social Hardware",
    rating: 5,
    avatar: "/images/company3.png",
  },

  
  {
    id: 5,
    quote:
      "We’ve collaborated on multiple projects with The Squirrel, and they consistently deliver high-quality websites and apps without any hassle.",
    name: "Krish Subramaniam",
    role: "Founder",
    company: "Quark Marketing",
    rating: 5,
    avatar: "/images/company4.png",
  },
];



export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial slide

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full bg-[#F6F6F6] py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="w-full md:text-6xl text-5xl sm:text-5xl mx-auto font-bold text-center mb-4 md:mb-8 multi-line-gradient primary-font">
            Clients Love Us
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            className="w-full"
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="rounded-4xl pl-2 md:pl-4 md:basis-1/2"
                >
                  <Card className="bg-[#f1efef] p-0 border-0 shadow-none h-full rounded-4xl">
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      {/* Avatar with Pause Icon */}
                      <div className="relative  h-20 w-40 flex items-center justify-start   ">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          quality={100}
                          width={80}
                          height={80}
                          className="stroke stroke-black  "
                        />
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl font-semibold md:text-xl text-gray-800 italic mb-8 leading-relaxed secondary-font">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      {/* Name and company */}
                      <div className="flex justify-between mt-auto">
                        <div className="mb-4">
                          <h4 className="font-semibold text-black text-lg secondary-font">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm secondary-font">
                            {testimonial.company}
                          </p>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 cursor-pointer h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-amber-900" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}