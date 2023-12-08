import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import Construction1 from "../../assets/construction1.png";
import Cupboard1 from "../../assets/contactHeader.png";
import Wall1 from "../../assets/wallshelfts.png";
import slider4 from "../../assets/houseDesign.png";
import "./Clients.scss";

let clients = [
  {
    name: "Pantry Cupboard",

    img_url: Cupboard1,
  },

  {
    name: "House Design",

    img_url: slider4,
  },
  {
    name: "Constructions",

    img_url: Construction1,
  },
  {
    name: "Wall Shelves & Cabinets",

    img_url: Wall1,
  },
];
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <button
        className="left arrow"
        onClick={() => arrowRef.current.slickPrev()}
      >
        <IoIosArrowBack />
      </button>
      <Slide direction="left" duration={500}>
        <span className="green" style={{ fontSize: 30, fontFamily: "Lato" }}>
          We are Experts in
        </span>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
      </Testimonials>
      <button
        className="right arrow"
        onClick={() => arrowRef.current.slickNext()}
      >
        <IoIosArrowForward />
      </button>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: center;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: rgb(255, 196, 0);
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  display: flex;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: rgb(255, 196, 0);
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
