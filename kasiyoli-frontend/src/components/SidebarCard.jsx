import React from 'react';
import { Link } from 'react-router-dom';

const SidebarCard = (props) => {    

    console.log(props)
    
    return(
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-10 g-5 flex justify-center my-2">
                    <div className="col">
                        {props.img ? ( 
                        <img src={props.img} />
                        ) : (                            
                        
                            <div className="card">
                                <div className="card-body elegant-color white-text rounded-bottom">
                                    <h4 className="card-title">Title</h4>
                                    <hr className="hr-light" />

                                    <br />
                                    <p className="card-text white-text mb-4">
                                        
                                        {props.post ? ( 
                                            <p>{props.post.map(item => {
                                                return (
                                                    <li><Link to={`/readmore/${item._id}/${item.volume}`}>{item.postTitle}</Link></li>
                                                )
                                            })}</p> 
                                        ) : (
                                            <div className="input-group">
                                                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                                <button type="button" className="btn btn-outline-primary">search</button>
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