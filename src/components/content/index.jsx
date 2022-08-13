import React from 'react'
import './style.css'

function PageContent() {
  return (

    <section className='container'>
      <div className="section-content row ">
        <div className="left col col-lg-6 text-start">
          <div className="greeting">
            <h1>Hi,</h1>
            <p>I'm <span style={{fontSize:"70px", textShadow:"1px 10px #e96c6c"}}>A</span>kin,</p>
            <h2>Front End Developer</h2>
            <div className="contactBtn">
              <button>Contact me!</button>
            </div>
          </div>
        </div>
        <div className="right col col-lg-6 text-center">
          right
        </div>

      </div>
    </section>

  )
}

export default PageContent