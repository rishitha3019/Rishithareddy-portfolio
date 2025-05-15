
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rishitha Reddy Kalvakolu</h3>
            <p className="text-gray-300">Data Analyst & Engineer</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">571-599-4156</p>
            <p className="text-gray-300">rishithakalvakolu19@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/rishitha-reddy-k-0a4407121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-data-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/rishitha3019" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-data-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:rishithakalvakolu19@gmail.com" 
                className="text-white hover:text-data-300 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Rishitha Reddy Kalvakolu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
