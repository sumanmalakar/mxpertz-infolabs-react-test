import React from 'react'
import { AiFillStar } from 'react-icons/ai';


const TestimonialCard = ({test}) => {
  return (
   <>
   <div className="testimonial_card">
    <div className="star">
<AiFillStar />
<AiFillStar />
<AiFillStar />
<AiFillStar />
<AiFillStar />
    </div>
    <h5>"{test.title}"</h5>
    <p>{test.content}</p>
    <p className='p'>{test.last}</p>

   </div>
   </>
  )
}

export default TestimonialCard