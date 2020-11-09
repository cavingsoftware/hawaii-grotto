import React from 'react'

export default function Nav({ onSelect }) {
  const handleClick = (item) => {
    onSelect(item)
  }

  return (
    <div className='nav-bar container p-4'>
      <div className='container'>
        <div className='row'>
          <div className='home col-md-3 pb-2' onClick={() => handleClick('root')}>
            <strong>Hawai'i Grotto</strong>
          </div>
          <div className='col-md-5'></div>
          <div className='about col-md-2 pb-2' onClick={() => handleClick('about')} >
            About Us
          </div>
          {/* <div className='col-md-2 pb-2'>
            Contact
          </div> */}
          <div className='col-md-2 pb-2'>
            🔦
          </div>
        </div>
      </div>
    </div>
  )
}
