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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const pathname = usePathname();

  console.log("pathname", pathname);

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

  useEffect(() => {
    if (pathname !== "/") {
      setIsHeroVisible(false);
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md  shadow-lg border-b border-white/20"
          : "bg-transparent border-b border-white/20"
      } ${isHeroVisible ? "text-white" : "text-black bg-white/90"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white secondary-font">
        <div className="flex  items-center justify-between h-20 gap-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            // whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src={"/images/logo.png"}
                quality={100}
                width={48}
                height={40}
                alt="Logo"
                className="h-8 w-10 sm:h-10 sm:w-12"
              />
              <span
                className={` font-semibold text-sm sm:text-xl ${
                  isHeroVisible ? "text-white" : "text-black"
                }`}
              >
                The Squirrel
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className={`hover:text-primary ${
                      isHeroVisible ? "text-white" : "text-black"
                    }`}
                    href="#home"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`hover:text-primary focus:text-primary cursor-pointer ${
                    isHeroVisible ? "text-white" : "text-black"
                  }`}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="https://chat.thesquirrel.tech/">
                          <div className="font-medium">AI Chatbot</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="https://smartinsta.thesquirrel.tech/">
                          <div className="font-medium">
                          Smart Instagram
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/product/AI-product-photography">
                          <div className="font-medium">
                            AI Product Photography
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`hover:text-primary focus:text-primary cursor-pointer ${
                    isHeroVisible ? "text-white" : "text-black"
                  }`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service/website-development">
                          <div className="font-medium">Website Development</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/service/AI-automation">
                          <div className="font-medium">AI Automation</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/service/building-product-prototype">
                          <div className="font-medium">
                            Building Product Prototype
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className={`hover:text-primary ${
                      isHeroVisible ? "text-white" : "text-black"
                    }`}
                    href="/#contact"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <div className="hidden md:flex items-center space-x-8">
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
          </div> */}

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4 ">
            <div className="flex items-center space-x-4">
              {/* <Link
                href="https://dashboard.thesquirrel.tech/login"
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
                onClick={() => {
                  window.open(
                    "https://dashboard.thesquirrel.tech/signup",
                    "_blank"
                  );
                }}
              >
                Sign Up
              </Button> */}
              <Button
                className={`bg-transparent border px-6 text-lg ${
                  isHeroVisible
                    ? "text-white border-white"
                    : "text-black border-black"
                } rounded-full hover:bg-white hover:text-primary`}
              >
                <Link href="/#contact"> Get Started </Link>
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
                  <Collapsible>
                    <CollapsibleTrigger className="text-white w-full text-center  hover:text-primary transition-colors py-2 text-xl cursor-pointer  font-medium">
                      Products
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="grid  gap-4">
                        <li>
                          <SheetClose asChild>
                            <Link href="https://chat.thesquirrel.tech/">
                              <div className="w-full">
                                <div className="text-white  text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                  {" "}
                                  AI Chatbot
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="http://smartinsta.thesquirrel.tech/">
                              <div className="text-white w-full text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                Smart Instagram
                              </div>
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/product/AI-product-photography">
                              <div className="text-white w-full text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                AI Product Protography
                              </div>
                            </Link>
                          </SheetClose>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible>
                    <CollapsibleTrigger className="text-white w-full text-center  hover:text-primary transition-colors py-2 text-xl cursor-pointer  font-medium">
                      Services
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="grid  gap-4">
                        <li>
                          <SheetClose asChild>
                            <Link href="/service/website-development">
                              <div className="w-full">
                                <div className="text-white  text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                  {" "}
                                  Website Development
                                </div>
                              </div>
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/service/AI-automation">
                              <div className="text-white w-full text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                AI Automation
                              </div>
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="/service/building-product-prototype">
                              <div className="text-white w-full text-center  hover:text-primary transition-colors text-base  font-medium text-wrap">
                                Building Product Prototype
                              </div>
                            </Link>
                          </SheetClose>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <SheetClose asChild>
                    <Link
                      href="/#contact"
                      className="text-white text-center text-xl hover:text-primary transition-colors py-2 font-medium"
                    >
                      Contact
                    </Link>
                  </SheetClose>

                  <div className="border-t border-border pt-8 mt-4">
                    <div className="flex flex-col space-y-4"></div>

                    <div className="flex flex-col space-y-3 mb-8">
                      <Button
                        className={`bg-transparent border px-6 text-lg  rounded-full hover:bg-white hover:text-primary`}
                      >
                        <Link href="/#contact"> Get Started </Link>
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
