"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type UiContextType = {
  menu: string;
  toggleMenu: () => void;
};

const StateContext = createContext<UiContextType | undefined>(undefined);

export const UiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menu, setMenu] = useState<string>("open");

  useEffect(() => {
    const storedMenu = localStorage.getItem("menu");
    if (storedMenu) {
      setMenu(storedMenu);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  const toggleMenu = () => {
    setMenu((prev) => (prev === "open" ? "closed" : "open"));
  };

  return (
    <StateContext.Provider
      value={{
        menu,
        toggleMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useUiStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useUiStateContext must be used within a UiContextProvider");
  }
  return context;
};
