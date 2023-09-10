import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from '../components/Image'

function Art() {

  const [data, setData] = useState([])

  useEffect(() => {
      // Fetch categories from the server when the component mounts
      axios.get('http://localhost:5000/admin/photo')
      .then((res) => {
          setData(res.data)            
      })
      .catch((error) => {
          console.error('Error fetching Photo:', error);
      });
  }, []); // Empty dependency array to run the effect only once    
  
  return (
    <div>
         <Image data={data} />
    </div>
  )
}

export default Art
