import Image from '../components/Image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import baseUrl from '../apiConfig';

const Art = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get(`${baseUrl}/admin/gallery`)
        .then((res) => {
            setData(res.data)            
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once    
    
    const { volumeID } = useParams()
    const filterdData = data.filter(item => item.volume == volumeID)

    return (
        <>
            <Navbar links="magazineLinks" volumeID={volumeID} />

            <Image data={filterdData} />

            <Footer />
        </>
    )
}

export default Art