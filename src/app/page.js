import HomeComponent from "./components/HomeComponent/HomeComponent";
import Portfolio from "@/app/components/Portfolio/Portfolio";
import AboutMe from "@/app/components/AboutMe/AboutMe";
import ContactMe from "@/app/components/ContactMe/ContactMe";

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Portfolio />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
