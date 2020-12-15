import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Backgroung = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #8257e6;
  font-family: sans-serif;

  & h1 {
    font-size: 3.5em;
    font-weight: bold;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 2.5em;
    }

    @media (max-width: 600px) {
      font-size: 1.5em;
    }

    @media (max-width: 375px) {
      font-size: 1em;
    }
  }

  a {
    background: #8257e6;
    padding: 20px;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.4);
  }
`;

function NotFound() {
  return (
    <Backgroung>
      <h1>Vish, página não encontrada!</h1> <Link to="/">Me tire daqui!</Link>
    </Backgroung>
  );
}

export default NotFound;
