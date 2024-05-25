import React from "react";
import Image from "next/image";
import heroBg from "../public/hero.jpg";

function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex items-start pt-28 justify-center h-full">
        <div className="mx-auto max-w-xl text-center p-6 rounded-lg ">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Discover Your{" "}
            <span className="font-extrabold text-green-500">
              Perfect Rental
            </span>
          </h1>
          <p className="mt-4 font-medium sm:text-xl/relaxed text-white">
            Rent cars, Houses, and Items in Just a Few Clicks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
