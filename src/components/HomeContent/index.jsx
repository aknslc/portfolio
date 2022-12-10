import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import '../../stytles/content/pageContent.css'

import { OrbitControls } from '@react-three/drei'
import { Computer } from '../3DObjects/Computer'

import { Link } from 'react-router-dom'

function PageContent() {
  return (

    <section className='container'>

      <div className="section-content row ">
        <div className="left col col-lg-6 col-md-12 col-sm-12">
          <div className="greeting">
            <span style={{ opacity: ".5", fontSize: "16px", letterSpacing: "1px", fontStyle: "italic", display: "block" }}>{"<h1>"}</span>
            <h1>Hi,</h1>
            <p>I'm <span style={{ fontSize: "70px", textShadow: "1px 7px 4px #e96c6c" }}>A</span>kın,</p>
            <h2>Front End Developer</h2>
            <Link to="/contact" className='contactBtn mb-5'>Contact me!</Link>
            <span style={{ opacity: ".5", fontSize: "16px", letterSpacing: "1px", fontStyle: "italic", display: "block" }}>{"</h1>"}</span>
          </div>
        </div>
        <div className="right col col-lg-6 col-md-12 col-sm-12">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <Computer />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <br />

    </section>

  )
}

export default PageContent