import './App.css'
import React from "react";

import NavBar from "./NavBar";
import GifListContainer from './GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div >
      <h1>Find Happiness With John Jusice</h1>
      <NavBar color="black" title="Giphy Search" />
      <p>Follow me on insta <a href="https://instagram.com/khalil_.sa?igshid=YmMyMTA2M2Y=" alt="my account">@Khalil_.sa</a></p>
      <GifListContainer/>
    </div>
  );
}

export default App;
