import React from "react";

import Navbar from "../component/Navbar";
import Hero2 from "../component/Hero2";
import Footer from "../component/Footer";
import AboutContant from "../component/AboutContant";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT" text="I am a friendly Front-End Developer" />
      <AboutContant />
      <Footer />
    </div>
  );
};

export default About;
