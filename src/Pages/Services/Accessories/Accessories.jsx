import React from "react";
import "./Accessories.scss";
import Grid1 from "../../../assets/grid1.png";
import Grid2 from "../../../assets/grid2.png";
import Grid3 from "../../../assets/grid3.png";
import Grid4 from "../../../assets/grid4.png";
import Grid5 from "../../../assets/grid5.png";
import Grid6 from "../../../assets/grid6.png";
import { motion } from "framer-motion";

const Accessories = () => {
  return (
    <div className="accessories">
      <div className="title">
        <span>ACCESSORIES</span>
      </div>

      <div className="grid">
        <motion.img src={Grid1} alt="grid1" whileTap={{ scale: 0.7 }} />
        <motion.img src={Grid2} alt="grid2" whileTap={{ scale: 0.7 }} />
        <motion.img src={Grid3} alt="grid3" whileTap={{ scale: 0.7 }} />
        <motion.img src={Grid4} alt="grid4" whileTap={{ scale: 0.7 }} />
        <motion.img src={Grid5} alt="grid5" whileTap={{ scale: 0.7 }} />
        <motion.img src={Grid6} alt="grid6" whileTap={{ scale: 0.7 }} />
      </div>
    </div>
  );
};

export default Accessories;
