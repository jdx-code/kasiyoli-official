import React from 'react'

const Footer = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    
      <footer className=''>
        <div className="w-full h-28 bg-[#e6e6d6] mx-auto flex flex-col items-center justify-center py-[16px]">                      
            <p className='text-center pb-2 text-sm'>Kasiyoli &#169; {currentYear} | All rights reserved. </p>             
            <p className='text-center text-sm'>Designed by <a className='hover:text-green-800' href="https://www.zephyrsolutionsgroup.com" target="_blank">Zephyr</a> </p>             
        </div>        
      </footer>         
    
  )
}

export default Footer