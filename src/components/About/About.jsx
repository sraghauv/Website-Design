import React from "react";
import AboutInfo from "./AboutInfo"
import OfficerSection from "./OfficerSection"
import SponsorsWidget from "../SponsorWidget";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <OfficerSection />  
      <SponsorsWidget />
    </div>
  );
};

export default About;
