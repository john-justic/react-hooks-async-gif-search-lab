import './App.css'
import React from "react";

import NavBar from "./NavBar";
import GifListContainer from './GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div >
      <h1>Find Happiness With John Justice</h1>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer/>
    </div>
  );
}

export default App;
