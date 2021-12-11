import React from "react";
import { RecoilRoot } from "recoil";

import {MainGameContainer} from "./containers/main-game/index";
import { NavBarContainer } from "./containers/nav-bar";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="./App.css">
      <RecoilRoot>
        <NavBarContainer />
        <MainGameContainer />
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
