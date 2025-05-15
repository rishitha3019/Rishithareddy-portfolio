
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize theme before rendering to prevent flash of wrong theme
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (
    savedTheme === "dark" || 
    (!savedTheme && prefersDark)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
