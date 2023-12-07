import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MagazineCards from '../components/MagazineCard';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import baseUrl from '../apiConfig';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/admin/volume`)
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <>
            <div className="customContainer">
                <div className="mt-8 items-center">
                    <div className="col-span-2 text-center">
                        <p className="text-6xl italic font-bold text-orange-600">কাঁচিয়লি</p>
                        <p className="text-2xl italic text-orange-600"> - ই আলোচনী</p>
                    </div>
                    <div className="text-right">
                        <VisitorCounter />
                    </div>
                </div>
                {loading ? (
                    <div>
                        <p>Loading..</p>
                    </div>
                ) : (
                    <MagazineCards data={data} />    
                )}                

                <Footer />
            </div>
        </>
    );
};

export default Home;
