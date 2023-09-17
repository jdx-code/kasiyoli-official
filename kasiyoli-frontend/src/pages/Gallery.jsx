import Image from '../components/Image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Gallery = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get('http://localhost:5000/admin/gallery')
        .then((res) => {
            setData(res.data)            
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once    
    
    const { volumeID } = useParams()
    return (
        <>
            <Navbar links="magazineLinks" volumeID={volumeID} />

            <Image data={data} />
        </>
    )
}

export default Gallery