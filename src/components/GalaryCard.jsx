import React from 'react'

const GalaryCard = ({price,title,content}) => {
  return (
<>
<div className="galary_card">
    <h5>${price}</h5>
    <h3>{title}</h3>
    <p>{content}</p>
</div>
</>
  )
}

export default GalaryCard