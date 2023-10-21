import React from 'react';
import { Link } from 'react-router-dom';

const SidebarCard = (props) => {    
    
    return(
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-10 g-5 flex justify-center my-2">
                    <div className="col">
                        {props.img ? ( 
                        <img src={props.img} />
                        ) : (                            
                        
                            <div className="card border-2 border-[#14a800]">
                                <div className="card-body elegant-color white-text rounded-bottom">
                                    <h4 className="card-title text-xl">শেহতীয়া তথ্য/লেখা</h4>
                                    <hr className="hr-light" />

                                    <br />
                                    <p className="card-text white-text p-4">
                                        
                                        {props.post ? ( 
                                            <p className="my-2">{props.post.map(item => {
                                                return (
                                                    <li className="p-0 text-md font-medium text-lg hover:text-[#14a800]"><Link to={`/readmore/${item._id}/${item.volume}`} className="hover:text-[#14a800]">{item.postTitle}</Link></li>
                                                )
                                            })}</p> 
                                        ) : (
                                            <div className="input-group flex flex-col">                                                
                                                <input type="text" className="rounded-sm mb-2 h-8 w-full" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                                <button type="button" className="rounded-sm h-8 bg-[#00a816f8] hover:bg-[#06a800c4] text-white border-2 border-[#14a800]">ইয়াত বিচাৰক</button>
                                            </div> 
                                        )}
                                    </p>
                                    
                                </div>
                            </div>  
                        
                        )}                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarCard