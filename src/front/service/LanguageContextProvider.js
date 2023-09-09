import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const defaultValue = 'EN';
  const [language, setLanguage] = useState(localStorage.getItem('language') ?? defaultValue);

  const setNewLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setNewLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser utilizado dentro de un LanguageContextProvider');
  }
  return context;
}
