import React from 'react'
import '../../stytles/skills/skills.css'
function Skills() {
    return (
        <section className='container'>
            <div className="skills-section-content row ">
                <div className="skills-left-content col-lg-6 col-md-12">
                    <span>{'<h1>'}</span>
                    <h1 style={{ letterSpacing: "4px" }}>
                        <span style={{ color: "#08FDD8" }}>S</span>kills
                    </h1>
                    <span>{'</h1>'}</span>
                </div>
                <div className="skills-right-content col-lg-6 col-md-12">
                    <span>Node JS</span>
                    <div className="skill">
                        <p className='skillsExperience node'>
                        </p>
                    </div>
                    <span>React JS</span>
                    <div className="skill">
                        <p className='skillsExperience react'>
                        </p>
                    </div>
                    <span>Javascript</span>
                    <div className="skill">
                        <p className='skillsExperience javascript'>
                        </p>
                    </div>
                    <span>Html5</span>
                    <div className="skill">
                        <p className='skillsExperience html'>
                        </p>
                    </div>
                    <span>Css3</span>
                    <div className="skill">
                        <p className='skillsExperience css'>
                        </p>
                    </div>
                    <span>Bootstrap 5</span>
                    <div className="skill">
                        <p className='skillsExperience bootstrap'>
                        </p>
                    </div>
                    <span>Tailwind Css</span>
                    <div className="skill">
                        <p className='skillsExperience tailwind'>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills