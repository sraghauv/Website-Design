import React from "react";
import AboutInfo from "./AboutInfo"
import OfficerSection from "./OfficerSection"
import SponsorsWidget from "../SponsorWidget";
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <AboutInfo />
      <OfficerSection />  
      <SponsorsWidget />
    </div>
  );
};

export default About;
