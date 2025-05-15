import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center items-start">
            <div className="rounded-full overflow-hidden border-4 border-data-500 dark:border-data-400 shadow-lg h-60 w-60 md:h-72 md:w-72">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <img 
                  src="/lovable-uploads/1d7d53e4-8c52-4dd9-b5bd-d15ae1da7d4b.png" 
                  alt="Profile" 
                  className="object-cover h-full w-full" 
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* About Me Text */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Hello, I'm Rajat Kumar</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                I'm a passionate Data Analyst & Engineer with a strong foundation in turning complex data into actionable insights.
                Currently pursuing my Master's in Information Technology at the University of Cincinnati,
                I specialize in data analytics, machine learning, and building ETL pipelines.
              </p>
              <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                With expertise in SQL, Python, and various cloud platforms, I enjoy solving complex data problems
                and implementing data-driven solutions that drive business decisions.
                My goal is to bridge the gap between data and decision-making through effective visualization and analysis.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-data-100 text-data-800 dark:bg-data-900 dark:text-data-200 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-data-100 text-data-800 dark:bg-data-900 dark:text-data-200 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-data-100 text-data-800 dark:bg-data-900 dark:text-data-200 rounded-full text-sm">Data Visualization</span>
                <span className="px-3 py-1 bg-data-100 text-data-800 dark:bg-data-900 dark:text-data-200 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-data-100 text-data-800 dark:bg-data-900 dark:text-data-200 rounded-full text-sm">Azure</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2 text-data-700 dark:text-data-400">Education</h3>
              <p className="font-medium text-gray-800 dark:text-gray-100">University of Cincinnati</p>
              <p className="text-gray-700 dark:text-gray-200">Master of Science in Information Technology</p>
              <p className="text-data-600 dark:text-data-400">CGPA: 3.8</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected May 2025</p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2 text-data-700 dark:text-data-400">Technical Expertise</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                <li>Data Analytics & Visualization</li>
                <li>Machine Learning Modeling</li>
                <li>ETL Pipeline Development</li>
                <li>Cloud Infrastructure (AWS, Azure)</li>
                <li>SQL Database Management</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2 text-data-700 dark:text-data-400">Certifications</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                <li>AWS Certified Solutions Architect – Associate</li>
                <li>Microsoft Certified: Azure Administrator Associate</li>
                <li>Oracle Cloud Infrastructure 2024 Certified Foundations Associate</li>
                <li>AWS Machine Learning</li>
                <li>Agile Methodology Job Simulation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
