"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Pause, Star } from "lucide-react";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    quote:
      "Quick solutions coupled with extraordinary performance—a recommendation that's unequivocal.",
    name: "Musa Delimuza",
    location: "Milan, Italy",
    rating: 3,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "Highly recommend this reliable SaaS provider for seamless workflow optimization.",
    name: "MD Rashed Kabir",
    location: "California, USA",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Outstanding service quality and exceptional customer support that exceeds expectations every time.",
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
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
                  <Card className="bg-white p-0 border-0 shadow-none h-full rounded-4xl">
                    <CardContent className="p-8 md:p-10 flex flex-col h-full">
                      {/* Avatar with Pause Icon */}
                      <div className="relative mb-8">
                        <div className="size-12 primary-gradient rounded-full flex items-center justify-center">
                          <Pause className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl font-semibold md:text-xl text-gray-800 italic mb-8 leading-relaxed secondary-font">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      {/* Name and Location */}
                      <div className="flex justify-between mt-auto">
                        <div className="mb-4">
                          <h4 className="font-semibold text-black text-lg secondary-font">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm secondary-font">
                            {testimonial.location}
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