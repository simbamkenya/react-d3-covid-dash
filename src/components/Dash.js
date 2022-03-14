import React from 'react'
import Aside from './Aside'
import Header from './Header'
import Main from './Main'

function Dash() {
  return (
    <div className='flex bg-gray-100 min-h-screen'>
        <Aside />
        <Header />
    </div>
    
  )
}

export default Dash