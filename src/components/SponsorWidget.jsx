import React from "react";

const SponsorsWidget = () => {
  return (
    <div className="bg-black w-full py-8 flex flex-col items-center text-white">
      <h2 className="text-xl font-semibold mb-4">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Replace these divs with sponsor images */}
        <img
          src="/path/to/sponsor1.png"
          alt="Sponsor 1"
          className="h-16 object-contain"
        />
        <img
          src="/path/to/sponsor2.png"
          alt="Sponsor 2"
          className="h-16 object-contain"
        />
        <img
          src="/path/to/sponsor3.png"
          alt="Sponsor 3"
          className="h-16 object-contain"
        />
        {/* Add more sponsor images as needed */}
      </div>
    </div>
  );
};

export default SponsorsWidget;
