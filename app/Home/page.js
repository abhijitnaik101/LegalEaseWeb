import React from 'react';
import TopNav from '@/Components/TopNav';
import MySlider from '@/Components/MySlider';
import DropDown from '@/Components/DropDown';
import Res from './resources';
import Ho from './landing';
import SliderLaw from './lawyers';
import ContactUS from './contact';
import Info from './info';

const Home = () => {

  const data = [
    { img: "/legalease.jpg" },
  ]
  return (
    <>
      <Ho img={'/legalease.jpg'} />
      <Res />
      <SliderLaw />
      <Info />
      <ContactUS />
    </>
  )
}
export default Home