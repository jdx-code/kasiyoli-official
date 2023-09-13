import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import SidebarCard from "./SidebarCard"
import PostCard from './PostCard';
import postLinks from "../postLinks"
import postCardDB from '../postCardDB';

const MainLayout = (props) => {
    
    const [post, setPost] = useState([]); // Store categories here

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        Axios.get('http://localhost:5000/admin/post')
        .then((res) => {            
            setPost(res.data);
        })
        .catch((error) => {
            console.error('Error fetching post:', error);
        });
    }, []); // Empty dependency array to run the effect only once


    const contentArray = props.content; // Array of question-answer pairs    
    const volume = props.volume
    
    const renderedContent = contentArray.map(item => (
        <div key={item.id}>
            {item.question ? (
                <div>
                    <p>{item.question}</p>
                    <p>{item.answer}</p>
                </div>
            ) : (    
                <div>
                    <p>{item.text}</p>
                    <p>{item.by}</p>
                </div>                        
            )}                      
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <section>
                        {renderedContent}                        
                    </section>      
                </div>
                <div className="col-md-4">
                    {props.img ? (
                        <img src={props.img} alt="Intro Img" />
                    ) : (
                        <div>
                            <SidebarCard 
                                title="ইয়াত বিচাৰক"
                            />                    

                            <SidebarCard post={post}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

