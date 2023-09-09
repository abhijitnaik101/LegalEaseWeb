import Link from 'next/link';
import React from 'react';
import Profile from './profile';
const TopNav = () => {
    return (
        <>
            <nav className='sticky top-0'>
                <div className='shadow-lg bg-gradient-to-r from-[#6355FF] to-purple-500 flex justify-between items-center h-[80px] w-[100%]'>
                    <div className='flex'>
                        <div className='bg-white ml-10 mr-5 h-[30px] w-[30px]'></div>
                        <p className='text-2xl text-white font-bold'>LegalEase</p>
                    </div>
                    <div>
                        <form action="/action_page.php">
                            <input className='rounded-[5px] w-[400px] p-[5px]' type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className='w-[40%] flex justify-evenly items-center p-[5px]'>
                        <Link class="active" href="/Home" className='text-white'>Home</Link>
                        <Link href="/" className='text-white'>About</Link>
                        <Link href="/Resources" className='text-white'>Resources</Link>
                        <Link href="/" className='text-white'>News</Link>
                        <Link href="/" className='text-white'>Feedback</Link>
                        <Profile/>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default TopNav