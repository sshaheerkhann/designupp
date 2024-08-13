import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=''>
      <select value={selectedOption} onChange={handleSelect} className="underline decoration-1 underline-offset-[10px] text-5xl font-tiempos italic bg-transparent focus:outline-none">
        <option value="Room" className='text-5xl font-tiempos italic'>Room</option>
        <option value="Era" className='text-5xl font-tiempos italic'>Era</option>
        <option value="Style" className='text-5xl font-tiempos italic'>Style</option>
        <option value="Category" className='text-5xl font-tiempos italic'>Category</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
