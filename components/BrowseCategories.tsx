import React from "react";

function BrowseCategories() {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Browse From Top Categories
      </h1>
      <div className="flex items-center justify-around text-center">
        <div className="px-2 py-2 w-50 bg-white outline-width-1 text-black rounded-full flex items-center justify-around">
          <span className="w-8 h-8 mx-2 bg-red-300 rounded-full items-center justify-center flex">
            2
          </span>
          <p className="mr-4">Holiday Rentals</p>
        </div>
        <div className="px-2 py-2 w-50 bg-white outline text-black rounded-full flex items-center justify-around">
          <span className="w-8 h-8 mx-2 bg-green-300 rounded-full items-center justify-center flex">
            2
          </span>
          <p className="mr-4">Residential Spaces</p>
        </div>{" "}
        <div className="px-2 py-2 w-50 outline bg-white text-black rounded-full flex items-center justify-around">
          <span className="w-8 h-8 mx-2 bg-purple-300 rounded-full items-center justify-center flex">
            2
          </span>
          <p className="mr-4">Event Spaces</p>
        </div>{" "}
        <div className="px-2 py-2 w-50 bg-white outline text-black rounded-full flex items-center justify-around">
          <span className="w-8 h-8 mx-2 bg-blue-300 rounded-full items-center justify-center flex">
            2
          </span>
          <p className="mr-4">Commercial Properties</p>
        </div>
        <div className="px-2 py-2 w-50 bg-white outline text-black rounded-full flex items-center justify-around">
          <span className="w-8 h-8 mx-2 bg-orange-300 rounded-full items-center justify-center flex">
            2
          </span>
          <p className="mr-4">More</p>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
