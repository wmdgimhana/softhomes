import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/About us/AboutUs";
import ContactUs from "../Pages/Contact us/ContactUs";
import Projects from "../Pages/Projects/Projects";
import Home from "../Pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import PCupboard from "../Pages/Pantry Cupboards/PCupboard";
import HouseDesign from "../Pages/HouseDesign/HouseDesign";
import Wallshelfs from "../Pages/Wallshelfs/Wallshelfs";
import Constructions from "../Pages/Constructions/Constructions";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="pantry-cupboard" element={<PCupboard />} />
        <Route path="house-design" element={<HouseDesign />} />
        <Route path="wall-shelves-&-cabinets" element={<Wallshelfs />} />
        <Route path="constructions" element={<Constructions />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
