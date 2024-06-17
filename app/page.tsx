/* eslint-disable react/no-children-prop */
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrowseCategories from "@/components/BrowseCategories";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="">
      <Navbar />
      <Hero />
      <BrowseCategories />
    </div>
  );
}
