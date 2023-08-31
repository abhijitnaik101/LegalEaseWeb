import React from 'react';
import MySlider from '@/Components/MySlider';
import Head from 'next/head';
import TopNav from '@/Components/TopNav';
import Home from './Home/page';
import Profile from './Profile/page';
import Resources from './Resources/page';
import DropDown from '@/Components/DropDown';

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
        <Home/>
      </main>

    </>
  )
}

export default page