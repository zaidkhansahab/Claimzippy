import React from 'react'
import i2 from './assets/i2.png'
import i1 from './assets/i1.png'
import i9 from './assets/i9.png'
import i8 from './assets/i8.png'
import i5 from './assets/i5.png'
import i4 from './assets/i4.png'
import i14 from './assets/i14.png'
import i13 from './assets/i13.png'
import i10 from './assets/i10.png'
import i12 from './assets/i12.png'
import i11 from './assets/i11.png'


const Leftsidebar = () => {
  return (
    <aside className="bg-gray-200 w-1/4 h-full">
      <div className="p-4 ">

        <ul>
          <li className="mb-2 mt-3 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i2} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Dashboard</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i1} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Task Queue</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i9} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Network Providers</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i8} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Non-Network Providers</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i5} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">My Documents</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700">
            <img className='h-7 w-7  ' src={i4} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Profile</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i14} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">User Management</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700  ">
            <img className='h-7 w-7  ' src={i13} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Audit Trail</a>
          </li>

          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i10} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Support</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i12} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Search</a>
          </li>
          <li className="mb-2 mt-2 flex p-2 rounded-md cursor-pointer hover:bg-blue-700 ">
            <img className='h-7 w-7  ' src={i11} alt="/" />
            <a href="#" className="text-black text-left ml-5 ">Master Configurator </a>
          </li>
        </ul>
      </div>
    </aside>

  )
}

export default Leftsidebar
