import React from 'react'
import heroImage from '../assets/heroImage.png'
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className='app bg-[#2B2B2B] md:flex md:flex-row md:gap-[20px] lg:items-center lg:gap-[60px]'>
      <img src={heroImage} alt='heroImage' className='h-[232px] w-screen md:w-[397px] md:h-[490px] lg:w-[710px] lg:h-[691px]'/>

      <div className='flex flex-col items-center py-[30px] px-[40px]'>
      <div className='flex flex-col gap-[20px]'>
        <h1 className='font-WorkSans text-[38px] font-[600] leading-[45.6px] text-[#fff]'>Create Account</h1>
        <h4 className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#fff]'>Welcome! enter your details and start <br/> creating, collecting and selling NFTs.</h4>

      <div className='gap-[15px] flex flex-col'>

        <div className='flex h-[46px] py-[16px] px-[20px] items-center gap-[12px] rounded-[20px] bg-[#fff]'>
        <CiUser className='w-[20px] h-[20px] text-[#BDBDBD]' />
          <input type='text' placeholder='Username' className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#2B2B2B]'/>
          </div>

        <div className='flex h-[46px] py-[16px] px-[20px] items-center gap-[12px] rounded-[20px] bg-[#fff]'>
        <CiMail  className='w-[20px] h-[20px] text-[#BDBDBD]'/>
          <input type='email' placeholder='Email Address' className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#2B2B2B]'/>
          </div>

        <div className='flex h-[46px] py-[16px] px-[20px] items-center gap-[12px] rounded-[20px] bg-[#fff]'>
        <CiLock  className='w-[20px] h-[20px] text-[#BDBDBD]'/>
          <input type='password' placeholder='Password'className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#2B2B2B]'/>
          </div>

        <div className='flex h-[46px] py-[16px] px-[20px] items-center gap-[12px] rounded-[20px] bg-[#fff]'>
        <CiLock  className='w-[20px] h-[20px] text-[#BDBDBD]'/>
          <input type='password' placeholder='Confirm Password'className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#2B2B2B]'/>
          </div>

          <div className='flex h-[46px] px-[50px] items-center justify-center gap-[12px] rounded-[20px] bg-[#A259FF]'>
            <h3 className='text-[#fff] items-center font-WorkSans font-[600px] text-[16px] leading-[22.4px]'>Create Account</h3>
          </div>

            <div>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection