import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import SidebarCard from "./SidebarCard"
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';

const MainLayout = (props) => {

    const { volumeID } = useParams()
    
    const [post, setPost] = useState([]); // Store categories here

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        Axios.get(`http://localhost:5000/admin/get-post/${volumeID}`)
        .then((res) => {            
            setPost(res.data);
        })
        .catch((error) => {
            console.error('Error fetching post:', error);
        });
    }, []); // Empty dependency array to run the effect only once

    const boxStyle = {
        border: "2px solid #14a800",
        padding: "15px",
        overflowY: "scroll",
        height: "90vh"
    }
    const contentArray = props.content; // Array of question-answer pairs    
    const volume = props.volume
    
    const renderedContent = contentArray.map(item => (
        <div key={item.id} className='p-4'>
            {item.question ? (
                <div>
                    <h1 className="text-xl font-bold my-6">
                        {item.title}
                    </h1>
                    <h1 className="text-xl font-bold my-6">
                        {item.subTitle}
                    </h1>
                    <div className="text-xl text-justify italic">
                        <p>{item.question}</p>
                        
                        <p>{item.answer}</p>
                        <p>{item.college}</p>
                        <div className="flex flex-col items-end my-2 font-bold">
                            <p>{item.greetings}</p>
                            <p>{item.position}</p>
                        </div>
                    </div>                    
                </div>
            ) : (    
                <div className="my-2 text-xl text-justify">
                    <h1 className="text-xl font-bold my-6">
                        {item.title}
                    </h1>
                    <div className='font-bold'>
                        {item.category} </div>
                    <div>   
                        {item.subCategory}
                    </div>
                    <hr />
                    <br />
                    <p className='italic'>{item.text}</p>
                    <div className="flex flex-col items-end font-bold">
                        <p>{item.by}</p>
                        <p>{item.position}</p>
                        <p>{item.department}</p>
                    </div>
                </div>                        
            )}                      
        </div>
    ));

    return (
        <>
         
        <div className="container">
            <div className="row">
                <div className="col-md-8 my-2">
                    <section style={boxStyle} className='rounded-lg'>
                        {renderedContent}                        
                    </section>      
                </div>
                <div className="col-md-4 my-2 rounded-lg border-2 border-[#14a800]">
                    {props.img ? (
                        <img 
                            src={props.img} 
                            alt="Intro Img" 
                            style={{width:'100%', height:'90vh'}}
                        />
                    ) : (
                        <div>
                            <SidebarCard 
                                title="ইয়াত বিচাৰক"
                            />                    

                            <SidebarCard post={post} />
                        </div>
                    )}
                </div>
            </div>
        </div>
        
        </>
    );
};

export default MainLayout;

