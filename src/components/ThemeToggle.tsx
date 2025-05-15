
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    // Or if they prefer dark mode in their OS settings
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Initialize state based on saved preference or OS preference
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    
    // Apply the theme - move this inside the effect to avoid the stale state issue
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <div className="flex items-center gap-1.5">
      <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
    </div>
  );
};

export default ThemeToggle;
