import React, { useState } from "react";
import "./ImageGallary.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ImageGallery = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="imageGallary">
      <div className="topic">
        <div>
          <span className="y">Done</span> by us
        </div>
      </div>

      {/* images */}
      <div className="gallary">
        <div className="wrapper">
          <div className="col col-l c1">
            <NavLink to={"services"}>
              <motion.div
                className="row r1"
                whileTap={{ scale: 0.7 }}
              ></motion.div>
            </NavLink>
            <div className="row r2">
              <NavLink to={"services"}>
                <motion.div
                  className="col rc1"
                  whileTap={{ scale: 0.7 }}
                ></motion.div>
              </NavLink>
              <NavLink to={"services"}>
                <motion.div
                  className="col rc2"
                  whileTap={{ scale: 0.7 }}
                ></motion.div>
              </NavLink>
            </div>
          </div>
          <NavLink to={"services"}>
            <motion.div
              className="col c2"
              whileTap={{ scale: 0.7 }}
            ></motion.div>
          </NavLink>
        </div>

        {/* expand images */}
        {show && (
          <motion.div
            className="wrapper2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <NavLink to={"services"}>
              <motion.div
                className="col c2"
                whileTap={{ scale: 0.7 }}
              ></motion.div>
            </NavLink>
            <div className="col col-l c1">
              <NavLink to={"services"}>
                <motion.div
                  className="row r1"
                  whileTap={{ scale: 0.7 }}
                ></motion.div>
              </NavLink>
              <div className="row r2">
                <NavLink to={"services"}>
                  <motion.div
                    className="col rc1"
                    whileTap={{ scale: 0.7 }}
                  ></motion.div>
                </NavLink>
                <NavLink to={"services"}>
                  <motion.div
                    className="col rc2"
                    whileTap={{ scale: 0.7 }}
                  ></motion.div>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* mobile image gallary */}
      <div className="mobileGallaries">
        <div className="mImageGallary">
          <div className="row r1">
            <NavLink to={"services"}>
              <motion.div
                className="col c1"
                whileTap={{ scale: 0.7 }}
              ></motion.div>
            </NavLink>
            <NavLink to={"services"}>
              <motion.div
                className="col c2"
                whileTap={{ scale: 0.7 }}
              ></motion.div>
            </NavLink>
          </div>
          <div className="row row-l">
            <NavLink to={"services"}>
              <motion.div
                whileTap={{ scale: 0.7 }}
                className="col c3"
              ></motion.div>
            </NavLink>
          </div>
        </div>

        {/* expanded mobile gallary */}
        {show && (
          <motion.div
            className="mImageGallary2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="row r1">
              <NavLink to={"services"}>
                <motion.div
                  whileTap={{ scale: 0.7 }}
                  className="col c1"
                ></motion.div>
              </NavLink>
              <NavLink to={"services"}>
                <motion.div
                  whileTap={{ scale: 0.7 }}
                  className="col c2"
                ></motion.div>
              </NavLink>
            </div>

            <div className="row r2">
              <NavLink to={"services"}>
                <motion.div
                  whileTap={{ scale: 0.7 }}
                  className="col c3"
                ></motion.div>
              </NavLink>
            </div>
          </motion.div>
        )}
      </div>

      {/* expand button */}
      <motion.div
        className="icon"
        onClick={() => setShow(!show)}
        whileTap={{ scale: 0.7 }}
      >
        <span>{show ? "Less" : "More"}</span>
        {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </motion.div>
      {/* expand button end */}
      {/* images end */}
    </div>
  );
};

export default ImageGallery;
