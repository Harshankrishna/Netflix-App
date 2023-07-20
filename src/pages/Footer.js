import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <Container>
      <footer>
        <p>
          Author: HARSHANKRISHNA
          <br />
          <a href="mailto:hege@example.com">harshankrishdev003@gmail.com</a>
        </p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  footer {
    text-align: center;
    padding: 3px;
    background-color: rgb(181, 0, 0);
    color: white;
    a {
      color: white;
    }
  }
`;
export default Footer;
