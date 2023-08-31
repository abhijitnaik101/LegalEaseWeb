import Link from 'next/link';
import React from 'react';

const Resources = () => {
    return (
        <>
        <div className='flex justify-evenly mt-[20px]'>
            <div className='w-[33%] h-[400px] bg-purple-500 mr-[10px]'>
                <div className='px-[40px] py-[60px]'>
                    <Link href=''>Basic Human Rights</Link><br/>
                    <Link href=''>Civil law</Link><br/>
                    <Link href=''>Real Estate law</Link><br/>
                    <Link href=''>Domestic laws</Link><br/>
                    <Link href=''>Criminal law</Link><br/>
                    <Link href=''>Automobile law</Link><br/>
                </div>
            </div>
            <div className='w-[66%] h-[400px] bg-green-400 ml-[10px]'>

            </div>

        </div>
        </>
    )
}
export default Resources