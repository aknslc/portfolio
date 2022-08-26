import React from 'react'
import '../../stytles/projects/projects.css'
import { projects } from '../../helpers/HelperItems'
import { AiFillEye } from 'react-icons/ai'
// modal
import ProjectModal from '../projectModal/ProjectModal'
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
                <ProjectModal />
                <div className="projects-right-content col-lg-12 mt-5">
                    <div className="cards row">

                        {projects.map((project) => (

                            <div key={project.id} className="project col-lg-4 col-md-6 col-sm-12">
                                <img src={project.img} alt="project" />
                                <div className="view-project">
                                    <AiFillEye size={40} data-bs-toggle="modal" data-bs-target={`#${project.title}`} />
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects