"use client"
import React from 'react';

const Ho = ({props}) => {
    const data = [
        { img: "/legalease.jpg" },
    ]
    return (
        <>
            <div className='py-[100px] h-[700px] w-[100%] flex relative'>
                
                <div className=' w-[60%] flex flex-col justify-evenly items-start p-[20px] relative'>
                <div className='rounded-full h-[200px] w-[200px] bg-pink-500 shadow-2xl absolute filter blur-3xl opacity-50 -z-10 bottom-[10px] right-[70px]'></div>
                <div className='rounded-full h-[200px] w-[200px] bg-purple-500 shadow-2xl absolute filter blur-3xl opacity-50 -z-10 top-[10px]'></div>
                    <h1 className='text-[50px] font-bold'>LegalEase</h1>
                    <p className='text-[20px] w-[80%]'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                    <div className='w-[250px] ml-[50%] flex justify-evenly'>
                        <button className='bg-blue-600 rounded-[10px] border-black border-[0px] px-[20px] py-[10px] text-white font-medium'>Log in</button>
                        <button className='bg-blue-600 rounded-[10px] border-black border-[0px] px-[20px] py-[10px] text-white font-medium'>Get app</button>
                    </div>
                </div>
                <div className='bg-red-400 w-[40%] ' src={props} alt="dp">
                    
                </div>

            </div>
        </>
    );
}

export default Ho