import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/Background";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/config";
import Bottom from "./Bottom";
import Footer from "./Footer";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <>
      <Container showPassword={showPassword}>
        <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h5>Watch anywhere. Cancel anytime.</h5>
              <h6>
                Ready to watch? Enter your email to create or restart
                membership.
              </h6>
            </div>
            <div className="container flex column form">
              <input
                required
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="email"
                value={formValues.email}
              />
              {showPassword && (
                <input
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={formValues.password}
                />
              )}
              {!showPassword && (
                <button onClick={() => setShowPassword(true)}>
                  Get Started &#62;
                </button>
              )}
            </div>
            {showPassword && <button onClick={handleSignIn}>SignUp</button>}
          </div>
        </div>
      </Container>
      <Bottom />
      <Footer />
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      width: 100vw;
      gap: 2rem;
      .text {
        display: flex;
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 25 25rem;
          font-weight: bolder;
        }
      }
      .form {
        display: flex;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        flex-direction: column;
        justify-content: center;
        input {
          color: white;
          margin-left: 1rem;
          margin-bottom: 1rem;
          padding: 1.5rem 2rem;
          font-size: 1.2rem;
          border: 1px solid white;
          background-color: rgba(0, 0, 0, 0.5);
          background-color: #000000b0;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.6rem;
          margin-left: 1rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Signup;
