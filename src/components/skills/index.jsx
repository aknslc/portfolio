import React from 'react'
import '../../stytles/skills/skills.css'
import { skills } from '../../helpers'
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
                    {skills.map(skill => (
                        <>
                            <span>{skill.title}</span>
                            <div className="skill">
                                <p className={skill.classname}>
                                </p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills