import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <HeaderContext.Provider value={
      {
        selectedNavItem,
        setSelectedNavItem,
        isDrawerOpen,
        setIsDrawerOpen,
        isScrolled,
        setIsScrolled
      }}>
      {children}
    </HeaderContext.Provider>);
}

function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === undefined) throw new Error("HeaderContext was used outside of HeaderProvider");
  return context;
}

export { HeaderProvider, useHeaderContext };
