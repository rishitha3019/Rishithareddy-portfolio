import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in mb-6">
            Data Analyst & Engineer
            <span className="block text-data-600 dark:text-data-400">Turning Data into Insights</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Experienced data professional with expertise in SQL, Python, and visualization tools.
            Passionate about leveraging data to drive business decisions and optimize processes.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <a href="#projects">
              <Button className="bg-data-600 hover:bg-data-700 dark:bg-data-600 dark:hover:bg-data-700 text-white">View Projects</Button>
            </a>
            <a href="#about">
              <Button variant="outline" className="border-data-600 text-data-600 hover:bg-data-50 dark:border-data-400 dark:text-data-400 dark:hover:bg-data-900/50">
                About Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
