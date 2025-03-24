import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bxs-institution about__icon' ></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">Systems Engineering (FNI)</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Personal Interests</h3>
                <span className="about__subtitle">App Development</span>
            </div>

            <div className="about__box">
            <i class='bx bx-calendar-check about__icon' ></i>
                <h3 className="about__title">Availability</h3>
                <span className="about__subtitle">Seeking Opportunities</span>
            </div>
        </div>
    )
}

export default Info