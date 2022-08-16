import React from 'react';
import ButtonsNav from '../components/ButtonsNav';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import ProjectContent from '../components/ProjectContent';

const Project = () => {
    return (
        <main>
            <Mouse/>
            <div className="project">
                <Navigation/>
                <Logo/>
                <ProjectContent/>
                <ButtonsNav left={"/"} right={"/contact"}/>
            </div>
        </main>
    );
};

export default Project;