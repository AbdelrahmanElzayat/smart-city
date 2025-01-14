import React from "react";
import Hero from "../../components/HomeComponents/Hero/Hero";
import OurServices from "../../components/HomeComponents/OurServices/OurServices";
import AboutVideo from "../../components/HomeComponents/aboutVideo/AboutVideo";
import Operations from "../../components/HomeComponents/Operations/Operations";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <AboutVideo />
      <Operations />
    </div>
  );
};

export default Home;
