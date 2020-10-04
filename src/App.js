import React from "react";
import { RecoilRoot } from "recoil";

import MainGame from "./containers/main-game/index";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";
import  "./App.css";

function App() {
  return (
    <div className="./App.css">
      <RecoilRoot>
        <NavBar/> 
        <MainGame />
        <Footer/>
      </RecoilRoot>
    </div>
  );
}

export default App;
