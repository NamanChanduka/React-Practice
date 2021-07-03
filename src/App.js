import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";

function App() {
  return (
    <div>
      <Main />
    </div>
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
