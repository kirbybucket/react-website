import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex" 
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div 
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex" 
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-cube qualification__icon"></i>
                        Skills & Interests
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active" 
                                : "qualification__content"
                        }
                    > 
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Systems Engineering</h3>
                                <span className="qualification__subtitle">Facultad Nacional de Ingeniería (FNI)</span>
                                <div className="qualification__calender">
                                    <i className="uil-university"></i> Oruro, Bolivia
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School Diploma</h3>
                                <span className="qualification__subtitle">Colegio Nacional Aniceto Arce</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-map-marker"></i> Oruro, Bolivia
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">English Language</h3>
                                <span className="qualification__subtitle">Smart Step Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-award"></i> KET, PET, MET Achieved
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">N/A</h3>
                                <span className="qualification__subtitle">N/A</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> N/A
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active" 
                                : "qualification__content"
                        }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Mobile Tech Enthusiast</h3>
                                <span className="qualification__subtitle">Certified Phone Repair</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-circuit"></i> Itcelmania
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Design & Creativity</h3>
                                <span className="qualification__subtitle">Graphic Tools Mastery</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-palette"></i> Instituto Técnico CCA
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Language Skills</h3>
                                <span className="qualification__subtitle">English: Intermediate (Certified)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-language"></i> Spanish: Native
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification