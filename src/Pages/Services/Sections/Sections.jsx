import React from "react";
import services1 from "../../../assets/01.png";
import services2 from "../../../assets/services2.png";
import services3 from "../../../assets/services9.png";
import services4 from "../../../assets/services4.png";
import services5 from "../../../assets/services5.png";
import services6 from "../../../assets/aboutUsHeader.png";
import services7 from "../../../assets/siteCon.jpg";
import services8 from "../../../assets/services8.png";
import services9 from "../../../assets/services3.png";
import services10 from "../../../assets/services10.png";
import threedDesign from "../../../assets/houseDesign.png";
import "./Sections.scss";
import { motion } from "framer-motion";

const Sections = () => {
  return (
    <div className="sections">
      {/* topic */}
      <div className="topic">
        <motion.div
          className="text"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.div>
      </div>
      {/* topic end */}

      {/* section1 */}
      <div className="section ">
        <div className="left">
          <div className="content">
            <span className="title">
              Pantry Cupboard making Services <br /> in{" "}
              <span className="b">Soft</span> <span className="y">Home</span>
            </span>

            <p>
              we take pride in providing a comprehensive and seamless
              cabinet-making process. From the initial consultation to the final
              installation, our experienced team ensures that every detail is
              meticulously planned and executed.
            </p>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="images"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={services1} alt="services1" className="img1" />
            <img src={services2} alt="services2" className="img2" />
          </motion.div>
        </div>
      </div>

      {/* section2 */}
      <div className="section s2">
        <div className="left">
          <motion.div
            className="images"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={services3} alt="services1" className="img1" />
            <img src={services4} alt="services2" className="img2" />
          </motion.div>
        </div>
        <div className="right">
          <div className="content">
            <h1 className="title">Accessories</h1>

            <p>
              We begin by scheduling a consultation where we listen to your
              ideas, requirements, and preferences. Our team will visit your
              location to assess the space and understand your vision. We
              consider your home style and aesthetic to create a solution that
              blends seamlessly with your surroundings.
            </p>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div className="section s3 ">
        <div className="left">
          <div className="content">
            <span className="title">Installation</span>

            <p>
              We begin by scheduling a consultation where we listen to your
              ideas, requirements, and preferences. Our team will visit your
              location to assess the space and understand your vision. We
              consider your home style and aesthetic to create a solution that
              blends seamlessly with your surroundings.
            </p>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="images"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={services9} alt="services1" className="img1" />
            <img src={services10} alt="services2" className="img2" />
          </motion.div>
        </div>
      </div>

      {/* section4 */}
      <div className="section s4">
        <div className="title">
          <span>House Design & Planing</span>
        </div>

        <div className="description">
          <p>
            With measurements in hand, we guide you through the design process.
            You can choose from a wide range of colours, materials, and finishes
            from our trusted suppliers. Our designers present design options and
            collaborate with you to refine the details until we achieve the
            perfect cabinet design that reflects your style and meets your
            functional needs.
          </p>
        </div>
      </div>

      {/* section3 */}

      <div className="section s3 ">
        <div className="left">
          <div className="content">
            <span className="title">Site Visit</span>

            <p>
              We begin by scheduling a consultation where we listen to your
              ideas, requirements, and preferences. Our team will visit your
              location to assess the space and understand your vision. We
              consider your home style and aesthetic to create a solution that
              blends seamlessly with your surroundings.
            </p>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="images"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={services5} alt="services1" className="img1" />
            <img src={services6} alt="services2" className="img2" style={{borderRadius: 10}} />
          </motion.div>
        </div>
      </div>

      {/* section 6 */}
      <div className="section s5">
        <div className="left">
          <motion.div
            className="images"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={threedDesign} alt="services1" className="img1 s5Img" style={{objectFit: 'cover'}} />
            <img src={services2} alt="services2" className="img2" />
          </motion.div>
        </div>
        <div className="right">
          <div className="content">
            <h1 className="title">3D Design</h1>

            <p>
              We begin by scheduling a consultation where we listen to your
              ideas, requirements, and preferences. Our team will visit your
              location to assess the space and understand your vision. We
              consider your home style and aesthetic to create a solution that
              blends seamlessly with your surroundings.
            </p>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className="section s5">
        <div className="left">
          <div className="content">
            <h1 className="title">Site Construction</h1>

            <p>
              We begin by scheduling a consultation where we listen to your
              ideas, requirements, and preferences. Our team will visit your
              location to assess the space and understand your vision. We
              consider your home style and aesthetic to create a solution that
              blends seamlessly with your surroundings.
            </p>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="images"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={services7} alt="services1" className="img1 s5Img" />
            <img src={services2} alt="services2" className="img2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
