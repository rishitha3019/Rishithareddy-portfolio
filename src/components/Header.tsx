
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-4 py-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Rishitha Reddy Kalvakolu</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Data Analyst & Engineer</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
          <p className="text-sm text-gray-600 dark:text-gray-300">571-599-4156 | rishithakalvakolu19@gmail.com</p>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://linkedin.com/in/rishitha-reddy-k-0a4407121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-data-600 dark:hover:text-data-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/rishitha3019" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-data-600 dark:hover:text-data-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:rishithakalvakolu19@gmail.com" 
              className="text-gray-600 dark:text-gray-300 hover:text-data-600 dark:hover:text-data-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
