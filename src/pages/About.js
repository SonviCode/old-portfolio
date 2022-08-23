import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import mysql from "../assets/img/mysql.png";
import sass from "../assets/img/sass.png";
import git from "../assets/img/git.png";
import js from "../assets/img/js.png";
import tete from "../assets/img/photoTete.jpg";
import react from "../assets/img/React-icon.png";
import nodejs from "../assets/img/nodejs.png";
import Mouse from "../components/Mouse";
import ButtonsNav from "../components/ButtonsNav";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialNetworks from "../components/SocialNetworks";
import { motion } from "framer-motion";

const About = () => {
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
        stagger: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.section
        id="about"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetworks />
        <Logo />
        <ButtonsNav left={"/"} right={"/projet"} />
        <div className="about-container">
          <div className="about-title">
            <h2>Qui suis-je ?</h2>
            <img src={tete} alt="tête de tom" className="hover" />
          </div>
          <div className="presentation">
            <div className="texte-presentation">
              <p>
                Agé de 19 ans, j'ai découvert le monde du web il y a 1 an. Je me
                suis passionné pour la conception des sites internet et
                désormais je me forme en autodidacte sur le développement web.
                Afin de me professionnaliser d'avantages, je suis en{" "}
                <a
                  href="https://3wa.fr/formations/formation-developpeur-web/developpeur-full-stack-react-node-js-1-an-alternance/"
                  target="blank"
                >
                  formation développeur Full-Stack
                </a>{" "}
                à la 3W Academy et en alternance.
              </p>
            </div>
            <div className="skills-presentation">
              <div className="skills">
                <h2>Mes skills :</h2>
              </div>
              <div className="stack-presentation">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={mysql} alt="mysql" />
                <img src={sass} alt="sass" />
                <img src={git} alt="git" />
                <img src={js} alt="js" />
                <img src={react} alt="react" />
                <img src={nodejs} alt="nodejs" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
