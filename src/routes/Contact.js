import React from "react";
import Navbar from "../component/Navbar";
import Hero2 from "../component/Hero2";
import Footer from "../component/Footer";
import Form from "../component/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
