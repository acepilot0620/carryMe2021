import React, { Component } from 'react';
import './App.css';

import { Header } from './Design';
import { CommercialBar, SideBar } from './Design/Comps';

class App extends Component {

  render() {
    return (
      <div>
        <SideBar></SideBar>
        <CommercialBar></CommercialBar>
        <Header></Header>
      </div>
    );
  }
}
export default App;