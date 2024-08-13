import React,{useState} from 'react'
import search from '../assets/search.png'
import trending from '../assets/trending.png'
import cross from '../assets/cross.png'
import recent from '../assets/recent.png'
import Pill from './Pill'

const Section = () => {
    
    
  const [isSearchSelected, setIsSearchSelected] = useState(false)
    const handleSearch = ()=>{
        setIsSearchSelected(!isSearchSelected)
    }
  return (
    <div className="flex flex-col items-center gap-y-8 justify-center mt-36">
        <div className='flex flex-row justify-center'>
            <div className='text-7xl text-center flex flex-col justify-center font-tiempos font-light'>
                <div>Curated furniture</div>
                <div className="italic">from marketplaces.</div>
            </div>
        </div>
        <div className="flex text-xl px-4 w-[640px] text-center">
            Search for used, upcycled and circular design furniture, lighting, home decor and design objects
        </div>
        <div className='flex flex-col gap-y-3'>
            <div className="flex flex-row mt-5 w-[640px] items-center gap-x-4 py-5 px-7 border rounded-full" onClick={handleSearch}>
                <img src={search} alt="" className='w-[24px] h-[24px]' />
                <div className='text-xl text-lightGrey font-tiempos'>Search for sofa, brand or designer</div>
            </div>
            {isSearchSelected && <div className='flex flex-row justify-between rounded-md bg-white p-7 text-black'>
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-row gap-x-3 items-center">
                        <img src={recent} alt="" className='w-[21px] h-[20px]'/>
                        <div className='font-tiempos text-xl'>Recent searches</div>
                    </div>
                    <div className="flex flex-row gap-x-3 text-sm">
                        <Pill title='Sofa' image={cross} />
                        <Pill title='Cathycat' image={cross} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-row gap-x-3 items-center">
                        <img src={trending} alt="" className='w-[23px] h-[11px]'/>
                        <div className='font-tiempos text-xl'>Trending searches</div>
                    </div>
                    <div className="flex flex-row gap-x-3 text-sm">
                        <Pill title='Bed' />
                        <Pill title='Sofa' />
                        <Pill title='Bedframe' selected={true} />
                    </div>
                </div>
            </div>}
        </div>
        
    </div>
    
  )
}

export default Section
