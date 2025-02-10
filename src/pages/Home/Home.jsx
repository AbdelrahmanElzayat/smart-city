import React, { useEffect, useLayoutEffect } from "react";
import Hero from "../../components/HomeComponents/Hero/Hero";
import OurServices from "../../components/HomeComponents/OurServices/OurServices";
import AboutVideo from "../../components/HomeComponents/aboutVideo/AboutVideo";
// import Operations from "../../components/HomeComponents/Operations/Operations";
import { motion } from "framer-motion";
const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <Hero />
      <OurServices />
      <AboutVideo />
      {/* <Operations /> */}
    </motion.div>
  );
};

export default Home;
