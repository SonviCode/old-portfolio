import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import FormContact from "../components/FormContact";
import ButtonsNav from "../components/ButtonsNav";
import SocialNetworks from "../components/SocialNetworks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <footer>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <SocialNetworks />
        <ButtonsNav left={"/projet"} />

        <div className="contact-container">
          <FormContact />
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>Adresse</h4>
                <p>France, Alsace</p>
                <p>67 000 Strasbourg</p>
              </div>
            </div>
            {/* <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="07 07 07 07 07" className="hover">
                <p style={{cursor: "pointer"}}
                className="clipboard"
                onClick={() => alert("Téléphone copié !")}
                >07 07 07 07 07</p>
              </CopyToClipboard>
            </div>
          </div> */}
            <div className="email">
              <div className="content">
                <h4>email</h4>
                <CopyToClipboard
                  text="tom.sonvico.pro@gmail.com"
                  className="hover"
                >
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Email copié !")}
                  >
                    tom.sonvico.pro@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          <p>© Website Professional created by Tom Sonvico - 2022</p>
          <p>Realized with React and Sass</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
