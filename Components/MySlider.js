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
        { img: "/legalease.jpg" },
    ]

    
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 800;
    }

    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 800;
    }

    return (
        <>
            <div className='w-[100%] flex justify-center items-centerr'>
            <div className='py-[5px] px-[20px]'>
                <button onClick={scrollLeft} className=' hover:bg-slate-100 p-[20px] rounded-full m-[3px] shadow-lg'>
                    <AiOutlineCaretLeft />
                </button>
                <button onClick={scrollRight} className=' hover:bg-slate-100 p-[20px] rounded-full m-[3px] shadow-lg'>
                    <AiOutlineCaretRight />
                </button>
            </div>
            </div>
            
            <div id='content' className='carousel scroll-smooth p-4 flex items-center justify-start overflow-x-auto relative scrollbar-hide'>
            {data.map( (element, index) => <Card key={index} img={element.img} />)}
            </div>

        </>
    )
};

export default MySlider