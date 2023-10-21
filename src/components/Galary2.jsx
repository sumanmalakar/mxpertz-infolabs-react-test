import React from 'react'
import GalaryCard from './GalaryCard'
import GalaryImg from './GalaryImg'
const Galary2 = ({img1,img2,price,title,content}) => {
  return (
    <>
    <div className="galary-content">
<GalaryImg img={img1} />
<GalaryCard
price={price}
title={title}
content={content}
 /> 
<GalaryImg img={img2} />


    </div>
    </>
  )
}

export default Galary2