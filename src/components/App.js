import React, { useState } from 'react';
import '../css/app.css'
import Nav from './Nav'
import About from './About'
import Home from './Home'

function App() {
  const [page, setPage] = useState('root')

  const handleSelect = (item) => {
    setPage(item)
  }


  return (
    <>
      <Nav onSelect={(item) => handleSelect(item)}/>
      { page === 'root' 
      ? <Home/>
      : <About/>}  
    </>
  )
} 

export default App;
