import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter, Link } from "react-router-dom";
import ColorList from "./ColorList";

function Color({ color, hex }) {


  return (
    <div>
      <div style={{ background: hex, height: 300}}></div>
      <h3 style={{ color: hex }}>
        {color}
      </h3>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Color;