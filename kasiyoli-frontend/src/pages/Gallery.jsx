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

  const filterdDataStudent = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "")
  const filterdDataTezpur = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "2")
  const filterdDataJaipur = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "3")
  const filterdDataCollegeWeek = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "4")
  const filterdDataCollegeImage = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "5")
  const filterdDataFarewell = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "6")
  const filterdDataWallMagazine = data.filter(item => item.volume == volumeID).filter(item => item.photoType == "7")
  
  return (
    <div>
        <Navbar links="magazineLinks" volumeID={volumeID} />
        <Image data={filterdDataStudent} />
        <Image data={filterdDataTezpur} />
        <Image data={filterdDataJaipur} />
        <Image data={filterdDataCollegeWeek} />
        <Image data={filterdDataCollegeImage} />
        <Image data={filterdDataFarewell} />
        <Image data={filterdDataWallMagazine} />
    </div>
  )
}

export default Gallery