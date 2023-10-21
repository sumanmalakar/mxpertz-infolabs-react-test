import React, { useState } from 'react'
import Galary1 from './Galary1'
import Galary2 from './Galary2'
const Galary = () => {
 
  return (
    <>
    <div className="galary">
        <div className="galary_con">
           

    <Galary1
  price1={26.95}
  title1="Grilled Fillet"
  content1=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."
  img="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
  price2={53.3}
  title2="Chicken Breast"
  content2=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."
 

      />
    <Galary2
      img1="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
      img2="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
      price={40.5}
      title="King Crab"
      content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."

     />
    <Galary1
      price1={40.5}
      title1="Sea Tront"
      content1=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."
      img="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
      price2={22.3}
      title2="Roasted Bakra"
      content2=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."
    />
    <Galary2
     img1="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
     img2="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
     price={22.3}
     title="Roasted Bakra"
     content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci maxime voluptates dolores aliquam quidem! Itaque suscipit, fugiat voluptatem sapiente, debitis maiores esse magni expedita nisi molestiae quibusdam nesciunt ut adipisci."


    />
        </div>

    </div>
    </>
  )
}

export default Galary