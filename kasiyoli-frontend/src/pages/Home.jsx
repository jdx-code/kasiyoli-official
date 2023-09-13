import MagazineCards from '../components/MagazineCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([])

<<<<<<< HEAD
=======
    const links = [
        {
            "linkName" : "About",
            "to" : "/about",
        },
        {
            "linkName" : "Contact",
            "to" : "/contact",
        },        
    ]

>>>>>>> 48d4782bbef13482dbf3073f0c41806027f59ec4
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

            <MagazineCards data={data} />

        </>
    )
}

export default Home