import React, { Component } from "react";
import Helmet from 'react-helmet';

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
        <Helmet 
          title="Arcadian Labs" 
        >
          <meta property="og:url"                content="https://arcadianlabs.com" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Arcadian Labs" />
          <meta property="og:description"        content="Complete, Full Stack Web Solutions in Brighton, UK" />
          <meta property="og:image"              content={ heroImage } />
        </Helmet>
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
