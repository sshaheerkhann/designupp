import React from 'react'
import img1 from '../assets/Desk (1).png'
import img2 from '../assets/Desk (2).png'
import img3 from '../assets/Desk (3).png'
import img4 from '../assets/Desk (4).png'
import img5 from '../assets/Desk (5).png'
import img from '../assets/Desk.png'
import DropdownMenu from './DropdownMenu'

const CategorySection = () => {
  return (
    <div className='bg-themePink p-[100px]'>
      <div className='flex flex-col gap-y-8 items-center'>
        <div className="flex flex-row gap-x-3 text-5xl font-tiempos">
            <div className=''>Shop By</div>
            <div><DropdownMenu /></div>
        </div>
        <div className='flex flex-row gap-x-5'>
            <div className="">
                <img src={img5} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <img src={img} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <img src={img1} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <img src={img2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection
