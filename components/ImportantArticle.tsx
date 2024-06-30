import React from "react";
import Image from "next/image";
import Article1 from "@/public/article1.jpg";
import Article2 from "@/public/article2.jpg";
import Article3 from "@/public/article3.jpg";
import Article4 from "@/public/article4.jpg";

function ImportantArticle() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Important Articles
      </h1>
      <div className="flex items-start justify-between">
        <div className="w-1/2 mr-6">
          <Image
            src={Article1}
            alt="article1 image"
            width={700}
            height={700}
            objectFit="cover"
            layout="responsive"
            className="pb-4 rounded-lg"
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
        <div className="w-1/2">
          <div className="flex mb-6">
            {" "}
            <Image
              src={Article2}
              alt="article2 image"
              width={200}
              height={100}
              objectFit="cover"
              className="rounded-lg mr-4"
            />
            <div className="">
              <p className="text-red-500 font-semibold pb-2">May 7, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                {" "}
                Bike Rental Hacks for a Smooth Journey
              </h1>
              <p className="text-gray-500 font-light text-sm tracking-wider">
                Learn insider tips for getting the best deals and making the
                most of your rental bike experience.
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            {" "}
            <Image
              src={Article3}
              alt="article2 image"
              width={200}
              height={100}
              objectFit="cover"
              className="rounded-lg mr-4"
            />
            <div className="">
              <p className="text-red-500 font-semibold pb-2">April 25, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                {" "}
                Managing Your Rental Items
              </h1>
              <p className="text-gray-500 font-light text-sm tracking-wider">
                Get valuable insights on how to effectively manage and maintain
                remeditems.
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            {" "}
            <Image
              src={Article4}
              alt="article4 image"
              width={200}
              height={100}
              objectFit="cover"
              className="rounded-lg mr-4"
            />
            <div className="">
              <p className="text-red-500 font-semibold pb-2">January 2, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                {" "}
                Navigating the Rental Market
              </h1>
              <p className="text-gray-500 font-light text-sm tracking-wider">
                Explore key consideration and useful tips for individuals new to
                the rental market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantArticle;
