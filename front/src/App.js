import React from "react";
import "./App.css";

import { Header } from "./Design";
import { CommercialBar, SideBar } from "./Design/Comps";

const App = (props) => {
  return (
    <div>
      <SideBar />
      <CommercialBar />
      <Header />
    </div>
  );
};

export default App;
