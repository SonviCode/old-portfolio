import React, { useEffect, useState } from "react";
import ButtonsNav from "../components/ButtonsNav";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.35 },
      x: -100,
    },
  };

  // const transition = {
  //     ease: [0.03, 0.87, 0.73, 0.9],
  //     duration: 0.6,
  // };

  const [listProject, setListProject] = useState(projectsData);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  let direction = "vertical";
  
    if (window.innerWidth >= 576) {
      direction = "vertical";
    } else {
      direction = "horizontal";
    }
 
  return (
    <main>
      <Mouse />
      <motion.div
        className="project"
        initial="initial"
        animate="visible"
        exit="exit"
        // transition={transition}
        variants={variants}
      >
        <Navigation />
        <Logo />
        <ButtonsNav left={"/about"} right={"/contact"} />
        <div className="project-main">
          <div className="project-content">
            <Swiper
              direction={direction}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {listProject.map((projet) => (
                <>
                  <SwiperSlide>
                    <ProjectCard projet={projet} key={projet.id} />
                    {/* <div className="card">
                    <h1>{projet.title}</h1>
                    <img src={projet.img} alt={projet.title} />
                    </div>
                   */}
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
        <span
          className="random-circle"
          style={{ left, top, transform: size }}
        ></span>
      </motion.div>
    </main>
  );
};

export default Project;
