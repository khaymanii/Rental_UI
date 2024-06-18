import React from "react";
import Button from "./Button";

const categories = [
  { name: "Holiday Rentals", padding: "sm:px-16 px-8" },
  { name: "Residential Spaces", padding: "sm:px-10 px-6" },
  { name: "Event Spaces", padding: "sm:px-16 px-8" },
  { name: "Commercial Properties", padding: "sm:px-8 px-4" },
  { name: "More", padding: "sm:px-24 px-12" },
];

function BrowseCategories() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="mx-auto max-w-7xl my-10">
      <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-center">
        Browse From Top Categories
      </h1>
      <div className="flex flex-wrap items-center justify-center sm:justify-around mt-4 sm:pt-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            className={`w-full sm:w-auto ${category.padding} mb-4 sm:mb-0 sm:mr-4 py-2 sm:py-4`}
            onClick={handleClick}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories;
