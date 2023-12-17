"use client";
import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function DrawerContainer({ children }) {
  const { isDrawerOpen } = useHeaderContext();

  return <div className={`diagonal-drawer ${isDrawerOpen ? "open" : ""}`}>
    {children}
  </div>;
}