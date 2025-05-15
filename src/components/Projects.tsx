
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode, Database, ChartBar, FileText, Laptop, CreditCard } from "lucide-react";

interface Project {
  title: string;
  description: string[];
  icon: React.ElementType;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Credit Card Fraud Detection",
    description: [
      "Engineered ETL pipelines using AWS Glue, Spark, and Redshift to process 1M+ transactions.",
      "Handled class imbalance with SMOTE, trained XGBoost & Random Forest, achieving 96% ROC-AUC.",
      "Designed Power BI dashboards for real-time fraud insights and model performance tracking.",
      "Deployed model via SageMaker for sub-2s real-time scoring."
    ],
    icon: CreditCard,
    tags: ["Python", "SQL", "AWS", "Spark", "Power BI", "SageMaker", "scikit-learn"]
  },
  {
    title: "Investigating Resource Allocation Efficiency in Cloud Systems",
    description: [
      "Built ML-based cloud resource prediction models integrated with ETL pipelines for optimized allocation.",
      "Analyzed resource allocation methods to minimize energy consumption and operational costs.",
      "Reviewed existing research on IoT offloading, decentralized cloud resource allocation, and energy-efficient cloud architectures."
    ],
    icon: Laptop,
    tags: ["Machine Learning", "ETL", "Cloud Architecture", "Resource Optimization"]
  },
  {
    title: "Pizzeria Sales Analysis",
    description: [
      "Designed and optimized SQL queries to analyze sales trends, customer preferences, and revenue patterns.",
      "Developed interactive Power BI dashboards visualizing peak sales periods, top-selling items, and customer demographics.",
      "Implemented data cleaning and transformation using Excel and SQL."
    ],
    icon: ChartBar,
    tags: ["SQL", "Power BI", "Data Visualization", "Sales Analysis"]
  },
  {
    title: "Search Engine Marketing (SEM) Performance Analysis",
    description: [
      "Analyzed Google Ads and Bing Ads campaign data to identify high-performing keywords and optimize bid strategies.",
      "Developed dashboards to track CTR, CPC, and conversion rates, leading to a 15% increase in ad conversions.",
      "Conducted A/B testing on ad creatives and landing pages, reducing CPC by 10%."
    ],
    icon: FileText,
    tags: ["Marketing Analytics", "A/B Testing", "Dashboard Development"]
  },
  {
    title: "Drowsiness Detection using Machine Learning",
    description: [
      "Engineered a driver drowsiness detection system using convolutional neural networks (CNNs) to detect fatigue in real time.",
      "Led a team to train and deploy the model, achieving high accuracy in recognizing drowsy behavior.",
      "Implemented real-time alert mechanisms to notify drivers when signs of drowsiness were detected."
    ],
    icon: FileCode,
    tags: ["CNN", "Machine Learning", "Real-time Detection", "Computer Vision"]
  },
  {
    title: "Predicting Hospital Admissions from Emergency Department Data",
    description: [
      "Developed a Java application for data mining to predict hospital admissions from ED visits, processing over 500,000 complex healthcare records using Apache Spark.",
      "Designed robust SQL and MySQL queries for ETL, optimizing database performance and ensuring seamless data flow.",
      "Built scalable data pipelines and automated preprocessing workflows using Docker containers.",
      "Improved model execution time by 30% through Spark SQL optimization and Java multithreading."
    ],
    icon: Database,
    tags: ["Apache Spark", "Healthcare Analytics", "ETL", "Java", "Docker"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-data-700 dark:text-data-400">{project.title}</CardTitle>
                  <project.icon size={20} className="text-data-600 dark:text-data-400 mt-1" />
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-200">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-data-50 dark:bg-data-900/50 text-data-700 dark:text-data-400 hover:bg-data-100 dark:hover:bg-data-900/70">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
