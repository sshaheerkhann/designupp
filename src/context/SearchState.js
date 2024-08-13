import React,{useState} from 'react'
import searchContext from './searchContext'

const SearchState = (props) => {

    const [isSearchSelected, setIsSearchSelected] = useState(false)

  return (
    <searchContext.Provider value={{isSearchSelected, setIsSearchSelected}}>
        {props.children}
    </searchContext.Provider>
  )
}

export default SearchState
