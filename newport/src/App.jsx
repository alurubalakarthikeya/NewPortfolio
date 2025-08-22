import { useState } from "react";
import "./App.css";
import NavBar from "./assets/components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div id="home" className="section home">
        <div className="intro">
          <h2>Hi, I’m Karthikeya</h2>
          <h4>A Frontend Developer, UI/UX Designer, Agent Developer</h4>
        </div>
      </div>
    </>
  );
}

export default App;
