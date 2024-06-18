import React from "react";
import Button from "./Button";

function BrowseCategories() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="mx-auto max-w-7xl my-10">
      <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-center">
        Browse From Top Categories
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-around mt-4 sm:pt-4">
        <Button
          className="w-80 sm:w-auto px-16 mb-4 sm:mb-0 sm:mr-4 py-4"
          onClick={handleClick}
        >
          Holiday Rentals
        </Button>
        <Button
          className="w-80 sm:w-auto px-10 mb-4 sm:mb-0 sm:mr-4 py-4"
          onClick={handleClick}
        >
          Residential spaces
        </Button>
        <Button
          className="w-80 sm:w-auto px-16 mb-4 sm:mb-0 sm:mr-4 py-4"
          onClick={handleClick}
        >
          Event Spaces
        </Button>{" "}
        <Button
          className="w-80 sm:w-auto px-8 mb-4 sm:mb-0 sm:mr-4 py-4"
          onClick={handleClick}
        >
          Commercial Properties
        </Button>
        <Button
          className="w-80 sm:w-auto px-24 mb-4 sm:mb-0 sm:mr-4 py-4"
          onClick={handleClick}
        >
          More
        </Button>
      </div>
    </div>
  );
}

export default BrowseCategories;
