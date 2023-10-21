import React from 'react'

const GalaryCard = ({price,title,content}) => {
  return (
<>
<div className="galary_card">
    <h2>${price}</h2>
    <h1>{title}</h1>
    <p>{content}</p>
</div>
</>
  )
}

export default GalaryCard