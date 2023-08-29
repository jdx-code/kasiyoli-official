import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return(

        <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-[#fef8ef] font-medium">
            <a
            href="#about"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >            
            সম্পাদনা সমিতি
            </a>            
            <a
            href="#services"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
            শুভেচ্ছা বাণী
            </a>
            <a
            href="#testimonials"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
            অন্তৰংগ আলাপ
            </a>
            <a
            href="#blogs"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
            তথ্যকোষ
            </a>
            <a
            href="#contact"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
            ছবি
            </a>
            <a
            href="#contact"
            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
            আলোক চিত্ৰ 
            </a>            
            
        </div>
    )
}

export default Menu