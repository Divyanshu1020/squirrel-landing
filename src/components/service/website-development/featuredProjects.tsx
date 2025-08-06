import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Update with your actual project details/images!
const projects = [
  {
    title: "EcoShop E-commerce",
    image: "/images/hero-bg.png",
    client: "EcoShop",
    description: "A scalable, fast e-commerce site with seamless checkout & integrated admin dashboard.",
  },
  {
    title: "BizConsult Landing Page",
    image: "/images/hero-bg.png",
    client: "BizConsult",
    description: "Modern, mobile-first landing page for a consulting agency. Enhanced lead conversions by 30%.",
  },
  {
    title: "EduLearn Web App",
    image: "/images/hero-bg.png",
    client: "EduLearn",
    description: "Interactive LMS platform with custom dashboards, live chat, and progress analytics.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} className="flex flex-col h-full">
            {project.image && (
              <Image
                src={project.image}   
                alt={project.title}             
                width={100}                                  
                height={150}
                className="w-full h-52 object-cover rounded-t"
                loading="lazy"
              />
            )}
            <CardHeader className="flex flex-col gap-1">
              <span className="text-lg font-semibold">{project.title}</span>
              <span className="text-sm text-muted-foreground">Client: {project.client}</span>
            </CardHeader>
            <CardContent className="text-base text-muted-foreground">
              {project.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
