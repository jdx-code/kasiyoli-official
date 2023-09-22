import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axios
      .get('http://localhost:5000/admin/photo')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching Photo:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const { volumeID } = useParams();

  // Define filters for different photo types
  const filterData = (photoType) =>
    data.filter((item) => item.volume === volumeID && item.photoType === photoType);

  return (
    <div>
      <Navbar links="magazineLinks" volumeID={volumeID} />
      {volumeID === '64feb45c44ca262782cd917f' ? (
        <>
          <Image data={filterData('')} />
          <Image data={filterData('2')} />
          <Image data={filterData('3')} />
          <Image data={filterData('4')} />
          <Image data={filterData('5')} />
          <Image data={filterData('6')} />
          <Image data={filterData('7')} />
        </>
      ) : volumeID === '64feb73c44ca262782cd9191' ? (
        <>
          <Image data={filterData('1')} />
          <Image data={filterData('8')} />
          <Image data={filterData('9')} />
          <Image data={filterData('10')} />
          <Image data={filterData('11')} />
          <Image data={filterData('12')} />
          <Image data={filterData('13')} />
          <Image data={filterData('14')} />
        </>
      ) : null /* Add a default case or render nothing when volumeID doesn't match either condition */}
    </div>
  );
}

export default Gallery;
