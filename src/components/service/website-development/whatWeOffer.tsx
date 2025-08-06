import { Card, CardHeader, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Custom Website Design",
    description: "Creating unique, responsive, and engaging websites tailored to your brand's needs.",
  },
  {
    title: "E-commerce Sites",
    description: "Developing feature-rich online stores with seamless shopping experiences.",
  },
  {
    title: "Content Management Systems",
    description: "Building and customizing CMS like WordPress for easy content updates.",
  },
  {
    title: "Web App Development",
    description: "Crafting scalable and robust web applications for various business needs.",
  },
  {
    title: "Website Maintenance & Support",
    description: "Providing ongoing support and updates to ensure site performance and security.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background mt-20">
     <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold multi-line-gradient primary-font mb-8">
            What we offer
          </h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
        <div  key={idx} className="p-[3px] rounded-3xl primary-gradient">
          <Card  className="h-full flex flex-col rounded-[21px]">
            <CardHeader className="text-xl font-semibold ">{service.title}</CardHeader>
            <CardContent className="text-base text-muted-foreground">{service.description}</CardContent>
          </Card>
        </div>))}
      </div>
    </section>
  );
}
