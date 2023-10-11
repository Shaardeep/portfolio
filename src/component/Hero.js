import "./Hero.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} />
      </div>
      <div className="content">
        <p>HI, I'm a Freelancer</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
