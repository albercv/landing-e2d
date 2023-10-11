import React, { createContext, useContext, useState } from 'react';

const MessagesContext = createContext();

export function MessagesContextProvider({ children }) {
  const defaultValue = 0;
  const [messageNumber, setMessageNumber] = useState(localStorage.getItem('messagesNumber') ?? defaultValue);

  const setMessagesNumber = (addNumber) => {
    setMessageNumber(addNumber);
    localStorage.setItem('messagesNumber', addNumber);
  };

  return (
    <MessagesContext.Provider value={{ messageNumber, setMessagesNumber }}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessagesCounter() {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useLanguage debe ser utilizado dentro de un MessagesContextProvider');
  }
  return context;
}
