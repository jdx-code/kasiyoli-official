import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MagazineCards = (props) => {    

    return (                                                  
        <>   
            <div className="container">
                <div className="row">
                    <div className='flex flex-col px-[8px] sm:px-[25px] py-[60px] sm:flex-row sm:justify-center items-center'>
                        {props.data ? (
                            props.data.map((item) => (               
                            
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
                            
                            ))
                        ) : (
                            props.loadingData.map((item) => (               
                            
                                <div className="p-[10px] m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:p-2 hover:border-2 hover:border-[#14a800]">
                                    <div key={item._id} className='hover:text-[#227418]'>
                                        {/* <img src={item.coverImage} className="w-full h-64" alt="e-magazine" /> */}  
                                        <div class="border border-blue-300 shadow rounded-md p-1 max-w-sm w-full mx-auto">
                                            <div class="animate-pulse flex space-x-4">                                                
                                                <div class="flex-1 space-y-6 py-1">
                                                <div class="h-64 bg-slate-700 rounded"></div>                                                
                                                </div>
                                            </div>
                                        </div>                                      

                                        <div className="text-center py-6">
                                            <h5>
                                                <span class="relative flex h-3 w-3">
                                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                </span>
                                                Loading..
                                            </h5>
                                            <p>
                                                <span class="relative flex h-3 w-3">
                                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                </span>
                                                Loading..
                                            </p>
                                            <p>
                                                <span class="relative flex h-3 w-3">
                                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                </span>
                                            </p>                                            
                                        </div>
                                    </div>
                                </div>                                                         
                            
                            ))
                        )}
                        
                    </div>
                </div>
            </div>
        </>      
    )
}

export default MagazineCards