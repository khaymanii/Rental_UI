/* eslint-disable react/no-children-prop */
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrowseCategories from "@/components/BrowseCategories";
import FeatureListings from "@/components/FeatureListings";
import Banner from "@/components/Banner";
import FeatureLocation from "@/components/FeatureLocations";
import ImportantArticle from "@/components/ImportantArticle";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowseCategories />
      <FeatureListings />
      <Banner />
      <FeatureLocation />
      <ImportantArticle />
    </div>
  );
}
