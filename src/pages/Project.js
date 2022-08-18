import React from 'react';
import ButtonsNav from '../components/ButtonsNav';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import ProjectContent from '../components/ProjectContent';
import { motion } from "framer-motion";

const Project = () => {

    const variants = {
        initial: {
            opacity:0,
            transition: {duration:0.5},
            x:100,
        },
        visible: {
            opacity:1,
            x:0,
        },
        exit: {
            opacity:0,
            transition: {duration:0.35},
            x:-100,
        },
    };

    // const transition = {
    //     ease: [0.03, 0.87, 0.73, 0.9],
    //     duration: 0.6,
    // };

    return (
        <main>
            <Mouse/>
            <motion.div className="project"
            initial="initial"
            animate="visible"
            exit="exit"
            // transition={transition}
            variants={variants}
            >
                <Navigation/>
                <Logo/>
                <ProjectContent/>
                <ButtonsNav left={"/about"} right={"/contact"}/>
            </motion.div>
        </main>
    );
};

export default Project;