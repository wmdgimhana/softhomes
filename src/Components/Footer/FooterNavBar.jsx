import React, { useState } from "react";

import "./FooterNavBar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const FooterNavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="footerNavBar">
      <div className="navItems">
        <div className="logo">
          <NavLink to={"/"}>
            <span>SOFT</span> <span className="y">HOMES</span>
          </NavLink>
        </div>

        <div></div>

        {/* mobile menu icon */}
        <div className="menuIco" onClick={() => setMenu(true)}>
          <MenuIcon className="ico" />
        </div>

        {/* mobile menu bar */}

        {menu && (
          <motion.div
            className="mobileMenu "
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="navItems">
              <div className="closeIco" onClick={() => setMenu(false)}>
                <CloseIcon className="ico" />
              </div>
              <NavLink className="link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="link" to={"/services"}>
                Services
              </NavLink>
              <NavLink className="link" to={"/about"}>
                About us
              </NavLink>
              <NavLink className="link" to={"/contact"}>
                Contact us
              </NavLink>
            </div>
          </motion.div>
        )}

        <div className="navLinks">
          <NavLink className="link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="link" to={"/services"}>
            Services
          </NavLink>
          <NavLink className="link" to={"/about"}>
            About us
          </NavLink>
          <NavLink className="link" to={"/contact"}>
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FooterNavBar;
