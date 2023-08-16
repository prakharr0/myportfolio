import React from 'react';
import '../My_Css/Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper" id="header">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed className="typed-text"
                strings={["Java", "Spring Boot", "Web Development", "Android Application Development" , "Full Stack Development", "Python", "Natural Language Processing", "Machine Learning", "and much more..."]}
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
