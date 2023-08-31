"use client"
import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="">
                <button
                    onClick={() => { setIsOpen((prev) => !prev) }}
                    className='bg-slate-100 w-[100px] py-[5px] px-[10px] flex items-center justify-evenly font-bold text-[12px] rounded-full tracking-wider border-slate-300 border-2 active:border-black duration-200 active:text-white'
                >
                    <p>Click</p>
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

export default DropDown