import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

//MOUNTING STAGE

//UPDATE STAGE     {DEPRECATED:- componentWillRecieveProps() && componentWillUpdate()}
//getdDerivedStateFromProps()
//shouldComponentUpdate()
//render()
//getSnapshotBeforeUpdate()
//componentDidUpdate()
