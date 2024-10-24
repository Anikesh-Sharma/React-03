import React, { createContext, useState } from 'react';

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    defaultReminderTime: 5,
    notificationsEnabled: true,
  });

  const updatePreferences = (newPreferences) => {
    setPreferences({ ...preferences, ...newPreferences });
  };

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};
