import React from "react";
import Navbar from "../component/Navbar";
import Hero2 from "../component/Hero2";
import Footer from "../component/Footer";
import PricingCard from "../component/PricingCard";
import Work from "../component/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my most recent work" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
