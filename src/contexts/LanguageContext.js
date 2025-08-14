"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // Default to English

  useEffect(() => {
    // Auto-detect language based on browser locale and location
    const detectLanguage = async () => {
      // Check browser locale first
      const browserLocale = navigator.language || navigator.userLanguage;
      const isIcelandicLocale =
        browserLocale.startsWith("is") || browserLocale.startsWith("is-IS");

      if (isIcelandicLocale) {
        setLanguage("");
        return;
      }

      // If not Icelandic locale, try to detect location
      try {
        // Use a free IP geolocation service
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country_code === "IS") {
          setLanguage("is");
        } else {
          setLanguage("en");
        }
      } catch (error) {
        // If geolocation fails, fall back to English
        console.log("Could not detect location, defaulting to English");
        setLanguage("en");
      }
    };

    detectLanguage();
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "is" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
