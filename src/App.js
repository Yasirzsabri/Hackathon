import React from "react";
import MapContainer from "./Shared/Maps/MapContainer";
import MainNavigiation from "./Shared/Navigation/MainNavigiation";
 import {
  BrowserRouter as Router
 
} from "react-router-dom";

import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <MainNavigiation />
        <MapContainer />
      </Router>
    </>
  );
};

export default App;
