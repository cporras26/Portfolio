"use client";

import { useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Nav from "@/app/components/Header/components/Nav";
import NavItem from "@/app/components/Header/components/NavItem";
import DiagonalDrawer from "@/app/components/Header/components/Drawer/DiagonalDrawer";
import DrawerButton from "@/app/components/Header/components/Drawer/DrawerButton";
import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function Header() {

  const { setIsScrolled, setIsDrawerOpen } = useHeaderContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <DiagonalDrawer />

      <HeaderComponent>

        <DrawerButton onClick={() => setIsDrawerOpen(true)}>
          <img src="/drawer.png" alt="drawer item" className="w-8 h-8 lg:w-10 lg:h-10" />
        </DrawerButton>

        <Nav>
          <NavItem navItem="home">Home</NavItem>

          <NavItem navItem="portfolio">Portfolio</NavItem>

          <NavItem navItem="aboutMe">About Me</NavItem>

          <NavItem navItem="contactMe">Contact Me</NavItem>
        </Nav>

      </HeaderComponent>
    </>
  );
}