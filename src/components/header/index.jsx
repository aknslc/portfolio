import React from 'react'
import '../../stytles/header/header.css'
import logo from '../../assets/img/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
// router 
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="headerInner">
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container-fluid">
            <Link className="navbar-brand text-light logo" to='/'>
              <img src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <AiOutlineMenu size={30} color="#e96c6c"/>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to='/'>
                  <span>h</span>ome
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to='/about'>
                  <span>a</span>bout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/skills'>
                <span>s</span>kills
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to='/projects'>
                <span>p</span>rojects
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to='/contact'>
                <span>c</span>ontact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header