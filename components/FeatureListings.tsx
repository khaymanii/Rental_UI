import React from "react";

interface FeatureButtonProps {
  label: string;
}

// Reusable Button component
const FeatureButton: React.FC<FeatureButtonProps> = ({ label }) => (
  <div className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex items-center justify-center">
    {label}
  </div>
);

function FeatureListings() {
  // Array of button labels
  const buttons = [
    "All Items (512)",
    "Vans & Buses",
    "Vehicles",
    "Meeting Spaces",
    "Cars & SUVs",
    "Sports Venues",
    "Lorries & Trucks",
  ];

  return (
    <div className="mx-auto max-w-7xl my-10 px-4">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-center">
        Feature Listings
      </h1>
      <div className="flex flex-wrap items-center justify-between mt-4 cursor-pointer">
        {buttons.map((label, index) => (
          <FeatureButton key={index} label={label} />
        ))}
      </div>
    </div>
  );
}

export default FeatureListings;
