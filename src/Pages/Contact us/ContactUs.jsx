import React from "react";
import Header from "../../Components/Header/Header";
import HeaderImg from "../../Components/Header/HeaderImg";
import Map from "../../Components/Map/Map";
import "./ContactUs.scss";
import Fb from "../../assets/fb.png";
import Wa from "../../assets/wa.png";
import Tw from "../../assets/tw.png";
import ContactForm from "../../Components/Contact Form/ContactForm";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "../../Components/Navbar/Navbar";
import ContactHeader from '../../assets/contactHeader.png'

const ContactUs = () => {
  return (
    <motion.div
      className="contactus"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <HeaderImg img={ContactHeader} />
      <div className="wrapper">
        {/* topic */}
        <div className="topic">
          <motion.div
            className="text"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact <span>Us</span>
          </motion.div>
        </div>
        {/* topic end */}
        <div className="contactInfo">
          <Map />
          <div className="lineContainer">
            <div className="line"></div>
          </div>
          <div className="content">
            <div className="title">
              Contact <span>Soft Home</span>
            </div>

            <div className="details">
              <div className="infoContainer">
                <span className="infoTitle">Phone:</span>
                <span className="info">+94-76-496-3811</span>
              </div>

              <div className="infoContainer">
                <span className="infoTitle">E-mail:</span>
                <span className="info">softhome25@yahoo.com</span>
              </div>

              <div className="infoContainer">
                <span className="infoTitle">Address:</span>
                <span className="info">
                  Thalwila Junction, Maravila Town, Sri Lanka
                </span>
              </div>

              <div className="business">
                <div className="bussinessTitle">Business Hours:</div>

                <div className="times">
                  <span>Mon - Fri: 8AM - 10PM</span>
                  <span>Tue - Fri: 8AM - 10PM</span>
                  <span>wen - Fri: 8AM - 10PM</span>
                  <span>Thu - Fri: 8AM - 10PM</span>
                  <span>Fri - Fri: 8AM - 10PM</span>
                  <span>Sat - Fri: 8AM - 10PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* follow us */}
        <div className="followUs">
          <span className="title">Follow Us</span>
          <div className="icons">
            <a href="https://web.facebook.com/profile.php?id=100063607119269">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.2 }}
              >
                <FacebookRoundedIcon className="ico" />
              </motion.div>
            </a>
            <a href="https://instagram.com/softhomes.lk?igshid=YzAwZjE1ZTI0Zg== ">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4 }}
              >
                <InstagramIcon className="ico" />
              </motion.div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B94767163711&data=ARD5ojAeTSEXHNZO8clwOgyN9_1ELHEqxTGq0u6peaw97WqcW56Og-Z9NAbQmUTzzexGubh2-MitnG-_5t2WQURXAkj8X7sKyY2a6b5NEG6Nt52U96gwOLqIcahffsm6CRkXLy4qeQCH2g56-NBfRGm5uQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3_d6bjcWA_JJhW0NIR7T9piyutqJz9MUbso7KibyZ_qLzSuTprum8uVLA">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.6 }}
              >
                <WhatsAppIcon className="ico" />
              </motion.div>
            </a>
          </div>
        </div>
        {/* follow us  end*/}

        {/* contact form */}

        <div className="contactForm">
          <div className="title">
            <div className="text">
              <span>Get</span>
              Touch
            </div>

            <div className="line"></div>
          </div>

          <ContactForm />
        </div>
        {/* contact form end */}

        {/* footer */}
        <Footer />
      </div>
    </motion.div>
  );
};

export default ContactUs;
