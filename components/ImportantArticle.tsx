import React from "react";
import Image from "next/image";
import Article1 from "@/public/article1.jpg";
import Article2 from "@/public/article2.jpg";

function ImportantArticle() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Important Articles
      </h1>
      <div className="flex items-start justify-between">
        <div className="w-5/6 rounded-lg">
          <Image
            src={Article1}
            alt="article1 image"
            width={700}
            height={700}
            objectFit="cover"
            layout="responsive"
            className="pb-4"
          />
          <p className="text-red-500 font-semibold pb-2">February 4, 2023</p>
          <h1 className="font-bold text-2xl pb-4">
            Top Tip for Finding the Perfect Rental
          </h1>
          <p className="text-gray-500 font-light text-lg">
            Discover expert advice on how to find the ideal rental property that
            meets your needs and budget.
          </p>
        </div>

        <div className="flex ml-6">
          <Image
            src={Article2}
            alt="article2 image"
            width={200}
            height={10}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="mx-4">
            <p className="text-red-500 font-semibold">May 7, 2023</p>
            <h1 className="font-bold text-2xl pb-2">
              Car Rental Hacks for a Smooth Journey
            </h1>
            <p className="text-gray-500 font-light text-lg">
              Discover expert advice on how to find the ideal rental property
              that meets your needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantArticle;
