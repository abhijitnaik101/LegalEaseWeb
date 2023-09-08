import Link from 'next/link';
import React from 'react';
const TopNav = () => {
    return (
        <>
            <nav>
                <div className='bg-[#6355FF] flex justify-between items-center h-[80px] w-[100%]'>
                    <div className='flex'>
                        <div className='bg-white ml-10 mr-5 h-[30px] w-[30px]'></div>
                        <p className='text-2xl text-white'>LegalEase</p>
                    </div>
                    <div>
                        <form action="/action_page.php">
                            <input className='rounded-[5px] w-[400px]' type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className='w-[40%] bg-[#6355FF] flex justify-evenly p-[5px]'>
                        <Link class="active" href="#home" className='text-white'>Home</Link>
                        <Link href="#about" className='text-white'>About</Link>
                        <Link href="#contact" className='text-white'>Resources</Link>
                        <Link href="#contact" className='text-white'>News</Link>
                        <Link href="#contact" className='text-white'>Feedback</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default TopNav