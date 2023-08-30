"use client"
import React from 'react';
import Card from './Card';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'

import Slider from 'react-slick';



function MySlider() {
    const data = [
        { img: "/img1.jpg" },
        { img: "/img2.jpg" },
        { img: "/img3.jpg" },
        { img: "/img4.jpg" },
        { img: "/img5.jpg" },
        { img: "/img2.jpg" },
        { img: "/img3.jpg" },
        { img: "/img4.jpg" },
        { img: "/img5.jpg" },
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        //nextArrow: <NextArrow/>,
        //prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
        //afterChange: current=>{
        //    setProgress(100/(data.length-slidesToShow+1)*(current+1));
        //    console.log(slidesToShow);
        //}
        //{data.map((element, index) => <div><Card key={index} img={element.img} /><div/>)}

    };
    return (
        <>
            <div className=''>
                <button><AiOutlineCaretLeft /></button>
                <button><AiOutlineCaretRight /></button>
            </div>
            <div className='carousel p-4 flex items-center justify-start overflow-x-auto relative'>
            {data.map( (element, index) => <Card key={index} img={element.img} />)}
            </div>

        </>
    )
}

export default MySlider