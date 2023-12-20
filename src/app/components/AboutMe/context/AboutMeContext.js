import { createContext, useContext, useState } from "react";
import { AboutData } from "@/app/data";

const AboutMeContext = createContext();

function AboutMeProvider({ children }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mappedData, setMappedData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMappedData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const handleNext = () => {
    if (selectedIndex < 5) handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    handleCardClick(AboutData[0], 0);
  };

  const handlePrevious = () => {
    if (selectedIndex !== 0) handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    handleCardClick(AboutData[5], 5);
  };

  return (
    <AboutMeContext.Provider value={
      {
        isFlipped,
        isFaded,
        selectedIndex,
        mappedData,
        handleCardClick,
        handleNext,
        handlePrevious
      }}>
      {children}
    </AboutMeContext.Provider>);
}

function useAboutMeContext() {
  const context = useContext(AboutMeContext);
  if (context === undefined) throw new Error("AboutMeContext was used outside of AboutMeProvider");
  return context;
}

export { AboutMeProvider, useAboutMeContext };
