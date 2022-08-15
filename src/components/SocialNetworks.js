import React from "react";

const SocialNetworks = () => {

    const anim = () => {
        const icons = document.querySelectorAll('.content a');

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
            });

            link.addEventListener("mouseleave", (e) => {
                link.style.transform = ``;
            });
        });
    }

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/tom-sonvico/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </a>

        <a
          href="https://github.com/SonviCode"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fa-brands fa-github"></i>
          </li>
        </a>

        <a
          href="mailto:tom.sonvico.pro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fa-solid fa-envelope"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetworks;
