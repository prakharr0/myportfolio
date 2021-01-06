import React from 'react';
import '../My_Css/Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper" id="header">
            <div className="main-info">
                <h1>M.Sc. - Computer Science (Student)</h1>
                <Typed className="typed-text" 
                strings={["Java", "Full Stack Development", "Artificial Intelligence", "Natural Language Processing", "Machine Learning", "and much more..."]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                <a href="#contact-me" className="btn-main-offer">Contact Me!</a>
            </div>
        </div>
    )
}

export default Header
