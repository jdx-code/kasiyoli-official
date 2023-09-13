import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MagazineCards = (props) => {    

    return (                                                  
        <>
            <div className="container">                
                <div className="row row-cols-1 row-cols-md-4 g-5 flex justify-center my-24">

                {props.data.map((item) => (
                <Link key={item._id} to={`/editorial/${item._id}`}>
                    <div className="col">
                        <div className="card w-72 h-100">
                            <img src={item.coverImage} className="card-img-top w-full h-72"
                                alt="Skyscrapers" />
                            <div className="card-body">
                                <h5 className="card-title">{item.volumeYear}</h5>
                                <p className="card-text">{item.volumeNum}</p>
                                <p className="card-text">{item.volumeEditor}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
                    
                </div>

            </div>
        </>      
    )
}

export default MagazineCards