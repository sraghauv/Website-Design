import React from "react";
import { Link } from "react-router-dom";

const SponsorsWidget = () => {
  return (
    <div className="bg-black w-full py-8 flex flex-col items-center text-white">
      <h2 className="text-3xl text-primary font-bold mb-4">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-16 mt-4 mb-4">
        {/* Replace these divs with sponsor images */}

        <Link to="https://santacruzlab.org/" className="h-32 w-64 ">
          <img
            src="src/assets/scl.png"
            alt="Santa Cruz Lab"
            className="h-full w-full object-contain"
          />
        </Link>

        <Link to="https://cockrell.utexas.edu/" className="w-1/4 mt-10">
          <img
            src="src/assets/cse.svg"
            alt="Crockell School of Engineering"
            className="w-full object-contain"
          />
        </Link>

        <Link to="https://neurotechx.com/" className="w-1/6 mt-10">
          <img
            src="src/assets/ntx.png"
            alt="NeuroTechX"
            className="w-full object-contain"
          />
        </Link>

        <Link
          to="https://inventionworks.engr.utexas.edu/about"
          className="w-1/12 mt-10"
        >
          <img
            src="src/assets/tiw.svg"
            alt="Texas InventionWorks"
            className="w-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default SponsorsWidget;
