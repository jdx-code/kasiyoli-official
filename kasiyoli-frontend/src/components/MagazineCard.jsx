import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MagazineCards = (props) => {    

    return (                                                  
        <>          
            <div className="row row-cols-1 row-cols-md-4 g-5 flex justify-center my-24">        
                {props.data.map((item) => (
                <Link key={item._id} to={`/welcome/${item._id}`}>
                    <div className="transition-opacity duration-500 hover:opacity-transform hover:-translate-y-1 rounded-md p-4">
                        <div className="card shadow-2xl rounded-md hover:border-b-4 hover:border-l-4 border-[#14a800]">
                            <img src={item.coverImage} className="flex items-center h-72 w-auto rounded-md my-1 mx-2 p-2"
                                alt="Skyscrapers" />
                            <div className="card-body">
                                <h5 className="card-title">{item.volumeYear}</h5>
                                <p className="card-text">{item.volumeNum}</p>
                                <p className="card-text">{item.volumeEditor}</p>
                            </div>
                        </div>  
                    </div>
                </Link>
                ))}    
            </div>
        </>      
    )
}

export default MagazineCards