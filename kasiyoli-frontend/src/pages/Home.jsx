import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import MagazineCards from '../components/MagazineCard'

const Home = () => {

    const [data, setData] = useState([])

    const links = [
        {
            "linkName" : "About Us",
            "to" : "/about",
        },
        {
            "linkName" : "Contact Us",
            "to" : "/contact",
        },        
    ]

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get('http://localhost:5000/admin/volume')
        .then((res) => {
            setData(res.data)            
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once    

    return (
        <>
            <Navbar links={links} />            
            <MagazineCards data={data} />

        </>
    )
}

export default Home