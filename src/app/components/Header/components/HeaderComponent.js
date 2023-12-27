import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function HeaderComponent({ children }) {
  const { isScrolled } = useHeaderContext();

  return (
    <header className={`${isScrolled && "headerShow"} w-full fixed top-0 z-50 transition-all duration-500`}>
      {children}
    </header>);
}