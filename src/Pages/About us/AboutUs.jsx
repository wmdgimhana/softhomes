import React from "react";
import Header from "../../Components/Header/Header";
import HeaderImg from "../../Components/Header/HeaderImg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Top from "./Top/Top";
import ImageGallery from "../../Components/Image Gallery/ImageGallery";
import { motion } from "framer-motion";
import AboutHeader from '../../assets/aboutUsHeader.png'
const AboutUs = () => {
  return (
    <motion.div
      className="aboutUs"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <HeaderImg img={AboutHeader} />
      <Top />
      {/* <ImageGallery /> */}
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
