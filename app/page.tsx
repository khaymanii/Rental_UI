/* eslint-disable react/no-children-prop */
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  );
}
