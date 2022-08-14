import React from 'react'
import './style.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'


function SocialBar() {
  return (
    <aside>
      <div className="socialMediaIcons">
        <a href='https://github.com/aknslc'>
          <AiFillGithub size={50} className='d-block my-2 icons' />
        </a>
        <a href='https://www.linkedin.com/in/ak%C4%B1n-sel-co%C5%9Fkun-355007208/'>
          <AiFillLinkedin size={50} className='d-block my-2 icons' />
        </a>
        <a href='https://www.instagram.com/aknselc/'>
          <AiOutlineInstagram size={50} className='d-block my-2 icons' />
        </a>
      </div>
    </aside>
  )
}

export default SocialBar