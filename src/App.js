import React, { Component } from "react";
import Landing from "./components/Landing.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='top-border'></div>
        <Landing />
        <Projects />
        <About />
        <Skills />
      </div>
    );
  }
}

export default App;
