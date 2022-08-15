import React from "react";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetworks from "../components/SocialNetworks";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetworks />
        <div className="home-main">
          <div className="main-content">
            <h1>
              Hello, <br />
              C'est Tom Sonvico
            </h1>
            <h2><DynamicText /></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
