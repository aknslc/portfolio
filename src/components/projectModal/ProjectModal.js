import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { projects } from '../../helpers'
function ProjectModal() {
    return (
        <>
            {projects.map(project => (
                <div key={project.id} className="modal modal-lg fade" id={project.title} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{project.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div id={`carouselExampleControls${project.title}`} className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={project.projectImages[0]} className="d-block w-100" style={{ width: "full", height: "400px" }} alt="photo1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={project.projectImages[1]} className="d-block w-100" style={{ width: "full", height: "400px" }} alt="photo2" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${project.title}`} data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${project.title}`} data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>

                                    </button>
                                </div>
                            </div>
                            <div className="modal-footer" >
                                <a href={project.github}>
                                    <AiOutlineGithub size={50} color="#000" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ProjectModal