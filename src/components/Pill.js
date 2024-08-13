import React from 'react'
import cross from '../assets/cross.png'

const SearchPill = (props) => {
  return (
    <div className={`border border-${props.selected ? 'black': ''} rounded-full px-6 py-2.5 flex flex-row items-center gap-x-2.5`}>
        <div className={`text-${props.selected ? 'black': 'lightGrey'}`}>{props.title}</div>
        {props.image && <img src={cross} alt="" className='w-[12px] h-[12px]' />}
    </div>
  )
}

export default SearchPill
