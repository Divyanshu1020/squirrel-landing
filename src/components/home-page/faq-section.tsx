import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqData = [
  {
    id: "01",
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet.",
  },
  {
    id: "02",
    question: "How do you weigh different criteria in your process?",
    answer:
      "We evaluate multiple factors including performance, reliability, customer support, pricing, and scalability. Each criterion is weighted based on your specific business needs and requirements to ensure the best possible solution.",
  },
  {
    id: "03",
    question: "What can I use to build my website?",
    answer:
      "You can use various tools and platforms such as WordPress, Wix, Squarespace, or custom development with HTML, CSS, and JavaScript. We also offer website building services and can recommend the best solution based on your technical expertise and requirements.",
  },
  {
    id: "04",
    question: "I have running plan, How can I change it?",
    answer:
      "You can easily change your current plan by logging into your account dashboard and selecting the 'Upgrade/Downgrade Plan' option. Alternatively, you can contact our support team who will assist you with the plan change process and ensure a smooth transition.",
  },
  {
    id: "05",
    question: "How can I accept credit cards online?",
    answer:
      "To accept credit cards online, you'll need a payment processor like Stripe, PayPal, or Square. We can help integrate these payment solutions into your website, ensuring secure transactions and compliance with industry standards.",
  },
];

function FAQSection() {
  return (
    <div id="faq" className=" bg-white  py-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold multi-line-gradient primary-font mb-8">
            Questions & Answers
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={faq.id} className="border-none">
                  <AccordionTrigger className="cursor-pointer hover:no-underline py-6 text-left group">
                    <div className="flex items-center gap-6 w-full">
                      <span className="text-xl md:text-2xl primary-font font-bold text-gray-900 md:min-w-[3rem] primary-font">
                        {faq.id}
                      </span>
                      <span className="text-lg md:text-xl secondary-font font-medium text-gray-900 flex-1 secondary-font">
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon Toggle */}
                    <div className="min-w-8 min-h-8 primary-gradient rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold group-data-[state=open]:hidden">
                        +
                      </span>
                      <span className="text-white text-lg font-bold hidden group-data-[state=open]:inline">
                        −
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6">
                    <div className="sm:ml-20 secondary-font text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
