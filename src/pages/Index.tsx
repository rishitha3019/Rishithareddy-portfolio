
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  // Add smooth scrolling functionality
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add event listeners to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });

    // Clean up function
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Header />
      
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
