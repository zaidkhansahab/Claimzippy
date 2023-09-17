import React from 'react'
import ic1 from './assets/ic1.png'
import icon from './assets/icon.jpeg'

const Navbars = () => {
  return (
    <nav className="bg-white p-4 shadow-2xl">
      <div className="container  ">
        <div className="grid grid-cols-2 grid-flow-col">
          <div className="text-white  font-bold">
          <img className='h-9 w-9 '  src={ic1} alt="/" />
          </div>
          <div className="justify-center items-center ">
          <img className='h-16 w-36 justify-center items-center '  src={icon} alt="/" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbars
