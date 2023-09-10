"use client"
import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const SelectMenu = () => {
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


            <div>
                <form action="/action_page.php" className='bg-blue-200 flex justify-start'>
                    <label for="cars">Choose a car:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="food" id="cars" className='border-black border-[2px] rounded-lg p-[10px]'>
                        <option value="briyani" className='py-[4px]'>Briyani</option>
                        <option value="tofu" className='py-[4px]'>Tofu</option>
                        <option value="pasta" className='py-[4px]'>Pasta</option>
                        <option value="ramen" className='py-[4px]'>Ramen</option>
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default SelectMenu