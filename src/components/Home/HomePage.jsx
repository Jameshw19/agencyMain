import React from "react";
import Nav from "../Nav/Nav";
import Landing from "./Landing";
import HeaderInfo from "./HeaderInfo";
import Services from "./Services";
import OurWork from "./OurWork";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Landing />
      {/* <div className="section__separator"></div> */}

      <HeaderInfo />
      <OurWork />
      <div className="sections" id="works">
        <div className="section__separator"></div>
      </div>
      <About />
      <div className="sections">
        <div className="section__separator"></div>
      </div>
      <Services />
      <div className="sections" id="contact">
        <div className="section__separator"></div>
      </div>
      <Contact />
      <div className="sections">
        <div className="section__separator"></div>
      </div>
      <Clients />

      <Footer />
    </div>
  );
};

export default HomePage;
