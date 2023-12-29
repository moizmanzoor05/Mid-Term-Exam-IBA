import React from 'react'
import nft from '../assets/nft.jpg'
import { PiStorefrontLight } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { LuYoutube } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className='App'>
      <div className='flex py-[40px] px-[40px] items-center flex-col gap-[30px] bg-[#3B3B3B]'>

        <div className='flex flex-col items-start gap-[20px] md:pr-[195px] md:pl-[80px] md:w-screen'>

        <div className='flex flex-row gap-[12px] items-center'>
          <PiStorefrontLight className='h-[32px] w-[32px] text-[#A259FF]'/>
          <img src={nft} alt='nft' className='w-[199.414px] h-[19.8px]'/>
        </div>

        <div>
          <p className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>
            NFT marketplace UI created<br/>with Anima for Figma.</p>
        </div>

          <div className='flex flex-col gap-[15px]'>
            <p className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>Join our comumnity</p>
            <div className='flex flex-row'>
              <RxDiscordLogo className='h-[32px] w-[32px] text-[#858584]'/>
              <LuYoutube className='h-[32px] w-[32px] text-[#858584]'/>
              <FiTwitter className='h-[32px] w-[32px] text-[#858584]'/>
              <FaInstagram className='h-[32px] w-[32px] text-[#858584]'/>
            </div>
          </div>

        <div className='flex flex-col gap-[20px] items-start'>
          <p className='text-[22px] font-[700] text-[#fff] leading-[35.2px]'>Explore</p>
          <p className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>Marketplace</p>
          <p className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>Rankings</p>
          <p className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>Connect a wallet</p>
        </div>

        <div className='items-start flex flex-col gap-[20px]'>
          <p className='text-[22px] text-[#fff] font-[700] leading-[35.2px]'>join our weekly digest</p>
          <p  className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#cccc]'>Get exclusive promotions & <br/> updates straight to your inbox.</p>
        </div>

        <div className=' flex flex-col gap-[16px]'>
          
        <div className='flex h-[46px] py-[16px] px-[20px] items-center gap-[12px] rounded-[20px] bg-[#fff]'>
          <input type='email' placeholder='Enter Your Email Address' className='font-WorkSans text-[16px] font-[400] leading-[22.4px] text-[#2B2B2B]'/>
          </div>

          <div className='flex h-[46px] px-[50px] items-center justify-center gap-[12px] rounded-[20px] bg-[#A259FF]'>
          <MdMailOutline className='w-[20px] h-[20px] text-[#fff] md:hidden' />
            <h3 className='text-[#fff] items-center font-WorkSans font-[600px] text-[16px] leading-[22.4px] md:hidden'>Create Account</h3>
            </div>
        </div>

        <div className='gap-[20px] flex flex-col md:items-start md:pt-[49px]'>
          <div className='bg-[#858584] h-[1px] w-[315px] md:w-[390px]'/>
          <p className='text-[#cccc]'>Ⓒ NFT Market. Use this template freely.</p>
          </div>
          
          </div>
          
      </div>
    </div>
  )
}

export default Footer