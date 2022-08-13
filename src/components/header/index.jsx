import React from 'react'
import './style.css'
import logo from '../../assets/img/logo.png'

// router 
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>

      <div className="headerInner">
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container-fluid">

            <Link className="navbar-brand text-light logo" to='/'>
              <img src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link text-light" aria-current="page" to='/'>
                  .home()
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to='/aboutme'>
                  .about()
                </Link>
              </li>
              <li className="nav-item  dropdown">
                <Link className="nav-link text-light" to='/skills'>
                  .skills()
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to='/projects'>
                  .projects()
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to='/contact'>
                  .contact()
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header