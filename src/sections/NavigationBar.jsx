import React from 'react';
import nft from '../assets/nft.jpg';
import { IoIosMenu } from "react-icons/io";
import { PiStorefrontLight } from "react-icons/pi";

const NavigationBar = () => {
  return (
    <div className='bg-[#2B2B2B] flex py-[15px] px-[30px] items-center justify-between md:py-[15px] md:px-[50px] lg:py-[20px] lg:px-[50px]'>
             <div className='flex flex-row items-center gap-[10px]'>
              <PiStorefrontLight className='w-[24px] h-[24px] text-[#A259FF]' />
              <img src={nft} alt='nft' className='w-[149.56px] h-[14.85px]'/>
              </div>
              <IoIosMenu className='h-[24px] w-[24px] text-[#fff] lg:hidden'  />
              <p className='hidden'>hello </p>
        </div>

  )
}

export default NavigationBar