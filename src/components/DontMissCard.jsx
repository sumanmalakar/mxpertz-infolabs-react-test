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

    <h5>{test.title}</h5>
    <p className='cat'>CATEGORY</p>
    <p>{test.content}</p>
   
    </div>

   </div>
   </>
  )
}

export default DontMissCard