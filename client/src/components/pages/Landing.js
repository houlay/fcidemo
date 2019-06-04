import React, { Component } from "react";
import ReactSnapScroll from "react-snap-scroll";

import Title from "../layout/Sections/Title";
import About from "../layout/Sections/About";
import Services from "../layout/Sections/Services";
import Team from "../layout/Sections/Team";
import Clients from "../layout/Sections/Clients";
import Testimonials from "../layout/Sections/Testimonials";
import Contact from "../layout/Sections/Contact";
import Pagenation from "../Pagenation";
import Logo from "../Logo";

export default class Landing extends Component {
  state = {
    index: 0
  };

  handlePageChange = index => {
    this.setState({ index });
  };

  render() {
    return (
      <div className="App">
        <Logo />
        <Pagenation index={this.state.index} />
        <ReactSnapScroll
          transition="move-top-bottom"
          indexChanged={this.handlePageChange}
        >
          <Title />
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
