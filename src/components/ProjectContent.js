import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectContent = () => {
  const [listProject, setListProject] = useState(projectsData);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700 ) + "px" );
    setTop(Math.floor(Math.random() * 200 + 150 ) + "px" );
    setSize("scale(" + (Math.random() + 0.7) + ")" );
  }, [])
  

  console.log(projectsData);

  return (
    <div className="project-main">
      <div className="project-content">
        {listProject.map((projet) => 
        <ProjectCard projet={projet} key={projet.id}/>
        )}
      <span className="random-circle"
      style={{left, top, transform: size}}
      ></span>
      </div>
    </div>
  );
};

export default ProjectContent;
