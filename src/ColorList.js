import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter, Link} from "react-router-dom";
import Routes from "./Routes"

function ColorList({ colors }) {

    const colorLinks = Object.keys(colors).map((colorName) => (
      <li key={colorName}>
        <Link to={`/colors/${colorName}`}>{colorName}</Link>
      </li>
    ));
    
    return (
      <div className="ColorList">
        <div>
          <Link to="/colors/new">Add a color</Link>
        </div>
        <div>
          <h3>Current Colors</h3>
          <h5>{colorLinks}</h5>
        </div>
      </div>
    );
}

export default ColorList; 