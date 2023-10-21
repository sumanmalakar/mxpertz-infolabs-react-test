import React from 'react'
import { AiFillFacebook,AiFillTwitterCircle , AiOutlineGooglePlus,AiOutlineWifi } from 'react-icons/ai';


const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer_con">
        <div className="left">
<p>Designed by Elegant Themes | Powered by WordPress</p>
        </div>
        <div className="right">
<div><AiFillFacebook /></div>
<div><AiFillTwitterCircle /></div>
<div><AiOutlineGooglePlus /></div>
<div><AiOutlineWifi /></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer