import React from 'react';

const Ho = () => {
    return (
        <>
            <div className='py-[100px] h-[700px] w-[100%] flex'>
                <div className='rounded-full h-[40px] w-[40px] bg-pink-500 shadow-2xl'></div>
                <div className=' w-[60%] flex flex-col justify-evenly items-start p-[20px]'>
                    <h1 className='text-[50px] font-bold'>LegalEase</h1>
                    <p className='text-[20px]'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    <div className='w-[250px] flex justify-evenly'>
                    <button className='bg-blue-600 rounded-[10px] border-black border-[0px] px-[20px] py-[10px] text-white font-medium'>Log in</button>
                    <button className='bg-blue-600 rounded-[10px] border-black border-[0px] px-[20px] py-[10px] text-white font-medium'>Get app</button>
                </div>
                </div>
                <div className='bg-purple-400 w-[40%]'>
                    image
                </div>
                
            </div>
        </>
    );
}

export default Ho