import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { CheckCircle, Users, Bolt } from 'lucide-react'; // Example icons

const reasons = [
  {
    // icon: <CheckCircle className='w-8 h-8 text-primary' />,
    title: "Expert Team",
    description: "Our developers combine years of experience with the latest tech to deliver high-quality solutions.",
  },
  {
    // icon: <Bolt className='w-8 h-8 text-primary' />,
    title: "Fast & Reliable Delivery",
    description: "We adhere to timelines and ensure your project launches smoothly, every time.",
  },
  {
    // icon: <Users className='w-8 h-8 text-primary' />,
    title: "Client-Centric Approach",
    description: "We work closely with you and value your input throughout the project lifecycle.",
  },
  {
    title: "Cutting-Edge Technologies",
    description: "We leverage the best tools and frameworks to build scalable and future-ready solutions.",
  },
  {
    title: "Transparent Communication",
    description: "You’re always in the loop with regular updates and open channels for feedback.",
  },
  {
    title: "Ongoing Support",
    description: "We’re here for maintenance, updates, and any questions—even after launch.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background mt-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold multi-line-gradient primary-font mb-8">
            Why Choose Us
          </h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
        <div  key={idx} className="p-[3px] rounded-3xl primary-gradient">
          <Card key={idx} className="h-full flex flex-col items-start rounded-[21px]">
            <CardHeader className="flex flex-col gap-2">
              {/* {reason.icon} */}
              <span className="text-xl font-semibold text-nowrap">{reason.title}</span>
            </CardHeader>
            <CardContent className="text-base text-muted-foreground">{reason.description}</CardContent>
          </Card>
        </div>
        ))}
      </div>
    </section>
  );
}
