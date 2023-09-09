import Link from 'next/link';
import React from 'react';
import Basicrights from '@/app/Resources/Articles/Basicrights';
const Resources = () => {
    return (
        <>
            
            <div className='flex justify-evenly mt-[20px]'>
                <div className='w-[330px] h-[800px] mr-[10px] flex justify-start align-top border-solid border-[2px] rounded-[15px]'>
                    <div className='px-[40px] py-[60px] text-black font-medium'>
                        <div className='text-[30px]'>Resources</div>
                        <hr /><br />
                        <Link href='/Basicrights'>Basic Human Rights</Link><br />
                        <Link href=''>Civil law</Link><br />
                        <Link href=''>Real Estate law</Link><br />
                        <Link href=''>Domestic laws</Link><br />
                        <Link href=''>Criminal law</Link><br />
                        <Link href=''>Automobile law</Link><br />
                        <Link href=''>Finance law</Link><br />
                        <Link href=''>Banking law</Link><br />
                        <Link href=''>Labor and employment</Link><br />
                    </div>
                </div>
                <div className='bg-slate-300 w-[2px] h-[800px]'></div>
                <div className='w-[66%] h-[800px] ml-[10px] overflow-y-auto rounded-[15px]'>
                    <Basicrights />
                </div>
            </div>
        </>
    )
}
export default Resources