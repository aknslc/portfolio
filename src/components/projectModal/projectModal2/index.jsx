import React from 'react'
// photos
import photo1 from '../../../assets/img/projectsImage/projectImages2/1.png'
import photo2 from '../../../assets/img/projectsImage/projectImages2/2.png'

// icon
import { AiOutlineGithub } from 'react-icons/ai'
function ProjectModal2() {
    return (
        <>


            <div className="modal modal-lg fade" id="project2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Getir Clone</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={photo1} className="d-block w-100" style={{ width: "full", height: "400px" }} alt="photo1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={photo2} className="d-block w-100" style={{ width: "full", height: "400px" }} alt="photo2" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer" >


                            <a href='https://github.com/aknslc/getir_clone_react'>
                                <AiOutlineGithub size={50} color="#000" />
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectModal2