import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter, Link } from "react-router-dom";
import ColorList from "./ColorList";

function Color({color}) {
    return (
      <div className="colorBackground">
        <h3 className="colorText">{color}</h3> 
        <Link to="/">Back</Link>
      </div>
    );
}

export default Color;