import React from "react";

function FeatureListings() {
  return (
    <div className="mx-auto max-w-7xl my-10 px-4">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-center">
        Feature Listings
      </h1>
      <div className="flex flex-wrap items-center justify-between mt-4 cursor-pointer">
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex justify-center
        items-center"
        >
          All Items (512)
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Vans & Buses
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Vehicles
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Meeting Spaces
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Cars & SUVs
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Sports Venues
        </div>
        <div
          className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex
        items-center justify-center"
        >
          Lorries & Trucks
        </div>
      </div>
    </div>
  );
}

export default FeatureListings;
