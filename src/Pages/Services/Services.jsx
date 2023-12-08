import React from "react";
import Header from "../../Components/Header/Header";
import HeaderImg from "../../Components/Header/HeaderImg";
import Footer from "../../Components/Footer/Footer";
import Sections from "./Sections/Sections";
import Accessories from "./Accessories/Accessories";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import ServicesHeader from '../../assets/slider3.png'

const Services = () => {
  return (
    <motion.div
      className="services"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <HeaderImg img={ServicesHeader} />

      <Sections />
      {/* <Accessories /> */}
      <Footer />
    </motion.div>
  );
};

export default Services;
