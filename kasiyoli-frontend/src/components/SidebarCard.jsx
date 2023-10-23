import React from 'react';
import { Link } from 'react-router-dom';

const SidebarCard = (props) => {    
    
    return(
        <>
            <div className="text-md sm:text-[0.78rem] lg:text-[0.97rem]">
                <div className="flex justify-center">
                    <div className="col">
                        {props.img ? ( 
                        <img src={props.img} />
                        ) : (                            
                        
                            <div className="border-2 border-[#14a800] rounded-md">
                                <div className="">
                                    <h4 className="p-2 font-semibold text-center">শেহতীয়া তথ্য/লেখা</h4>
                                    <hr className="" />

                                    <br />
                                    <p className="">
                                        
                                        {props.post ? ( 
                                            <p className="">{props.post.map(item => {
                                                return (
                                                    <li className="py-[0.27rem] font-medium hover:text-[#14a800] list-none flex items-center">
                                                        <i className="p-2 fa fa-tag fa-xs px-2 text-green-600" aria-hidden="true"></i>
                                                        <Link to={`/readmore/${item._id}/${item.volume}`} className="hover:text-[#14a800] p-2">{item.postTitle}</Link>
                                                    </li>
                                                )
                                            })}</p> 
                                        ) : (
                                            <div className="input-group flex flex-col">                                                
                                                <input type="text" className="rounded-sm mb-2 h-8 w-full border-2 border-blue-200" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
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