"use client";

import React from "react";
import HomeBackground from "./components/HomeBackground";
import HomeText from "./components/HomeText";
import HomeImage from "./components/HomeImage";
import HomeSkillsSlider from "./components/HomeSkillsSlider";

function HomeComponent() {
  return (
    <HomeBackground>
      <div className="md:container md:m-auto relative">
        <div className="grid grid-cols-12">
          <HomeText />
          <HomeImage />
          <HomeSkillsSlider />
        </div>
      </div>
    </HomeBackground>
  );
}

export default HomeComponent;
