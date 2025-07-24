"use client";
import React from "react";

type ContextProviderType = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = React.createContext<ContextProviderType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(true);
  return (
    <AuthContext.Provider value={{ theme, setTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function getSession() {
  const context = React.useContext(AuthContext);
  if (!context) {
    console.log("Context deve  ser usado dentro de um AuthProvider");
  }
  return context;
}
