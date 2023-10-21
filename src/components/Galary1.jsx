import React from 'react'
import GalaryCard from './GalaryCard'
import GalaryImg from './GalaryImg'
const Galary1 = ({ price1, title1, content1, img,price2, title2, content2  }) => {
    return (
        <>
            <div className="galary-content">
                <GalaryCard
                    price={price1}
                    title={title1}
                    content={content1}
                />
                <GalaryImg
                    img={img}
                />
                <GalaryCard
                    price={price2}
                    title={title2}
                    content={content2}
                />

            </div>
        </>
    )
}

export default Galary1