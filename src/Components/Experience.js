import React from 'react';
import '../My_Css/Experience.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faBroadcastTower, faCertificate, faCode, faPodcast, faRobot, faServer, faStamp} from '@fortawesome/free-solid-svg-icons';
import { faFirefoxBrowser, faJava, faKeycdn, faVaadin } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {

    const [state] = React.useState({
        subHeading: 'Experience' , 
    })

    return (
        <div className="every-other-blue-back" id="experience-me">
            <div className="container every-other-blue-back">
                <div className="pt-3 py-2 text-center"  id="exp">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            
            <div className="container experience my-5 " id="exp">
                
            <h1 className="text-center">Work Experience</h1>
                <div class="row py-3">
                    <div class="col-md-12">
                        <div class="main-timeline">
                        <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faBriefcase}/>
                                    </div>
                                    <h3 class="title">Job: Project Engineer</h3>
                                    <h5>Wipro Ltd., Bengaluru, India</h5>
                                    <h6>07/2018 - 02/2019</h6>
                                    <p class="description new-line text-left">
                                        •	Programming tasks using Java, JDBC, Python, etc. {'\n'}
                                        •	Database Management and Manipulation using MySQL. {'\n'}
                                        •  	Weekly reports and presentations using MS-Excel, MS-Word, and MS-PowerPoint.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container experience mt-5 " id="exp">
                
            <h1 className="text-center">Projects, Seminar, and Certifications</h1>
                <div class="row py-5">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faRobot}/>
                                    </div>
                                    <h3 class="title">Project: Virtual and Augmented Reality Assisted Robot Programming</h3>
                                    <h5>Universität Paderborn, Germany</h5>
                                    <h6>Since 04/2020</h6>
                                    <p class="description new-line text-left">
                                        •	Technical Stack: Unity, C#, Android, Java, LeJOS, Docker {'\n'}
                                        •	Android App Development for programming robots in Augmented Reality environment
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faFirefoxBrowser}/>
                                    </div>
                                    <h3 class="title">Project: Portfolio Website (current website)</h3>
                                    <h5>Personal Project</h5>
                                    <h6>01/2021</h6>
                                    <p class="description new-line text-left">
                                        •	Front End: ReactJS, Bootstrap {'\n'}
                                        •	Deployed using Github
                                    </p>
                                </div>
                            </div>


                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faServer}/>
                                    </div>
                                    <h3 class="title">Project: Student Service: Full Stack Web Application</h3>
                                    <h5>Personal Project</h5>
                                    <h6>12/2020</h6>
                                    <p class="description new-line text-left">
                                        •	Front End: ReactJS deployed on NodeJS {'\n'}
                                        •	Back End: Spring-boot REST API {'\n'}
                                        •	Database: MySQL {'\n'}
                                        •	Back end communicates to the MySQL Database using JPA {'\n'}
                                    </p>
                                    <a href="https://github.com/prakharr0/StudentService" target="_blank" className="navbar nav-link">
                                        Visit on Github
                                    </a>
                                </div>
                            </div>


                            
                            
                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faPodcast}/>
                                    </div>
                                    <h3 class="title">Seminar: Learning to Sort (Machine Learning)</h3>
                                    <h5>Universität Paderborn</h5>
                                    <h6>04/2020 - 09/2020</h6>
                                    <p class="description new-line text-left">
                                        <a href="https://github.com/prakharr0/Seminar_Paper-Learning-to-Sort-" target="_blank" className="navbar nav-link">
                                            Read Paper on Github
                                        </a>
                                    </p>
                                </div>
                            </div>

                            
                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faPodcast}/>
                                    </div>
                                    <h3 class="title">Seminar: Introduction to Robot Operating System: Main Concepts and Application Scenarios</h3>
                                    <h5>Universität Paderborn</h5>
                                    <h6>04/2020 - 06/2020</h6>
                                    <p class="description new-line text-left">
                                        <a href="https://github.com/prakharr0/paper_Robot_Operating_System" target="_blank" className="navbar nav-link">
                                            Read Paper on Github
                                        </a>
                                    </p>
                                </div>
                            </div>

                            
                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faStamp}/>
                                    </div>
                                    <h3 class="title">Certificate: Machine Learning A-Z™: Hands-on Python and R in Data Science</h3>
                                    <h5>Udemy</h5>
                                    <h6>03/2020</h6>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faJava}/>
                                    </div>
                                    <h3 class="title">Industrial Training: Java-J2EE</h3>
                                    <h5>Aptron Solutions Private Limited, Noida, U.P., India</h5>
                                    <h6>10/2017</h6>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faJava}/>
                                    </div>
                                    <h3 class="title">Certification of Proficiency in Java/J2EE</h3>
                                    <h5>Ducat, Noida, U.P., India</h5>
                                    <h6>04/2017</h6>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="timeline-content">
                                    <div class="timeline-icon">
                                        <FontAwesomeIcon icon={faCode}/>
                                    </div>
                                    <h3 class="title">Other Projects:</h3>
                                    <h5>Personal Projects</h5>
                                    <p class="description new-line text-left">
                                        •	E-commerce Android App using Android Studio, Java, and Firebase realtime database. Work in progress. <a href="https://github.com/prakharr0/MyApp" target="_blank" className="nav-link">Tap here: Visit on Github</a>
                                        •	E-commerce Web App using ReactJS and Firebase realtime database. Work in progress. <a href="https://github.com/prakharr0/Ecomm-ReactJS/tree/master" target="_blank" className="nav-link">Tap here: Visit on Github</a>
                                        •	Java code to convert Relaxed JSON file to CSV. <a href="https://github.com/prakharr0/RelaxedJSONtoCSV" target="_blank" className="nav-link">Visit on Github</a>
                                    </p>
                                </div>
                            </div>
   
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    

    )
}


export default Experience
