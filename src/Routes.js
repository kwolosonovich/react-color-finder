import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from './ColorList';
import Color from './Color'
import AddColorForm from "./AddColorForm";



function Routes() {
    const startOptions = JSON.parse(localStorage.getItem("colors")) || {
        blue: '#3a0088',
        pink: '#e61c5d', 
        purple: '#930077'  
    }

    const [colorOptions, updateColorOptions] = useState(startOptions);

    useEffect(
      () => localStorage.setItem("colorOptions", JSON.stringify(colorOptions)),
      [colorOptions]
    );

    function showColor(props) {
        const { color } = props.match.params;
        const hex = colorOptions[color];
        return <Color {...props} color={color} hex={hex} />;
    }

    function handleAdd(addColor) {
        updateColorOptions((colors) => ({ ...colors, ...addColor }));
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colorOptions} />
          </Route>

          <Route exact path="/colors/new">
            <AddColorForm addColor={handleAdd} />
          </Route>
          <Route path="/colors/:color" render={showColor} />
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;