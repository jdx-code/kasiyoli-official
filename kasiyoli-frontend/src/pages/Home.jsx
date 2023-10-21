import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import MagazineCards from '../components/MagazineCard'
import Footer from '../components/Footer'

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
            {/* <Navbar links="homeLinks" />    */}
            <div className='customContainer'>
                <div className='mt-8'>
                    <p className='text-6xl italic font-bold text-center text-orange-600'>কাঁচিয়লি</p>
                    <p className='text-2xl italic text-center text-orange-600'> - ই আলোচনী</p>
                </div>
                
                <MagazineCards data={data} />

                <Footer />
            </div>            

        </>
    )
}

export default Home