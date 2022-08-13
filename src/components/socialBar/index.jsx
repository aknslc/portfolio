import React from 'react'
import  './style.css'
import {AiFillGithub,AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'

function SocialBar() {
  return (
    <aside>
      <div className="socialMediaIcons">
        <AiFillGithub size={50} className='d-block my-2 icons'/>
        <AiFillLinkedin size={50} className='d-block my-2 icons'/>
        <AiOutlineInstagram size={50} className='d-block my-2 icons'/>
      </div>
    </aside>
  )
}

export default SocialBar