import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function HeaderComponent({ children }) {
  const { isScrolled } = useHeaderContext();

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-500"
            style={{
              backgroundColor: isScrolled ? "rgba(255,255,255, 0.85)" : "transparent"
            }}>
      {children}
    </header>);
}