import React from 'react'
import './style.css'
// router 
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>

      <div className="headerInner">
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container-fluid">

            <a className="navbar-brand text-light logo" href="/">Akın</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link text-light" aria-current="page" href="#">
                  home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#">
                  about
                </a>
              </li>
              <li className="nav-item  dropdown">
                <a className="nav-link text-light" href="#">
                  skills
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href='#'>
                  projects
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href='#'>
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header