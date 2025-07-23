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
    question: "Do you build custom websites or use templates?",
    answer:
      "We build custom websites tailored to your business needs. Every design is unique, optimized for performance, and built with scalability in mind.",
  },
  {
    id: "02",
    question: "Can you integrate AI chatbots into my existing website?",
    answer:
      "Absolutely. Our AI chatbot can be integrated into your current site to help you engage visitors, answer questions automatically, and increase conversions.",
  },
  {
    id: "03",
    question: "How does AI automation help my business?",
    answer:
      "AI automation can streamline tasks like lead generation, customer support, and appointment scheduling—saving time and increasing efficiency.",
  },
  {
    id: "04",
    question: "What if I only have an idea — can you help build a prototype?",
    answer:
      "Yes, we specialize in turning early-stage ideas into working product prototypes, helping you validate your concept before investing in full development.",
  },
  {
    id: "05",
    question: "Do I need technical knowledge to use your products?",
    answer:
      "Not at all. Our tools like the AI chatbot and Instagram booking system are built to be user-friendly. We also provide full setup and support.",
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
