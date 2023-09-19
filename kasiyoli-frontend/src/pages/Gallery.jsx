import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from '../components/Image'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Gallery() {

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

  const { volumeID } = useParams()
  
  return (
    <div>
        <Navbar links="magazineLinks" volumeID={volumeID} />
        <Image data={data} />
    </div>
  )
}

export default Gallery