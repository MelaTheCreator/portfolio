import { createContext, useContext, useState } from "react";
import { contentDE } from "../data/content.de";
import { contentEN } from "../data/content.en";
import { projectsDE } from "../data/projects.de";
import { projectsEN } from "../data/projects.en";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("de");

  const content = language === "de" ? contentDE : contentEN;
  const projects = language === "de" ? projectsDE : projectsEN;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, content, projects }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
