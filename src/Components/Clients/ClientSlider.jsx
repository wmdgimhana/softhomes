import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import "./Clients.scss";
import { useNavigate } from "react-router-dom";

const ClientSlider = (props) => {
  const { name, img_url } = props.item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name.toLowerCase().replace(/\s/g, "-")}`);
  };
  return (
    <Container
      className="container"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div>
        <div className="imgContainer">
          <img src={img_url} alt="" />
        </div>
      </div>
      <div>
        <div className="details">
          <h1>{name}</h1>
        </div>
      </div>
    </Container>
  );
};

export default ClientSlider;

const Container = styled.div`
  padding: 1.5rem 1rem;
  margin: 0 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: rgb(255, 196, 0);
    opacity: 0.7;
  }

  .star {
    color: rgb(255, 196, 0);
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 538px) {
      font-size: 0.6rem;
    }
  }
`;
