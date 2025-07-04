import { Facebook, Linkedin, Twitter } from "lucide-react"; 
import React from "react";

const footerLinks = {
  column1: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  column2: [
    { name: "Faq's", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy-policy" },
    { name: "Terms", href: "#terms" },
  ],
};

function Footer() {
  return (
    <footer className="  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2  md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-8 lg:gap-14 mb-12">
          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-3xl md:text-3xl secondary-font font-semibold text-gray-900 mb-6">
              Subscribe to our newsletter
            </h4>
            <div className="flex gap-2 border p-1.5 border-gray-300  rounded-md max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border-none outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="p-2 rounded-md transition-colors flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                <svg
                  className="w-7 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              {footerLinks.column1.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 font-medium secondary-font hover:text-gray-900 transition-colors"
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
              {footerLinks.column2.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 font-medium secondary-font hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 md:space-y-4 space-y-2">
            <p className="text-gray-900 text-lg md:text-xl font-medium secondary-font">
              210 Wallent Street, California,
              Main OC, USA
            </p>
            <p className="text-gray-900 font-medium text-lg secondary-font">
              (+91) 0187 34 377
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Facebook className=" w-4 h-4" />
              </a>
              <a
                href="#"
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Twitter className=" w-4 h-4" />
              </a>
              <a
                href="#"
                className="md:w-9 md:h-9 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white  hover:bg-primary transition-colors"
              >
                <Linkedin className=" w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-gray-600">
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
          </div>
          <p className="text-gray-600 secondary-font">
            ©2024 Retro. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
