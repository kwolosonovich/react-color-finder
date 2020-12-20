import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from './Routes'; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Color Factory</h1>
      </header>
      <body> */}
        {/* <h3>Add a Color</h3> */}
        <Routes />
      {/* </body> */}
    </div>
  );
}

export default App;
