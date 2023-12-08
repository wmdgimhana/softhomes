import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo" style={{ cursor: "pointer" }}>
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navItems">
          <NavLink to={"/"} className="link">
            Home
          </NavLink>
          <NavLink to={"/services"} className="link">
            Services
          </NavLink>
          <NavLink to={"/about"} className="link">
            About Us
          </NavLink>
          <NavLink to={"/contact"} className="link">
            Contact Us
          </NavLink>
        </div>
        <div className="socialIco">
          <a href="https://web.facebook.com/profile.php?id=100063607119269">
            <FacebookRoundedIcon className="ico fb" />
          </a>

          <a href="https://api.whatsapp.com/send?phone=%2B94767163711&data=ARDUdwD80hqmTjJYilepn0TSOo2MnbdhnUQ707xC9XKge1KvvZowJNgAYfDy-Z8LQUL9oWkbgZMMUiAqz37FyB9jZa6PAzlY5Lo2EY61zBnNHtr7K8iw9O1zi_9WycYliEmkCawJ_rzYKtRlFOqTClBMXQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR05nIygemOkFIUB6ytLO6aKJ1yXcT919w7vvFZlh_udaioAOCQe-dlh_tA">
            <WhatsAppIcon className="ico wa" />
          </a>

          <a href="https://instagram.com/softhomes.lk?igshid=YzAwZjE1ZTI0Zg==">
            <InstagramIcon className="ico ins" />
          </a>
        </div>
      </div>

      <div className={`mNavbar ${scrolled ? "scrolled" : ""}`}>
        {/* mobile menu icon */}

        {/* mobile logo */}
        <NavLink to={"/"}>
          <div className="moblogo">
            <img src={Logo} alt="log" />
          </div>
        </NavLink>
        {/* mobile logo end */}

        <div className="menuIco" onClick={() => setMenu(true)}>
          <MenuIcon className="ico" />
        </div>
        {/* mobile nav bar */}
        {menu && (
          <motion.div className="mobileMenu">
            <div className="navItems">
              <div className="closeIco" onClick={() => setMenu(false)}>
                <CloseIcon className="ico" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <NavLink to={"/"} className="link">
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <NavLink to={"/services"} className="link">
                  Services
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <NavLink to={"/about"} className="link">
                  About Us
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <NavLink to={"/contact"} className="link">
                  Contact Us
                </NavLink>
              </motion.div>

              <motion.div
                className="icons"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="https://web.facebook.com/profile.php?id=100063607119269">
                  <FacebookRoundedIcon className="ico" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B94767163711&data=ARDUdwD80hqmTjJYilepn0TSOo2MnbdhnUQ707xC9XKge1KvvZowJNgAYfDy-Z8LQUL9oWkbgZMMUiAqz37FyB9jZa6PAzlY5Lo2EY61zBnNHtr7K8iw9O1zi_9WycYliEmkCawJ_rzYKtRlFOqTClBMXQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR05nIygemOkFIUB6ytLO6aKJ1yXcT919w7vvFZlh_udaioAOCQe-dlh_tA">
                  <WhatsAppIcon className="ico" />
                </a>
                <a href="https://instagram.com/softhomes.lk?igshid=YzAwZjE1ZTI0Zg==">
                  <InstagramIcon className="ico" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
