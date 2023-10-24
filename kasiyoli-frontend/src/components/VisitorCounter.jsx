import React, { useEffect, useState } from 'react';
import axios from 'axios'
import baseUrl from '../apiConfig';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Make an API call to retrieve the visitor count
    axios.get(`${baseUrl}/admin/getVisitorCount`)
        .then((res) => {
            setVisitorCount(res.data)            
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        }).catch((error) => console.error('Error fetching visitor count:', error));
  }, []);

  return (
    <div className='visitorCount text-2xl sm:text-3xl -mt-20 px-4 text-gray-600'>
        {visitorCount} <span className='text-sm sm:text-lg block'>Visitors</span>
    </div>
  );
};

export default VisitorCounter;






