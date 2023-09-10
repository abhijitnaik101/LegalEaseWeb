import Link from 'next/link';
import React from 'react';

const Res = () => {
    return (
        <>
            <div className='w-[100%] h-[500px]'>
                <div className='flex h-[100%]'>
                    <div className='h-[100%] w-[40%] flex justify-center items-center'>
                        <div className='h-[85%] w-[85%] flex flex-wrap justify-evenly items-center'>
                        <div className='h-[45%] w-[45%] bg-gradient-to-r from-lime-300 to-green-300 rounded-[10px] p-[30px] shadow-lg'>
                            <h1 className='font-bold pb-[5px] text-[20px]'>Fundamental Rights</h1>
                            <p className='text-[15px]'>View articles relating to Fundamental Laws</p>
                        </div>
                        <div className='h-[45%] w-[45%] bg-gradient-to-r from-pink-300 to-red-300 rounded-[10px] p-[30px] shadow-lg'>
                            <h1 className='font-bold pb-[5px] text-[20px]'>Criminal</h1>
                            <p className='text-[15px]'>View articles relating to Criminal Law</p>
                        </div>
                        <div className='h-[45%] w-[45%] bg-gradient-to-r from-purple-300 to-violet-300 rounded-[10px] p-[30px] shadow-lg'>
                            <h1 className='font-bold pb-[5px] text-[20px]'>Domestic</h1>
                            <p className='text-[15px]'>View articles relating to Domestic Law</p>
                        </div>
                        <div className='h-[45%] w-[45%] bg-gradient-to-r from-blue-300 to-cyan-300 rounded-[10px] p-[30px] shadow-lg'>
                            <h1 className='font-bold pb-[5px] text-[20px]'>Real Estate</h1>
                            <p className='text-[15px]'>View articles relating to Real Estate Law</p>
                        </div>
                        </div>       
                    </div>
                    <div className=' h-[100%] w-[60%] relative'>
                        <div className='px-[30px] py-[40px] flex flex-col'>
                            <h1 className='text-[50px] py-[20px] font-bold'>
                                Resources
                            </h1>
                            <p className='py-[20px] text-[20px] font-medium'>In the context of a constitution, the term "resources" typically refers to the sources or origins from which the constitution draws its authority, principles, and content. These resources help establish the legitimacy and framework of a constitution. While the specific resources can vary from one country to another. </p>
                            <button className='px-[10px] py-[5px] w-[200px] h-[50px] mt-[90px] rounded-[10px] bg-blue-500 hover:bg-blue-600 text-lg text-white'>
                                <Link href='/Resources'>View Resources</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Res