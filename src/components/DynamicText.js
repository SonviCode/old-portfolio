import React, { useEffect } from "react";

const DynamicText = () => {

  useEffect(() => {
    
    const text = document.querySelector(".text-target");
  
          const textLoad = () => {
              setTimeout(() => {
                  text.textContent = "Front-End";
              }, 0);
              setTimeout(() => {
                  text.textContent = "React.JS";
              }, 4000);
              setTimeout(() => {
                  text.textContent = "HTML-CSS";
              }, 8000); 
              setTimeout(() => {
                  text.textContent = "Javascript";
              }, 12000); 
              setTimeout(() => {
                  text.textContent = "Web";
              }, 16000); 
          }
  
          textLoad();
          setInterval(textLoad, 20000)
  }, [])
  
  

  return (
    <span className="container-dynamic-text">
      <span className="text text-immobile">Je suis un développeur : </span>
      <span className="text text-target"></span>
    </span>
  );
};

export default DynamicText;
