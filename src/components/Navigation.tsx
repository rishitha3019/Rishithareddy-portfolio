
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" }
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`${
            activeSection === item.id 
              ? "text-data-600 dark:text-data-400" 
              : "text-gray-600 dark:text-gray-300 hover:text-data-600 dark:hover:text-data-400"
          }`}
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Button 
          variant="ghost" 
          className="font-semibold text-data-600 dark:text-data-400 p-0"
          onClick={() => scrollToSection("home")}
        >
          RK
        </Button>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mr-4">
            <NavLinks />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden ml-4">
              <Button variant="ghost" size="icon">
                <Menu className="text-gray-600 dark:text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[240px] sm:w-[300px] flex flex-col">
              <div className="flex flex-col space-y-4 mt-12">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
