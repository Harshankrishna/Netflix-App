import React from "react";
import styled from "styled-components";
import bottom from "../assets/bottom.png";

function Bottom() {
  return (
    <Container>
      <div className="content">
        <div className="body flex column ">
          <div className="text flex column">
            <h1>Enjoy on your TV.</h1>
            <h5>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple
              TV, Blu-ray players and more.
            </h5>
          </div>
        </div>
        <img src={bottom} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
background-color: #353535;
position: relative;
width:100vm;
height:82vh;
box-sizing: border-box;
top: 0;

.content {
  flex-direction: column;
  position: absolute;
  top: 0.5rem;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  height: 80vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
    img {
      height: 25rem;
      width: 35rem;
      align-item: left;
      margin-left: 50rem;
    }
  .body {
    gap: 2rem;
    .text {
     display: flex;
      gap: 1.5rem;
      font-size: 1.6rem;
      margin-left: 8rem;
      margin-top: 15rem;
      h1, h5 {
        text-align: left;
      }
      h5 {
        font-weight: normal;
      }
    }
}`;
export default Bottom;
