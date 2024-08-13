import React from 'react'
import ig from '../assets/IG.png'
import tiktok from '../assets/tiktok.png'
import pinterest from '../assets/Pinterest.png'

const Header = () => {
  return (
    <div className='flex flex-row justify-between px-28 py-12 items-center'>
      <div className="flex flex-row gap-x-6">
        <div>Advertise with us</div>
        <div>Affiliate</div>
      </div>
      <div className="text-4xl font-tiempos">Designupp</div>
      <div className="flex flex-row gap-x-4 items-center">
        <img src={pinterest} alt="" className='w-[20px] h-[20px]' />
        <img src={tiktok} alt="" className='w-[20px] h-[20px]' />
        <img src={ig} alt="" className='w-[20px] h-[20px]' />
      </div>
    </div>
  )
}

export default Header
