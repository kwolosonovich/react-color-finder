import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from './ColorList';
import Color from './Color'


function Routes() {
    let colorOptions = {
        blue: '#3a0088',
        pink: '#e61c5d', 
        purple: '#930077'  
    }

    function showColor(colorOptions) {
        return <Color color={colorOptions} />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colorOptions} />
          </Route>
          <Route path="/colors/:color" render={showColor} />
            <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;