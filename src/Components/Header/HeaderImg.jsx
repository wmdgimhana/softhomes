import React from "react";
import "./HeaderImg.scss";
import HeaderImage from "../../assets/sliderImg2.jpg";
import Navbar from "../Navbar/Navbar";

const HeaderImg = ({img}) => {
  return (
    <div className="headerImg">
      <Navbar />
      <div className="wrapper">
        <img src={img} alt="headerImage" />
      </div>
    </div>
  );
};

export default HeaderImg;
