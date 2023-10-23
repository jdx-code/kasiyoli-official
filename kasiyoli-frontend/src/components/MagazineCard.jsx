import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MagazineCards = (props) => {    

    return (                                                  
        <>   
            <div className="container">
                <div className="row">
                    <div className='flex flex-col px-[77px] sm:px-[25px] py-[60px] sm:flex-row sm:justify-center items-center'>
                        {props.data.map((item) => (               
                            
                            <div className="p-[10px] m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:p-2 hover:border-2 hover:border-[#14a800]">
                                <Link key={item._id} to={`/welcome/${item._id}`} className='hover:text-[#227418]'>
                                    <img src={item.coverImage} className="w-full h-64"
                                        alt="e-magazine" />
                                    <div className="text-center py-6">
                                        <h5 className="">{item.volumeYear}</h5>
                                        <p className="">{item.volumeNum}</p>
                                        <p className="">{item.volumeEditor}</p>
                                    </div>
                                </Link>
                            </div>                                                         
                        
                        ))}    
                    </div>
                </div>
            </div>
        </>      
    )
}

export default MagazineCards