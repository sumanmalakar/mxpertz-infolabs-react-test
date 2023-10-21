import React from 'react'
import { BsFillCartDashFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
    <div className='flex'>
        <div className="left">
            <h1>Restaurant Landing Page</h1>
        </div>
        <div className="right">
            <div className="link">Landing</div>
            <div className="link">Home</div>
            <div className="link">Gallery</div>
            <div className="link">Shop</div>
            <div className="link">Blog</div>
            <div className="link">About</div>
            <div className="link">Team</div>
            <div className="link">Contact</div>
            <div className="link cart"><BsFillCartDashFill /></div>
        </div>
    </div>
    </>
  )
}

export default Navbar