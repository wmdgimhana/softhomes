import React from "react";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import HeaderImg from "../../Components/Header/HeaderImg";
import plan from "../../assets/plan.jpg";
import appoinment from "../../assets/appoinment.jpg";
import materials from "../../assets/choosing.jpg";
import wallshelf from "../../assets/wallshelf.jpg";
import "./Wallshelfs.scss";
import services2 from "../../assets/services2.png";
import WallHeader from '../../assets/wallShelft.png'

const Wallshelfs = () => {
  return (
    <motion.div
      className="Wallshelfs"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {/* header img */}
      <HeaderImg img={WallHeader} />
      {/* header img end*/}

      {/* topic */}
      <div className="topic">
        <motion.div
          className="text"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wall <span className="y">Shelves</span>
        </motion.div>
      </div>

      {/* topic end */}

      {/* sections */}
      <div className="section ">
        <div className="left">
          <div className="content">
            <div className="step">Step 1</div>
            <span className="title">Plan your Wallshelves</span>

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
            <img src={plan} alt="plan" className="img1" />
            <img src={services2} alt="plan" className="img2" />
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
            <img src={appoinment} alt="appoinment" className="img1" />
            <img src={services2} alt="plan" className="img2" />
          </motion.div>
        </div>
        <div className="right">
          <div className="content">
            <div className="step">Step 2</div>
            <h1 className="title">The Appoinment</h1>

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
            <div className="step">Step 3</div>
            <span className="title">Choosing The Materials</span>

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
            <img src={materials} alt="material" className="img1" />
            <img src={services2} alt="plan" className="img2" />
          </motion.div>
        </div>
      </div>

      {/* section3 */}

      <div className="section s2">
        <div className="left">
          <motion.div
            className="images"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={wallshelf} alt="wallshelf" className="img1" />
            <img src={services2} alt="plan" className="img2" />
          </motion.div>
        </div>
        <div className="right">
          <div className="content">
            <div className="step">Step 4</div>
            <h1 className="title">Wallshelves Comes To Life</h1>

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

      {/* sections end */}

      {/* footer */}
      <Footer />
      {/* footer end */}
    </motion.div>
  );
};

export default Wallshelfs;
