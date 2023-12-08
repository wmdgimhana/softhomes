import React from "react";
import Welcome1 from "../../../assets/welcome1.png";
import Welcome2 from "../../../assets/welcome2.png";
import "./Welcome.scss";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wrapper">
        <div className="content">
          <div className="title">
            <motion.span
              className="yellowText"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              WELCOME{" "}
            </motion.span>
            TO <br />{" "}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="soft"
            >
              SOFT HOME
            </motion.span>
          </div>

          <motion.div
            className="desc"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Does every store seem to be selling the same items? Are you
            searching for something unique that reflects your style? Then let
            D&S Cabinets design and craft the cabinetry you need. Our team of
            cabinet makers in we have extensive skills in creating quality
            cabinets, fittings and custom storage for residential and commercial
            projects. We ensure that everything we make exactly fits where it
            will sit.
          </motion.div>
        </div>
        <div className="images">
          <motion.div
            className="imgContainer"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={Welcome1} alt="welcome1" className="img1" />
            <img src={Welcome2} alt="welcome2" className="img2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
