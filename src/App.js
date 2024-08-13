import React from 'react'
import Container from './pages/Container'
import SearchState from './context/SearchState'

const App = () => {
  return (
    <>
    <SearchState>
      <Container />
    </SearchState>
    </>
  )
}

export default App
