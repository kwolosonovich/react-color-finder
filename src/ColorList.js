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
        <div className="ColorList">
          <h5>Current Colors</h5>
          <ul>{colorLinks}</ul>
        </div>
      </div>
    );
}

export default ColorList; 