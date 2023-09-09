"use client"
import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="">
                <button
                    onClick={() => { setIsOpen((prev) => !prev) }}
                    className='bg-violet-500 w-[100px] h-[55px] flex items-center justify-evenly py-[5px] rounded-[5px] tracking-wider shadow-lg border-[2px] border-purple-300 active:border-black duration-200 active:text-white'
                >
                    <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                    <img src="/img1.jpg" alt='hp'></img>
                    </div>
                    
                    {!isOpen ?
                        (<AiOutlineCaretDown />) : (<AiOutlineCaretUp />)
                    }
                </button>
                {isOpen &&
                    (
                        <>
                            <div className='bg-slate-100 w-[150px] absolute p-4 rounded-lg flex items-start flex-col'>
                                <div className=' w-full hover:bg-slate-200 cursor-pointer p-[4px] rounded-[4px]'><p>home</p></div>
                                <div className=' w-full hover:bg-slate-200 cursor-pointer p-[4px] rounded-[4px]'><p>about</p></div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Profile