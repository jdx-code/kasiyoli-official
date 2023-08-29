import React from "react";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false); 

    return(

        <nav>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <p>Kasiy7oli</p>
          </div>
          <div className="hidden md:block">
            <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-[#fef8ef] font-medium"> 
                <NavLink 
                    to="/"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                    Home
                </NavLink>           
                <NavLink 
                    to="/editorial"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                    সম্পাদনা সমিতি
                </NavLink>                      
                <NavLink 
                    to="/interview"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                    অন্তৰংগ আলাপ
                </NavLink>
            </div>
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          {showMobileMenu && <Menu />}
        </div>
      </nav>
    )
}

export default Menu