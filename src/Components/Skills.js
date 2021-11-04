import React from 'react';
import '../My_Css/Skills.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {MdDeveloperMode} from 'react-icons/md';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {faLaptopHouse} from '@fortawesome/free-solid-svg-icons';
import {faBullseye} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const [state] = React.useState({
        subHeading: 'Skills' , 
    })  

    return (
        <div className="container-fluid" id="skills-me">
            <div className="container">
                <div className="pt-3 py-2 text-center">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            <div className="container skills">
          
                <div class="row mt-5 pb-5">
                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-prog text-center py-1"><FontAwesomeIcon icon={faLaptopCode} size="2x" /></div>
                            <div className="card-body">
                                <div className="card-title text-center">Programming</div>
                                <div className="card-text text-center">
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Java</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Python</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">C</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 mr-2">OOPs</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Android</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 ml-2 my-1 mr-2">Docker</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Data Mining</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Git</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">GitLab CI/CD</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Maven</span>
                                    <span className="badge badge-pill badge-dark icon-bg-prog py-2 my-2 ml-2 mr-2">Spring-boot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-web text-center py-1"><MdDeveloperMode size="2.4rem"/></div>
                            <div className="card-body">
                                <div className="card-title text-center">Web Technology</div>
                                <div className="card-text text-center">
                                <span className="badge badge-pill badge-dark icon-bg-web py-2 my-2 ml-2 mr-2">HTML</span>
                                <span className="badge badge-pill badge-dark icon-bg-web py-2 my-2 ml-2 mr-2">CSS</span>
                                <span className="badge badge-pill badge-dark icon-bg-web py-2 my-2 ml-2 mr-2">ReactJS</span>
                                <span className="badge badge-pill badge-dark icon-bg-web py-2 my-2 mr-2">NodeJS</span>
                                <span className="badge badge-pill badge-dark icon-bg-web py-2 ml-2 my-1 mr-2">REST API</span>    
                             </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-data text-center py-1"><FontAwesomeIcon icon={faDatabase} size="2x" /></div>
                            <div className="card-body">
                                <div className="card-title text-center">Database</div>
                                    <div className="card-text text-center">
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 ml-2 mr-2">DDL</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 ml-2 mr-2">DML</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 ml-2 mr-2">SQL Queries</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 ml-2 mr-2">MySQL db</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 ml-2 mr-2">NoSQL db</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 mr-2">RDBMS</span>
                                    <span className="badge badge-pill badge-dark icon-bg-data py-2 my-2 mr-2">MySQL-Workbench</span>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-tools text-center py-1"><FontAwesomeIcon icon={faTools} size="2x" /></div>
                            <div className="card-body">
                                <div className="card-title text-center">Tools and IDEs</div>
                                    <div className="card-text text-center">
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Unity</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Android Studio</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Eclipse</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 mr-2">IntelliJ Idea</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">VS-Code</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 ml-2 my-1 mr-2">Spyder</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 ml-2 my-1 mr-2">PyCharm</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">VMWare</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Virtualbox</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Github</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Confluence</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">Trello</span>
                                        <span className="badge badge-pill badge-dark icon-bg-tools py-2 my-2 ml-2 mr-2">MS-Office</span>    
                                   </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-os text-center py-1"><FontAwesomeIcon icon={faLaptopHouse} size="2x" /></div>
                            <div className="card-body">
                                <div className="card-title text-center">Operating Systems</div>
                                    <div className="card-text text-center">
                                        <span className="badge badge-pill badge-dark icon-bg-os py-2 my-2 ml-2 mr-2">Windows</span>
                                        <span className="badge badge-pill badge-dark icon-bg-os py-2 my-2 ml-2 mr-2">Linux (Ubuntu)</span> 
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 py-2">
                        <div class="card h-100 skills-box">
                            <div className="icon-bg-soft text-center py-1"><FontAwesomeIcon icon={faBullseye} size="2x" /></div>
                            <div className="card-body">
                                <div className="card-title text-center">Soft Skills</div>
                                    <div className="card-text text-center">
                                        <span className="badge badge-pill badge-dark icon-bg-soft py-2 my-2 ml-2 mr-2">Strong Communication</span>
                                        <span className="badge badge-pill badge-dark icon-bg-soft py-2 my-2 ml-2 mr-2">Strategic Analysis</span>
                                        <span className="badge badge-pill badge-dark icon-bg-soft py-2 my-2 ml-2 mr-2">Goal Oriented</span> 
                                    </div>
                                

                                <div className="card-title text-center">Languages</div>
                                <div className="card-text text-center">
                                    <span className="badge badge-pill badge-dark icon-bg-soft py-2 my-2 ml-2 mr-2">English : Fluent</span>
                                    <span className="badge badge-pill badge-dark icon-bg-soft py-2 my-2 ml-2 mr-2">German : B1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>            
        </div>
    
    )
}

export default Skills
