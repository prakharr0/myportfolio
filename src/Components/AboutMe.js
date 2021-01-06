import React from 'react';
import '../My_Css/Aboutme.css';
import MyPic from '../assets/images/me.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    const [state] = React.useState({
        subHeading: 'Introduction' , 
        text : 'Hello visitor! Welcome to my Website. \n \n My name is Prakhar Rathi and I am a student of Master in Science in Computer Science. I am pursuing my master studies at the Paderborn University in Germany (Universität Paderborn). \n I am passionate about Programming, Full-Stack Development, Natural Language Processing, Machine Learning, among other areas of Computer Science. I also write poetry in Hindi as a hobby. \n Tap on the links below to connect with me on social media. Continue on this website to learn more about me. Have a good day.'
    })

    return (

        <div className="container-fluid" >
            <div className="container" id="introduction-about">
                <div className="pt-3 py-2 text-center">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            <div className="container mt-5 about">
                <div className="row">
                    <div className="col-lg-5 mb-4 my-lg-auto">
                        <img src={MyPic} className="w-100"></img>
                    </div>

                    <div className="col-lg-7 ">
                        <p className="new-line">{state.text}</p>
                        <ul className="social">
                            <li><a href="https://twitter.com/imprakharrathi" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/rathiprakhar/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</a></li>
                            <li><a href="https://github.com/prakharr0" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</a></li>
                            <li><a href="https://rathimuzuwala.wordpress.com/" target="_blank"><FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon> Poetry</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
