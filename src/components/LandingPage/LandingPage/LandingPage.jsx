import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import NotYourAverageRealtor from "./NotYourAverageRealtor";
import AboutUs from "./AboutUs";
import OurProjects from "./OurProjects";
import HappyClients from "./HappyClients";
import ListingSection from "./ListingSection";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <NotYourAverageRealtor />
      <WhyChooseUs />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <ListingSection />
      <Footer />
    </div>
  );
}
