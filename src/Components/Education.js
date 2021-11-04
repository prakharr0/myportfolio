import React from 'react'
import '../My_Css/Education.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faSchool} from '@fortawesome/free-solid-svg-icons';

const Education = () => {

    const [state] = React.useState({
        subHeading: 'Education'
    })

    return (
        <div className="every-other-blue-back" id="education-me">
            <div className="container every-other-blue-back">
                <div className="pt-3 py-2 text-center">
                    <h1>{state.subHeading}</h1>
                </div>
            </div>

            <div className="container education mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline2">
                    <div className="timeline">
                            <span className="icon"><FontAwesomeIcon icon={faUniversity}/></span>
                            <a href="https://www.uni-paderborn.de/" target="_blank" className="timeline-content">
                                <h3 className="title text-center">M.Sc. - Computer Science</h3>
                                <div className="border-top border-dark w-80 "></div>
                                <p className="description new-line mt-3">
                                    University  :  Universität Paderborn, Germany {'\n'} Duration  : Since 2019
                                </p>
                            </a>
                        </div><div className="timeline">
                            <span className="icon"><FontAwesomeIcon icon={faGraduationCap}/></span>
                            <a href="https://jssaten.ac.in/" target="_blank" className="timeline-content">
                                <h3 className="title text-center">B.Tech. - Computer Science and Engineering</h3>
                                <div className="border-top border-dark w-80 "></div>
                                <p className="description new-line mt-3">
                                    University  :  Dr. A.P.J.A.K.T.U, U.P., India {'\n'} College : JSSATE Noida {'\n'}Duration  : 2014 - 2018
                                </p>
                            </a>
                        </div>
                        <div className="timeline">
                            <span className="icon"><FontAwesomeIcon icon={faSchool}/></span>
                            <a href="http://www.sdpsmzn.com/"  target="_blank" className="timeline-content">
                                <h3 className="title text-center">Senior Secondary School (Class 12th)</h3>
                                <div className="border-top border-dark w-80 "></div>
                                <p className="description new-line mt-3">
                                    School  :  S.D. Public School, MZN, U.P., India {'\n'} Board, Year : CBSE, 2013 {'\n'}Score : 92.8% (Overall), 95.33% (PCM)
                                </p>
                            </a>
                        </div>
                        <div class="timeline">
                        <span className="icon"><FontAwesomeIcon icon={faSchool}/></span>
                            <a href="http://shardeinschool.com/" target="_blank" className="timeline-content">
                                <h3 className="title text-center">Elementary to High School (Upto Class 10th)</h3>
                                <div className="border-top border-dark w-80 "></div>
                                <p className="description new-line mt-3">
                                    School  :  Shardein School, MZN, U.P., India {'\n'} Board, Year (High School) : CBSE, 2011 {'\n'}Score (High School) : C.G.P.A = 10/10
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Education
