import React from 'react'
import '../../stytles/socialBar/socialBar.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'


function SocialBar() {
  return (
    <aside>
      <div className="socialMediaIcons">
        <a href='https://github.com/aknslc'>
          <AiFillGithub  className='d-block my-2 icons' />
        </a>
        <a href='https://www.linkedin.com/in/ak%C4%B1n-sel-co%C5%9Fkun-355007208/'>
          <AiFillLinkedin  className='d-block my-2 icons' />
        </a>
        <a href='https://www.instagram.com/aknselc/'>
          <AiOutlineInstagram  className='d-block my-2 icons' />
        </a>
      </div>
    </aside>
  )
}

export default SocialBar