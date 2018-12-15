import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import House from './component/house/House';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       {routes}
       <House/>
      </div>
    );
  }
}

export default App;
