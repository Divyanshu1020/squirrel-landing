import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const footerLinks = {
  column1: [
    { name: "Products", href: "/#features" },
    { name: "AI Chatbot", href: "https://chat.thesquirrel.tech/" },
    { name: "AI Product Photography", href: "product/AI-product-photography" },
    { name: "Smart Insta", href: "https://smartinsta.thesquirrel.tech/" },
  ],
  column2: [
    { name: "Services", href: "/#services" },
    { name: "Website Development", href: "/service/website-development" },
    { name: "AI Automation", href: "/service/AI-automation" },
    { name: "Product Prototype", href: "/service/building-product-prototype" },
  ],
  column3: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Faq's", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ],
};

function Footer() {
  return (
    <footer className="  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2  lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 md:gap-8 lg:gap-14 mb-12">
          {/* Newsletter Subscription */}
          <div className="flex flex-col col-span-2 md:col-span-1     gap-1  ">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              quality={100}
              height={80}
              width={80}
              className="h-12 w-18 sm:h-18 sm:w-20"
            />
            <span className="text-black text-nowrap font-medium  text-2xl sm:text-5xl">
              The Squirrel
            </span>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              {footerLinks.column1.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={` font-medium secondary-font hover:text-gray-800 transition-colors ${
                      index === 0
                        ? "font-extrabold text-xl text-black"
                        : "font-normal text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <ul className="space-y-3 mb-6">
              {footerLinks.column2.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={` font-medium secondary-font hover:text-gray-800 transition-colors ${
                      index === 0
                        ? "font-extrabold text-xl text-black "
                        : "font-normal text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <ul className="space-y-3 mb-6">
              {footerLinks.column3.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 font-normal secondary-font hover:text-gray-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 md:space-y-4 space-y-2">
            {/* <p className="text-gray-900 text-lg md:text-xl font-medium secondary-font">
              210 Wallent Street, California,
              Main OC, USA
            </p> */}
            <p className="text-gray-900 font-medium text-lg secondary-font">
              (+91) 94496 10077
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/the.squirrel.tech?igsh=MWZseTg2bzRjdGg1eQ=="
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram className=" w-4 h-4" />
              </a>
              <a
                href="https://x.com/thesquirrel_org"
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Twitter className=" w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-squirrel-tech"
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white  hover:bg-primary transition-colors"
              >
                <Linkedin className=" w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* <div className="flex gap-4 text-gray-600">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors secondary-font"
            >
              Demo
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors secondary-font"
            >
              Partners
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors secondary-font"
            >
              Careers
            </a>
          </div> */}
          <p className="text-gray-600 secondary-font">
            ©2025 The Squirrel. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
