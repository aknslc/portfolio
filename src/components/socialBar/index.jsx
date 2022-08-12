import React from 'react'
import  './style.css'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

function SocialBar() {
  return (
    <aside>
      <div className="socialMediaIcons">
        <AiFillGithub size={50} className='d-block my-2'/>
        <AiFillLinkedin size={50} className='d-block my-2'/>
      </div>
    </aside>
  )
}

export default SocialBar