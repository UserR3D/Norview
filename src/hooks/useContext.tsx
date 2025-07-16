"use client";
import React from "react";

type ContextProviderType = {
  username: string | undefined;
  role: string | undefined;
  signIn(user: string, access: string): Promise<void>;
};

const AuthContext = React.createContext<ContextProviderType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = React.useState<string>();
  const [role, setRole] = React.useState<string>();
  async function signIn(user: string, access: string) {
    const request = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user, password: access }),
      credentials: "include",
    });
    const response = await request.json();
    setUsername(response.email);
    setRole(response.role);
  }

  return (
    <AuthContext.Provider value={{ username, role, signIn }}>
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
