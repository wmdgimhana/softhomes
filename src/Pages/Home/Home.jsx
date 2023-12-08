import React from "react";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Navbar from "../../Components/Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import ProductGallery from "./ProductGallery/ProductGallery";

import Footer from "../../Components/Footer/Footer";
import ImageGallery from "../../Components/Image Gallery/ImageGallery";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <Navbar />
      <Slider />
      <Welcome />
      <ProductGallery />
      <ImageGallery />
      <Footer />
    </motion.div>
  );
};

export default Home;
