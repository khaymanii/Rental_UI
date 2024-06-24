import React from "react";
import Image from "next/image";
import Travel1 from "@/public/Travel1.jpg";
import Travel2 from "@/public/Travel2.jpg";
import Travel3 from "@/public/Travel3.jpg";
import Travel4 from "@/public/Travel4.jpg";

function FeatureLocations() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-8">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Featured Locations
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
        <div className="relative w-[400px] h-[300px] sm:h-[619px]">
          <Image
            src={Travel1}
            alt="Travel1 photo"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-xl"
          />
        </div>

        <div className="flex-col">
          <div className="relative w-[400px] h-[300px] sm:mb-5 mb-0 ">
            <Image
              src={Travel2}
              alt="Travel1 photo"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-xl"
            />
          </div>
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={Travel3}
              alt="Travel1 photo"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="relative w-[400px] h-[300px] sm:h-[619px]">
          <Image
            src={Travel4}
            alt="Travel6 photo"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureLocations;
