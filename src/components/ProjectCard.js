import React from "react";

const ProjectCard = ({ projet }) => {
  return (
    <div className="card">
      <h1>{projet.title}</h1>
      <img src={projet.img} alt={projet.title} />
    </div>
  );
};

export default ProjectCard;
