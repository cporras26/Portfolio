"use client";

import Cards from "@/app/components/AboutMe/AboutMeCards/Cards";
import { AboutMeProvider } from "@/app/components/AboutMe/context/AboutMeContext";
import CardInformation from "@/app/components/AboutMe/AboutMeCards/CardInformation";

export default function TechSkills() {
  return (
    <AboutMeProvider>
      <div
        className="container flex flex-col m-auto justify-center sm:flex-row px-5 md:px-24 gap-6 lg:gap-10">
        <Cards />
        <CardInformation />
      </div>
    </AboutMeProvider>
  );
}