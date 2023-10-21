import React from 'react'
import { AiFillStar } from 'react-icons/ai';


const TestimonialCard = ({test}) => {
  return (
   <>
   <div className="testimonial_card">
    <div className="star" style={{
      fontSize:'25px'

    }}>
<AiFillStar />
<AiFillStar />
<AiFillStar />
<AiFillStar />
<AiFillStar />
    </div>
    <h2>"{test.title}"</h2>
    <p  style={{
      fontSize:'15px'
    }}>{test.content}</p>
    <p
    style={{
      fontSize:'15px',
      fontWeight:'bold'
    }}
    >{test.last}</p>

   </div>
   </>
  )
}

export default TestimonialCard