import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'


const content = [
    {  id:'1',
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        last:"Divi",
    },
    {
        id:'2',
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        last:"Divi",
    },
    {
        id:'3',
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        last:"Divi",
    },
    {
        id:'4',
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        last:"Divi",
    },
]


const Testimonials = () => {
const [testimonials, setTestimonials] = useState(content)

  return (
   <>

   <div className="testimonials_con">
            <div>
                <p>TESTIMONIALS</p>
                <div className="border-bottom"></div>

            </div>
            <h3>What People are Saying</h3>

   <div className="testimonials">

   {
       testimonials.map((test)=><TestimonialCard test={test} key={test.id} />)
    }
    </div>
   
    </div>

   </>
  )
}

export default Testimonials