"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import {  Menu } from "lucide-react";
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
      const heroSection = document.getElementById('hero-section');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsHeroVisible(scrollPosition < heroHeight - 80); // 80px buffer
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
      } ${isHeroVisible ? 'text-white' : 'text-black'}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex  items-center justify-between h-16 gap-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            // whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className={`flex items-center cursor-pointer ${isHeroVisible ? 'text-white' : 'text-black'}`}>
              The Squirrel
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}
            >
              Home
            </Link>
            <Link
              href="#how-it-works"
              className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}
            >
              Products
            </Link>
            <Link
              href="#tech-stack"
              className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}
            >
              Services
            </Link>
            <Link
              href="#tech-stack"
              className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}
            >
              Our Work
            </Link>
            <Link
              href="#tech-stack"
              className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}
            >
              Contact
            </Link>
        
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4 ">
            <div className="flex items-center space-x-4">
             
              <Link href="/sign-in" className={`transition-colors hover:text-primary ${isHeroVisible ? 'text-white' : 'text-black'}`}>Sign In</Link>
              <Button className={`bg-transparent border px-6 ${isHeroVisible ? 'text-white border-white' : 'text-black border-black'} rounded-full`} >Sign Up</Button> 
            </div>
          </div>



          {/* Mobile menu button with Sheet */}
          <div className="md:hidden ml-auto">
          
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="default" className={`bg-transparent hover:bg-transparent px-6 ${isHeroVisible ? 'text-white' : 'text-black'}`} size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="p-6 pb-2 text-left">
                  <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 p-6 pt-2">
                  <SheetClose asChild>
                    <Link
                      href="#features"
                      className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#how-it-works"
                      className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                    >
                      Products
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#tech-stack"
                      className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                    >
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#tech-stack"
                      className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                    >
                      Our Work
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#tech-stack"
                      className="text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                  
                    <div className="border-t border-border pt-4 mt-4">
                      
                        <div className="flex flex-col space-y-4">
                        
                          


                        </div>
                      
                        <div className="flex flex-col space-y-3">
                          <Button variant="outline" className="w-full bg-muted">
                            Sign In
                          </Button>
                          <Button className="w-full ">
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
