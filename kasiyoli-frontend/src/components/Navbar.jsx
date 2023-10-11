import React from "react";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    const volumeID = props.volumeID

    const homeLinks = [
      {
          "linkName" : "About",
          "to" : "/about",
      },
      {
          "linkName" : "Contact",
          "to" : "/contact",
      },        
  ]

    const magazinelinks = [
      {
          "linkName" : "সম্পাদনা সমিতি",
          "to" : `/welcome/${volumeID}`
      },
      {
          "linkName" : "শুভেচ্ছা বাণী",
          "to" : `/editorial/${volumeID}`,
      },
      {
          "linkName" : "অন্তৰংগ আলাপ",
          "to" : `/interview/${volumeID}`,
      },
      {
          "linkName" : "তথ্যকোষ",
          "to" : `/postCardContent/${volumeID}`,
      },
      {
        "linkName" : "ছবি",
        "to" : `/art/${volumeID}`,
      },
      {
          "linkName" : "আলোক চিত্ৰ",
          "to" : `/gallery/${volumeID}`,
      },      
  ]

  const [showMobileMenu, setShowMobileMenu] = useState(false);   
    
    // Function to generate navigation links
  const generateNavLinks = (links) => {
    return (
      <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-[#14a800] text-xl font-medium">
        <NavLink 
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#14a800] focus:outline-none focus:text-white focus:bg-[#14a800]"
          to="/"
        > 
          Home
        </NavLink>
        {links.map(({ linkName, to }) => (
          <NavLink 
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#14a800] focus:outline-none focus:text-white focus:bg-[#14a800]"
            key={to} 
            to={to}
          >
            {linkName}
          </NavLink>
        ))}
      </div>
    );
  };

    return(

      <nav>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <p className="text-[#14a800] text-2xl">Kasiyoli</p>
          </div>
          
          <div className="hidden md:block">
            {generateNavLinks(props.links === 'homeLinks' ? homeLinks : magazinelinks)}
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
          {showMobileMenu && generateNavLinks(props.links === 'homeLinks' ? homeLinks : magazinelinks)}
        </div>
      </nav>
    )
}

export default Navbar