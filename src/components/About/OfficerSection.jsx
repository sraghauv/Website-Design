import React from "react";
import ExecutiveOfficers from "./ExecutiveOfficers"
import LeadershipTeam from "./LeadershipTeam"
import "./OfficerSection.css"

const OfficerSection = () => {
  return (
    <div id="officers">
      <ExecutiveOfficers />
      <LeadershipTeam />
    </div>
  );
};

export default OfficerSection;