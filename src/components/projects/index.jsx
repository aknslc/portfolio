import React from 'react'
import './style.css'

import project1 from '../../assets/img/projectsImage/projectImages1/1.png'
import project2 from '../../assets/img/projectsImage/projectImages2/1.png'
import project3 from '../../assets/img/projectsImage/projectImages3/1.png'
import project4 from '../../assets/img/projectsImage/projectImages4/1.png'

import { AiFillEye } from 'react-icons/ai'

// modals
import ProjectModal1 from '../projectModal/projectModal1'
import ProjectModal2 from '../projectModal/projectModal2'
import ProjectModal3 from '../projectModal/projectModal3'
import ProjectModal4 from '../projectModal/projectModal4'

function Projects() {
    return (
        <section className='container'>
            <div className="projects-section-content row ">
                <div className="projects-left-content col-lg-12">
                    <span>{'<h1>'}</span>
                    <h1 style={{ letterSpacing: "4px" }}>
                        <span style={{ color: "#08FDD8" }}>P</span>rocejts
                    </h1>
                    <span>{'</h1>'}</span>
                </div>

                <ProjectModal1/>
                <ProjectModal2/>
                <ProjectModal3/>
                <ProjectModal4/>

                <div className="projects-right-content col-lg-12 mt-5">
                    <div className="cards row">
                        <div className="project col-lg-4 col-md-6 col-sm-12">
                            <img src={project1} alt="project1" />
                            <div className="view-project">
                                <AiFillEye size={40} data-bs-toggle="modal" data-bs-target="#project1" />
                            </div>
                        </div>
                        <div className="project col-lg-4 col-md-6 col-sm-12">
                            <img src={project2} alt="project2" />
                            <div className="view-project">
                                <AiFillEye size={40} data-bs-toggle="modal" data-bs-target="#project2" />
                            </div>
                        </div>
                        <div className="project col-lg-4 col-md-6 col-sm-12">
                            <img src={project3} alt="project3" />
                            <div className="view-project">
                                <AiFillEye size={40} data-bs-toggle="modal" data-bs-target="#project3" />
                            </div>
                        </div>
                        <div className="project col-lg-4 col-md-6 col-sm-12">
                            <img src={project4} alt="project4" />
                            <div className="view-project">
                                <AiFillEye size={40} data-bs-toggle="modal" data-bs-target="#project4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Projects