import React from "react";
import ButtonsNav from "../components/ButtonsNav";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetworks from "../components/SocialNetworks";
import { motion } from "framer-motion";
// import { useRef } from "react";

const Home = () => {
  // const constraintsRef = useRef(null);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        stagger: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <header >
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
        
      >
        <Navigation />
        <SocialNetworks />
        
          <div className="main-content">
            <motion.h1
              // drag
              // onDragEnd
              // dragConstraints={constraintsRef}
            >
              Hello, <br />
              C'est Tom Sonvico
            </motion.h1>
            <motion.h2
              // drag
              
              // dragConstraints={constraintsRef}
            >
              <DynamicText />
            </motion.h2>
            <a href="./assets/img/SONVICO_TOM_CV_DEV.pdf" target="_blank">Mon CV</a>
          
          </div>
        <ButtonsNav right={"/about"} />
      </motion.div>
    </header>
  );
};

export default Home;
