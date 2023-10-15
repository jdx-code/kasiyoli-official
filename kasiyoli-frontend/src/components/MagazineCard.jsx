import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MagazineCards = (props) => {    

    return (                                                  
        <>          
            <div className='flex flex-col p-4 sm:flex-row sm:justify-center items-center'>
                {props.data.map((item) => (               
                    
                    <div className="p-[10px] m-4 sm:m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:border-b-4 hover:border-l-4 border-[#14a800]">
                        <Link key={item._id} to={`/welcome/${item._id}`}>
                            <img src={item.coverImage} className="w-full h-64"
                                alt="Skyscrapers" />
                            <div className="text-center">
                                <h5 className="">{item.volumeYear}</h5>
                                <p className="">{item.volumeNum}</p>
                                <p className="">{item.volumeEditor}</p>
                            </div>
                        </Link>
                    </div>                                                         
                
                ))}    
            </div>
        </>      
    )
}

export default MagazineCards