import CloseMenu from "@/app/UI/icons/CloseMenu";

import "./DiagonalDrawer.css";
import DrawerContainer from "@/app/components/Header/components/Drawer/DrawerContainer";
import DrawerButton from "@/app/components/Header/components/Drawer/DrawerButton";
import DrawerNav from "@/app/components/Header/components/Drawer/DrawerNav";
import DrawerNavItem from "@/app/components/Header/components/Drawer/DrawerNavItem";
import DrawerIcons from "@/app/components/Header/components/Drawer/DrawerIcons";
import { useHeaderContext } from "@/app/components/Header/context/HeaderContext";

export default function DiagonalDrawer() {

  const { isDrawerOpen, setIsDrawerOpen, selectedIndex, setSelectedIndex } = useHeaderContext();

  return (
    <DrawerContainer>
      <DrawerButton onClick={() => setIsDrawerOpen(false)}>
        <CloseMenu />
      </DrawerButton>

      <DrawerNav>
        <DrawerNavItem navItem="home">Home</DrawerNavItem>

        <DrawerNavItem navItem="portfolio">Portfolio</DrawerNavItem>

        <DrawerNavItem navItem="aboutMe">About Me</DrawerNavItem>

        <DrawerNavItem navItem="contactMe">Contact Me</DrawerNavItem>
      </DrawerNav>

      <DrawerIcons />

    </DrawerContainer>
  );
}