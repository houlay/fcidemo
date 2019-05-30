import React, { Component } from "react";
import "./App.css";
import ReactSnapScroll from "react-snap-scroll";
import About from "./components/layout/Sections/About";
import Services from "./components/layout/Sections/Services";
import Team from "./components/layout/Sections/Team";
import Clients from "./components/layout/Sections/Clients";
import Testimonials from "./components/layout/Sections/Testimonials";
import Contact from "./components/layout/Sections/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactSnapScroll transition="move-top-bottom">
          <About />
          <Services />
          <Team />
          <Clients />
          <Testimonials />
          <Contact />
        </ReactSnapScroll>
      </div>
    );
  }
}

export default App;
