import React, { useState } from "react";
import { Images } from "./imgData";
import SlideImg from "../../assets/headerImg.png";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import "./Slider.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const leftArrowHandler = () => {
    setSliderIndex(sliderIndex === 0 ? 2 : sliderIndex - 1);
  };

  const rightArrowHandler = () => {
    setSliderIndex(sliderIndex === 2 ? 0 : sliderIndex + 1);
  };

  return (
    <div className="slider">
      {/* left arrow */}
      <div className="arrow left" onClick={leftArrowHandler}>
        <img src={LeftArrow} alt="leftAr" />
      </div>
      <div className="wrapper">
        {/* slider image */}

        {/* slider container */}
        {Images.map((item) => (
          <div
            className="slideItem"
            key={item.id}
            style={{ transform: `translateX(-${sliderIndex * 100}vw)` }}
          >
            <div className="imgContainer">
              <img src={item.img} alt="slideImg" />
            </div>

            <div className="content">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="description"
                style={{ whiteSpace: "pre-line" }}
              >
                {item.desc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <NavLink to={"contact"} className={"button"}>
                  Contact
                </NavLink>
              </motion.div>
            </div>
          </div>
        ))}
        {/* slider container end */}
        {/* slider image end */}
      </div>
      {/* right arrow */}
      <div className="arrow right" onClick={rightArrowHandler}>
        <img src={RightArrow} alt="rightAr" />
      </div>
    </div>
  );
};

export default Slider;
