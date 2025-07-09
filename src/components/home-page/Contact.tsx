"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="w-full lg:max-w-7xl mx-auto py-16     bg-background"
    >
      <motion.div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-bold multi-line-gradient primary-font mb-8">
          Get in Touch
        </h2>
        <p className="text-center md:text-lg text-base mb-20 secondary-font">
          We&apos;d love to hear from you. Fill out the form below and <br className="md:block hidden" /> we&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className=" mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row   overflow-hidden  "
        >
          <motion.div className="w-full  md:p-10">
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
