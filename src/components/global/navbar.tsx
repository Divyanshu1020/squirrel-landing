"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  //   const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById("home");

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsHeroVisible(scrollPosition < heroHeight - 40); // 80px buffer
      }

      setIsScrolled(scrollPosition > 10);
    };

    // Initial check in case page loads with scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent border-b border-white/20"
      } ${isHeroVisible ? "text-white" : "text-black"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white secondary-font">
        <div className="flex  items-center justify-between h-20 gap-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            // whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/"
              className={`flex text-xl items-center cursor-pointer ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              The Squirrel
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className={`transition-colors hover:text-primary text-xl ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              href="#features"
              className={`transition-colors hover:text-primary text-xl ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              Features
            </Link>
            <Link
              href="#services"
              className={`transition-colors hover:text-primary text-xl ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              Services
            </Link>
            <Link
              href="#our-work"
              className={`transition-colors hover:text-primary text-xl ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              Our Work
            </Link>
            <Link
              href="#contact"
              className={`transition-colors hover:text-primary text-xl ${
                isHeroVisible ? "text-white" : "text-black"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4 ">
            <div className="flex items-center space-x-4">
              <Link
                href="/sign-in"
                className={`transition-colors hover:text-primary text-lg ${
                  isHeroVisible ? "text-white" : "text-black"
                }`}
              >
                Sign In
              </Link>
              <Button
                className={`bg-transparent border px-6 text-lg ${
                  isHeroVisible
                    ? "text-white border-white"
                    : "text-black border-black"
                } rounded-full hover:bg-white hover:text-primary`}
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button with Sheet */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Menu
                  className={`w-6 h-6 ${
                    isHeroVisible ? "text-white" : "text-black"
                  }`}
                />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] backdrop-blur-md  p-0"
              >
                <SheetHeader className="p-6 pb-2 text-left">
                  <SheetTitle className="text-2xl text-white  font-bold">
                    The Squirrel
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 p-6 pt-2">
                  <SheetClose asChild>
                    <a
                      href="#home"
                      className="text-white text-center  hover:text-primary transition-colors py-2 text-xl  font-medium"
                    >
                      Home
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#features"
                      className="text-white text-center text-xl hover:text-primary transition-colors py-2 font-medium"
                    >
                      Features
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#services"
                      className="text-white text-center text-xl hover:text-primary transition-colors py-2 font-medium"
                    >
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#our-work"
                      className="text-white text-center text-xl hover:text-primary transition-colors py-2 font-medium"
                    >
                      Our Work
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="text-white text-center text-xl hover:text-primary transition-colors py-2 font-medium"
                    >
                      Contact
                    </Link>
                  </SheetClose>

                  <div className="border-t border-border pt-8 mt-4">
                    <div className="flex flex-col space-y-4"></div>

                    <div className="flex flex-col space-y-3 mb-8">
                      <Button
                        variant="outline"
                        className="w-full bg-transparent rounded-full text-white border-white border-2"
                      >
                        Sign In
                      </Button>
                      <Button className="w-full rounded-full bg-white text-primary ">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
