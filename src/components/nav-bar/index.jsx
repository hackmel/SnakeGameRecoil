import React from "react";
import "./styles.css";
import logo from './assets/snake-logo.png';


export const NavBar = () => {
  return (
      <nav className= "nav">  
          <img className="logo" src={logo}/> 
          
          <h1>Snake Game</h1>

          <ul>
              <li><a href="#"> Score: </a></li>
              <li><a href="#"> 100 </a></li>
          </ul> 
      </nav>
    )
};






  
  
  