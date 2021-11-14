import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/snake-logo.png";


const NavElement = styled.nav`
    display: flex;
    align-items: center;
    color: aliceblue;
    align-content: space-between;

    img {
      height: 100px;
      width: 100px;
    }
    
    h1 {
      font-family: 'GraublauWeb', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
      font-size: xx-large;
    }
    
     ul {
       list-style-type: none;
       display: inline-block;
       margin-left: auto;
       margin-right: 1%;

       li{
        float: left;
       }
    }

     ul li a {
      text-decoration: none;
      text-align: center;
      padding: 14px 14px;
      color: aliceblue;
      font-size: xx-large;
      font-family: 'GraublauWeb', 'Arial Narrow', Arial, sans-serif;
      font-weight: bold;
    }
    
    li:last-child a {
      border-radius: 10px;
      background-color: dodgerblue;
    }
`;




export const NavBar: React.FC<{score: Number}> = ({score}): JSX.Element => {
  return (
    <NavElement>
      <img src={logo} />

      <h1>Snake Game</h1>

      <ul>
        <li>
          <a href="#"> Score: </a>
        </li>
        <li>
          <a href="#"> {score} </a>
        </li>
      </ul>
    </NavElement>
  );
};
