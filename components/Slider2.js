import React, { useState } from 'react'
import Image from 'next/image'
import {FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa'

export const Slider2 = ({slides}) => {
const SliderData = [
    {
        image : "/slider2/imagen1.jpg"
    },
    {
        image : "/slider2/imagen2.jpg"
    },
    {
        image : "/slider2/imagen3.jpg"
    },
    {
        image : "/slider2/imagen4.jpg"
    },
    
]

const [current,setCurrent] = useState(0);
const lengthArray = SliderData.length

const nextSlide = () =>{
    setCurrent(current === lengthArray-1 ? 0 : current +1);
}

const prevSlide = () =>{
    setCurrent(current === 0 ? lengthArray-1 : current-1);
}

if(!Array.isArray(SliderData) || lengthArray <=0 ){
    return null
}
    return (
        <>
        <div className="slider">
            <FaArrowCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowCircleRight className="right-arrow" onClick={nextSlide}/>
           {SliderData.map((slide,index)=>{
                return ( 
                    <div className={index === current ? 'slide-active' : 'slide' } key={index}>
                        {index===current && (<Image src={slide.image} alt="imagen" width={2500} height={1042} ></Image>)}
                    </div>
                )
            })} 
        </div>
        </>
    )
}

export default Slider2;