import React from "react";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      {/* top bar */}

      <div className="topBar">
        <div className="wrapper">
          {/* logo */}
          <div className="logo">
            <NavLink to={"/"}>
              {" "}
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          {/* logo end */}

          {/* nav bar */}
          <Navbar className="navBar" />
          {/* nav bar end */}

          {/* social icons */}
          <div className="socialIco">
            <a href="https://web.facebook.com/profile.php?id=100063607119269">
              <FacebookRoundedIcon className="fb ico" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B94767163711&data=ARC3DxtCJtLG22bWJ6QwSAS_bKnbwhaff7y3foZRF8FUx_gN_oSWl_LquNps6cA_Zy_v8Pkg94gfvqyTzrVTe8cLB_ECInGQg5u1PW6zNXJZhjuLD2T_pGg9XH5Cj1RYuy7PoXpO2_vOR6XKXEMdLT7PTQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1OoJWrZTt4oNBVI7ynjCmES1RiIfvVK33f7ur497WRDQz7ScRUEWt2OeA">
              <WhatsAppIcon className="wa ico" />
            </a>
            <a href="https://instagram.com/softhomes.lk?igshid=YzAwZjE1ZTI0Zg== ">
              <InstagramIcon className="insta ico" />
            </a>
          </div>
          {/* social icons end */}
        </div>
      </div>
      {/* top bar end*/}
    </div>
  );
};

export default Header;
