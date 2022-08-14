import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import './style.css'

import { OrbitControls } from '@react-three/drei'
import { Computer } from '../3DObjects/Computer'

import { Link } from 'react-router-dom'

function PageContent() {
  return (

    <section className='container'>
      <span style={{ opacity: ".5", fontSize: "16px", letterSpacing: "1px", fontStyle: "italic" }}>{"<h1>"}</span>
      <div className="section-content row ">
        <div className="left col col-lg-6">
          <div className="greeting">
            <h1>Hi,</h1>
            <p>I'm <span style={{ fontSize: "70px", textShadow: "1px 7px 4px #e96c6c" }}>A</span>kin,</p>
            <h2>Front End Developer</h2>
            <Link to="/contact" className='contactBtn'>Contact me!</Link>
          </div>
        </div>
        <div className="right col col-lg-6">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={3} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <Computer />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <br />
      <span style={{ opacity: ".5", fontSize: "16px", letterSpacing: "1px", fontStyle: "italic" }}>{"</h1>"}</span>
    </section>

  )
}

export default PageContent