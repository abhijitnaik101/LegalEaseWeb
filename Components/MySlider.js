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

    
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 800;
    }

    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 800;
    }

    return (
        <>
            <div className='py-[5px] px-[20px]'>
                <button onClick={scrollLeft} className='bg-blue-200 hover:bg-slate-200 p-[10px] rounded-full m-[3px] shadow-lg'>
                    <AiOutlineCaretLeft />
                </button>
                <button onClick={scrollRight} className='bg-blue-200 hover:bg-slate-200 p-[10px] rounded-full m-[3px] shadow-lg'>
                    <AiOutlineCaretRight />
                </button>
            </div>
            <div id='content' className='carousel scroll-smooth p-4 flex items-center justify-start overflow-x-auto relative scrollbar-hide'>
            {data.map( (element, index) => <Card key={index} img={element.img} />)}
            </div>

        </>
    )
};

export default MySlider