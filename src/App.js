import React, { Component } from "react";

import "./app.scss";

import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Team from "./team";
import Work from "./work";

import workData from "./data/work";
import teamData from "./data/team";

import heroImage from "./images/hero-illustration-1.jpg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero image={heroImage} />
        <Work items={workData} />
        <Team items={teamData} />
        <Contact lat={50.8282721} lng={-0.1285494} />
        <Footer />
      </div>
    );
  }
}

export default App;
