import React, {useState, useEffect, useContext} from 'react'
import bg from '../assets/bg.png'
import Header from '../components/Header'
import Section from '../components/Section'
import CategorySection from '../components/CategorySection'

const MainSection = () => {



  return (
    <>
      <div className='relative'>
        <img src={bg} alt="" className='w-full bg-black-100'/>
        <div className="absolute inset-0 bg-black opacity-[.46]"></div>
        <div className='absolute inset-0 text-white'>
          <Header />
          <Section />
        </div>
        
      </div>
      <div className=''>
          <CategorySection />
      </div>
    </>
    
    
  )
}

export default MainSection
