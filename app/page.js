import React from 'react';
import MySlider from '@/Components/MySlider';
import Head from 'next/head';
import TopNav from '@/Components/TopNav';
import Home from './Home/page';

const page = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <nav>
        <TopNav />
      </nav>
      <main>
        <Home />
        <h1>This is Heading</h1>
        <div className='bg-[#EFEEFD] rounded-[10px] py-3'>
          <div className='m-5'>

            <div className='bg-white py-[10px] px-[50px]'>
              <p className='font-medium text-xl inline'>Top rated</p>
              <hr className='h-[3px] bg-black w-[80%] float-right mt-3' />
            </div>

            <hr />
            <MySlider />
            <div className='bg-white py-[10px] px-[50px]'>
              <p className='font-medium text-xl inline'>Best in your area</p>
              <hr className='h-[4px] bg-black w-[80%] float-right mt-3' />
            </div>
            <MySlider />

          </div>
        </div>



      </main>

    </>
  )
}

export default page