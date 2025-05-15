
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["SQL", "Python", "Java", "C", "JavaScript", "Node.js", "React.js", "HTML5"]
  },
  {
    category: "Data & BI",
    skills: ["Power BI", "Tableau", "Matplotlib", "Data Visualization", "Predictive Analytics", "Data Science", "Excel"]
  },
  {
    category: "Data Processing",
    skills: ["Apache Spark", "Snowflake", "Hadoop", "MySQL", "Oracle", "Spark SQL", "ETL Pipelines", "CI/CD"]
  },
  {
    category: "Cloud",
    skills: ["AWS (S3, EC2, Lambda)", "Azure (Databricks)", "Docker"]
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Firebase", "Android SDK", "Agile"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8 text-gray-800 dark:text-white">Technical Skills</h2>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="Programming" className="w-full">
            <ScrollArea className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="h-auto p-1">
                  {skillsData.map((category) => (
                    <TabsTrigger 
                      key={category.category} 
                      value={category.category}
                      className="px-4 py-2 data-[state=active]:text-data-700"
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </ScrollArea>
            
            {skillsData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4 text-data-700 dark:text-data-400">{category.category} Skills</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
