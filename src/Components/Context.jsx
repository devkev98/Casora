import React, { createContext, useState } from 'react';
// Create a context with a default value (empty object)
export const Context = createContext({});

// Create a context provider component
export const ContextProvider = ({ children }) => {
  // State to manage bookmark data
  const [listingStates, setListingStates] = useState({});

  // Function to toggle bookmark status
  const toggleSave = (listingId) => {
    setListingStates((currentStates) => ({
      ...currentStates,
      [listingId]: !currentStates[listingId],
    }));
    alert(listingId);
  };

  // Context value to be provided
  const contextValue = {
    listingStates,
    toggleSave,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
