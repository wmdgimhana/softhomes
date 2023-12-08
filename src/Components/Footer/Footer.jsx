import React from "react";
import AdressIco from "../../assets/location.png";
import PhoneIco from "../../assets/call.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterNavBar from "./FooterNavBar";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <FooterNavBar />

      <div className="wrapper">
        <div className="section1">
          {/* address */}
          <div className="address">
            <div className="ico">
              <img src={AdressIco} alt="location" />
              <span className="title">Address</span>
            </div>

            <p>
              Thalwila Junction, <br /> Maravila Town, <br /> Sri Lanka
            </p>
          </div>
        </div>
        <div className="section2">
          {/* phone */}
          <div className="phone">
            <div className="ico">
              <img src={PhoneIco} alt="phoneIco" />
              <span className="title">Phone</span>
            </div>
            <span>+94-76-496-3811</span>
          </div>

          {/* follow */}
          <div className="follow">
            <span>Follow us on:</span>
            <div className="icons">
              <a href="https://web.facebook.com/profile.php?id=100063607119269">
                {" "}
                <FacebookRoundedIcon className="ico" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=%2B94767163711&data=ARDUdwD80hqmTjJYilepn0TSOo2MnbdhnUQ707xC9XKge1KvvZowJNgAYfDy-Z8LQUL9oWkbgZMMUiAqz37FyB9jZa6PAzlY5Lo2EY61zBnNHtr7K8iw9O1zi_9WycYliEmkCawJ_rzYKtRlFOqTClBMXQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR05nIygemOkFIUB6ytLO6aKJ1yXcT919w7vvFZlh_udaioAOCQe-dlh_tA">
                <WhatsAppIcon className="ico" />
              </a>
              <a href="https://instagram.com/softhomes.lk?igshid=YzAwZjE1ZTI0Zg== ">
                {" "}
                <InstagramIcon className="ico" />
              </a>
            </div>
          </div>
        </div>
        <div className="section3">
          <span className="title">Open Times</span>
          <div className="times">
            <span>Mon: 8AM - 5PM</span>
            <span>Tu: 8AM - 5PM</span>
            <span>We: 8AM - 5PM</span>
            <span>Th: 8AM - 5PM</span>
            <span>Fr: 8AM - 5PM</span>
            <span>Sa: 8AM - 5PM</span>
          </div>
        </div>
      </div>

      <div className="bottomSection">
        <span>
          Copyright © 2023{" "}
          <span className="companyName">
            SOFT <span className="y">HOMES</span>
          </span>
          ..All Rights Reserved | Designed & Developed by{" "}
          <a href="https://web.facebook.com/Cyberpixels" className="developer">
            CYBERPIXELS
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
