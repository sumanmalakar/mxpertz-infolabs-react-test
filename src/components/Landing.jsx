import React from 'react'
import { BsArrowDown } from 'react-icons/bs';
const Landing = () => {
  return (
    <>
    <div class="container">
        <div className='overlay' />
        <div class="text">
           <div  className='space'>
            <h1>Only Quality Food</h1>
           </div>
           <div className='space p'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis omnis animi similique tempora, maxime veniam ea tempore excepturi maiores impedit cupiditate quisquam dicta?
           </div>

           <div className='space'>
            <button className='btn-outline'>VIEW MENU</button>
            <button className='btn' style={{
              marginLeft:'20px'
            }}>RESERVATION</button>

           </div>
           <div>
            <BsArrowDown /> 
           </div>
        </div>
    </div>
    </>
  )
}

export default Landing