import React, { useState } from 'react'
import DontMissCard from './DontMissCard'


const content = [
    {  id:'1',
    img:"https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg",
        title:"A Great Find",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        
    },
    {
        id:'2',
        img:"https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg",
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        
    },
    {
        id:'3',
        img:"https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg",
        title:"A Great Find",
        content:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi numquam nemo minus voluptatibus possimus illo? Architecto numquam ducimus omnis.",
        
    },
    
]


const DontMiss = () => {
const [testimonials, setTestimonials] = useState(content)

  return (
   <>
<div style={{
       backgroundColor:'#f9e6e6'
   }}>

   <div className="testimonials_con" >
            <div>
                <p>DON'T MISS</p>
                <div className="border-bottom"></div>

            </div>
            <h3>Our News And Events </h3>
<div style={{
    maxWidth:'50%'
}}>

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam ex modi repellat, rem officiis veniam, repellendus recusandae ipsam voluptatibus.</p>
</div>
   <div className="testimonials">

   {
       testimonials.map((test)=><DontMissCard test={test} key={test.id} />)
    }
    </div>


<button className='btn'>READ MORE</button>
   
   
    </div>

       </div>
   </>
  )
}

export default DontMiss