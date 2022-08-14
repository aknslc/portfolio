import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { OrbitControls } from '@react-three/drei'
import { Head } from '../3DObjects/Head'
function About() {
    return (
        <>
            <section className='container'>
                <div className="about-section-content row ">
                    <div className="about-left-content col col-lg-6">
                        <span>{'<h1>'}</span>
                        <h1>
                            About <span style={{ color: "#08FDD8" }}>Me</span>
                        </h1>
                        <span>{'</h1>'}</span>

                        

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci in officia corrupti sed, quia cum optio laboriosam. Obcaecati corporis asperiores minus blanditiis incidunt, quis vitae aliquid perferendis quae, quos, tempora
                        </p>

                        <h3>Experience</h3>
                        <p>
                            I have been never working in a company but I am constantly developing projects for myself. If you want, you can view my <Link className=' links' to='/skills'>skills</Link> and <Link className='links' to='/projects'>projects</Link>
                        </p>

                    </div>
                    <div className="about-right-content col col-lg-6">
                        <Canvas>
                            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={3} />
                            <ambientLight intensity={.5} />
                            <directionalLight position={[-2, 5, 2]} intensity={1} />
                            <Suspense fallback={null}>
                                <Head />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About