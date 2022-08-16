import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import FormContact from '../components/FormContact';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation/>
                <Logo/>
                <FormContact/>
            </div>
        </main>
    );
};

export default Contact;