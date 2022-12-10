import React from 'react'
import ContactUs from '../Form/index'
import '../../stytles/contact/contact.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Raven } from '../3DObjects/Raven'

function Contact() {
    return (
        <section className='container'>
            <div className="contact-section-content row ">
                <div className="contact-left-content  col-lg-6">
                    <span>{'<h1>'}</span>
                    <h1 style={{ letterSpacing: "4px" }}>
                        <span style={{ color: "#08FDD8" }}>C</span>ontact
                    </h1>
                    <span>{'</h1>'}</span>
                    <ContactUs />
                </div>
                <div className="contact-right-content col-lg-6">
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={.5} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Suspense fallback={null}>
                            <Raven />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Contact