import React from 'react'
// import { AiFillStar } from 'react-icons/ai';


const DontMissCard = ({test}) => {
  return (
   <>
   <div className="DontMiss_card ">
    <div className='img'>
   <img src={test.img} alt="" />

    </div>
    <div className="content">

    <h2>{test.title}</h2>
    <p className='cat'>CATEGORY</p>
    <p style={{
      fontSize:'15px'
    }} >{test.content}</p>
   
    </div>

   </div>
   </>
  )
}

export default DontMissCard