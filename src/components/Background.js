import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

function Background() {
  return (
    <Container>
      <img src={background} alt="bg" />
    </Container>
  );
}

export default Background;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: rgb(0 0 0 / 50%);
  img {
    height: 100vh;
    width: 100vw;
  }
`;
