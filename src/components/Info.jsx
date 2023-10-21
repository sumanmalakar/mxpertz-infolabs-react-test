import React from 'react'
import Form from './Form'

const Info = () => {
  return (
    <>
    <div class="info_container">
        <div className='info_overlay' />
        <div class="text">
         
         <div className="left">

          <div className='flex-l'>
            <h1>Hours of Operation</h1>
          </div>
          <br />
          <br />

          <div style={{padding:'1px'}}>
            <h3>MON - FRI</h3>
            <p className='p'>10:00am - 1:00pm</p>
            <p className='p'>4:00am - 10:30pm</p>
          {/* <div className="border-bottom"></div> */}
          </div>
          {/* <br /> */}

          <div
          style={{
            marginTop:'10px'
          }}
           className="border-bottom"></div>
          {/* <br /> */}
          {/* <br /> */}
          <div style={{
            marginTop:'10px'
          }}>
            <h3>SAT</h3>
            <p className='p'>3:00pm - 10:30pm</p>
          </div>
          <div
          style={{
            marginTop:'10px'
          }}
           className="border-bottom"></div>
          <div style={{
            marginTop:'10px'
          }}>
            <h3>SUN</h3>
            <p className='p'>We are closed</p>
          </div>

<div  style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
            marginTop:'10px'
          }}>

   <button className='btn'>MAKE A RESERVATION</button>
</div>



         </div>
        
  <div className="right">
    <div className='flex-l'>

        <h1>Drop Us a Line</h1>
        <p className='p'>Don't be shy. Let us know if you have any questions!</p>
        <button className='btn'>CONTACT US</button>
    </div>

<Form />
 
  </div>
           
           
        </div>
    </div>
    </>
  )
}

export default Info