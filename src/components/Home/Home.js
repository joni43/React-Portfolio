import React from "react";
import { Container } from "../Styled-comp/grid";
import { ContainerImage } from "./Home-style";


const Home = () => (
  <Container id="home">
    <ContainerImage>
      <h1>Jonathan Nilsson</h1>
      <h2>Front-end Developer</h2>
    </ContainerImage>
  </Container>
);

export default Home;
