import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import MagazineCards from '../components/MagazineCard'

const Home = (props) => {

    const [data, setData] = useState([])    

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get(`${props.baseUrl}/admin/volume`)
        .then((res) => {
            setData(res.data)            
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once    

    return (
        <>
            <Navbar links="homeLinks" />            
            <MagazineCards data={data} />

        </>
    )
}

export default Home