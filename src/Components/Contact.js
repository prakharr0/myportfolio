import { faGithub, faLinkedin, faTwitter, faWhatsapp, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../My_Css/Contact.css';
import myResume from "../assets/resume/Resume.pdf";

const Contact = () => {
    const [state] = React.useState({
        subHeading: 'Contact', 
    })

    return (
        <div className="container-fluid" id="contact-me">
            <div className="container">
                <div className="pt-3 py-2 text-center">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            <div className="container contact">
                <h3 className="mt-5">Hello Again!</h3>
                
                <p className="new-line">
                        {'\n'}
                        I hope you were able to collect the required amount of information about me through this website.
                       {'\n'}
                        <a className = "nav-link pb-0" href={myResume} download="Resume-Prakhar Rathi">
                        Click here to download my resume.
                        </a> 
                        {'\n'}
                        {'\n'}
                        I am interested to work in the following areas:
                        <ol className="list-group">
                            
                            <li className="list-group-item container" >Web Application Development</li>
                            <li className="list-group-item container" >Android Application Development</li>
                            <li className="list-group-item container">Machine Learning</li>
                            <li className="list-group-item container">Deep Learning</li>
                            <li className="list-group-item container" >Full Stack Development</li>
                            <li className="list-group-item container">Natural Language Processing</li>
                            <li className="list-group-item container">Artificial Intelligence</li>
                            <li className="list-group-item container">Speech Recognition</li>
                            <li className="list-group-item container">Image Recognition</li>
                            <li className="list-group-item container">Areas involving programming in Java, Python, C#, MySQL</li>
                        </ol>
                        {'\n'}
                        {'\n'}
                        <h4>Are you a recruiter?</h4>
                        
                        
                        Send me an e-mail on my e-mail address: <FontAwesomeIcon icon={faEnvelope}/> prakhrathi@gmail.com ; or
                        {'\n'}
                        Talk to me on a phone call: <FontAwesomeIcon icon={faPhone}/> <FontAwesomeIcon icon={faWhatsapp}/> +49 176 56949714 
                        {'\n'}
                        {'\n'}
                        <h4>Do you have any suggestions for me?</h4>
                        Contact me either through the e-mail and phone number mentioned above, or connect with me through one of the 
                        following channels:
                        {'\n'}
                        {'\n'}

                        <ul className="pb-3">
                            <li><a href="https://twitter.com/imprakharrathi" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/rathiprakhar/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</a></li>
                            <li><a href="https://github.com/prakharr0" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</a></li>
                            <li><a href="https://rathimuzuwala.wordpress.com/" target="_blank"><FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon> Poetry</a></li>
                        </ul> 
                    </p>
            </div>
        </div>
    )
}

export default Contact
