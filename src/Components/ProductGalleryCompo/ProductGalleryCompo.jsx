import React, { useState } from "react";
import Construction1 from "../../assets/construction1.png";
import Cupboard1 from "../../assets/cupbord1.png";
import Wall1 from "../../assets/wallshelfts.png";

// gallery 1 images
import Galler1Img1 from "../../assets/gallery1/construction1.png";
import Galler1Img2 from "../../assets/gallery1/construction2.png";
import Galler1Img3 from "../../assets/gallery1/construction3.jpg";
import Galler1Img4 from "../../assets/gallery1/construction4.jpg";

import "./PGCompo.scss";
import { motion } from "framer-motion";

const ProductGalleryCompo = () => {
  const sliderImages = [Construction1, Cupboard1, Wall1];

  const [selectedImg, setSelectedImg] = useState(1);

  const handleImageClick = (index) => {
    setSelectedImg(index);
  };

  const gallery1Images = [
    {
      img: Galler1Img1,
    },
    {
      img: Galler1Img2,
    },
    {
      img: Galler1Img3,
    },

    {
      img: Galler1Img4,
    },
  ];

  const [imgMap, setImgMap] = useState(gallery1Images);

  return (
    <div className="PGCompo">
      <div className="container">
        {/* constructions */}
        <div className="gallaries">
          <div className="gallery1">
            <motion.div className="wrapper" whileTap={{ scale: 0.7 }}>
              <div className="imgContainer">
                <img
                  src={sliderImages[0]}
                  alt="construction1"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </motion.div>
          </div>
          {/* constructions end */}

          {/* cupboard */}

          <div className="gallery2">
            <div className="wrapper">
              <div className="imgContainer">
                <motion.img
                  src={sliderImages[selectedImg]}
                  alt="cupboard1"
                  onClick={() => handleImageClick(selectedImg)}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  whileInView={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>

          {/* cupboard end */}

          {/* wall shelfs */}

          <div className="gallery3">
            <motion.div className="wrapper" whileTap={{ scale: 0.7 }}>
              <div className="imgContainer">
                <img
                  src={sliderImages[2]}
                  alt="wall1"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* wall shelfs end */}
      </div>

      {/* gallery show */}
      <div className="gallaryShowContainer">
        <div className="gallaryShow">
          <div className="wrapper">
            <div className="images">
              <div className="images">
                {imgMap.map((item) => (
                  <motion.img src={item.img} alt="img" key={Math.random()} />
                ))}
              </div>
            </div>

            <div className="desc">
              D&S Cabinets design and craft the cabinetry you need. Our team of
              cabinetmakers in we have extensive skills in creating quality
              cabinets,... <span className="seemore">see more</span>
            </div>
          </div>
        </div>
        <button className="moreBtn">More</button>
      </div>

      {/* mobile screen gallary */}
      <div className="mobileGallary">
        <div className="gallarySection1">
          {/* gallaryImage 1 */}
          <div className="mgallary1">
            <motion.div className="wrapper" whileTap={{ scale: 0.7 }}>
              <div className="imgContainer">
                <img
                  src={sliderImages[0]}
                  alt="construction1"
                  onClick={() => handleImageClick(0)}
                />
              </div>
            </motion.div>
          </div>

          {/* gallary image2 */}
          <div className="mgallary3">
            <motion.div className="wrapper" whileTap={{ scale: 0.7 }}>
              <div className="imgContainer">
                <img
                  src={sliderImages[2]}
                  alt="construction1"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="gallarySection2">
          <div className="mgallary2">
            <motion.div
              className="wrapper"
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="imgContainer">
                <img src={sliderImages[selectedImg]} alt="construction1" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryCompo;
