import React from "react";
import "./Top.scss";
import Aboutus1 from "../../../assets/aboutus1.png";
import Aboutus2 from "../../../assets/aboutus2.png";
import Aboutus3 from "../../../assets/aboutus3.png";
import { motion } from "framer-motion";

const Top = () => {
  return (
    <div className="top">
      {/* topic */}
      <div className="topic">
        <motion.div
          className="text"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span>Us</span>
        </motion.div>
      </div>
      {/* topic end */}

      {/* images */}
      <div className="images">
        <motion.img
          src={Aboutus1}
          alt="aboutus1"
          className="img1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={Aboutus2}
          alt="aboutus2"
          className="img2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={Aboutus3}
          alt="aboutus3"
          className="img3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {/* images end */}

      {/* descriptions */}

      <div className="descriptions">
        {/* deesc1 */}
        <div className="desc">
          <span>
            Does every store seem to be selling the same items? Are you
            searching for something unique that reflects your style? Then let
            D&S Cabinets design and craft the cabinetry you need. Our team of
            cabinet makers in we have extensive skills in creating quality
            cabinets, fittings and custom storage for residential and commercial
            projects. We ensure that everything we make exactly fits where it
            will sit.
          </span>
        </div>
        {/* deesc1 end */}

        {/* desc2 */}
        <div className="desc">
          <span>
            Does every store seem to be selling the same items? Are you
            searching for something unique that reflects your style? Then let
            D&S Cabinets design and craft the cabinetry you need. Our team of
            cabinet makers in we have extensive skills in creating quality
            cabinets, fittings and custom storage for residential and commercial
            projects. We ensure that everything we make exactly fits where it
            will sit.
          </span>
        </div>
        {/* desc2 end */}
      </div>
      {/* descriptions end */}
    </div>
  );
};

export default Top;
