import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SidebarCard from '../components/SidebarCard';
import DOMPurify from "dompurify";

const ReadMore = () => {
    const { postID, volumeID } = useParams();

    const [getPost, setGetPost] = useState([]); // Store categories here

    const [post, setPost] = useState(null); // Change to null to store a single post

    useEffect(() => {
        // Fetch a single post by ID from the server when the component mounts or postID changes
        axios.get(`http://localhost:5000/admin/readmore/${postID}/${volumeID}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [postID]); // Include postID in the dependency array to fetch the post when it changes

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get(`http://localhost:5000/admin/get-post/${volumeID}`)
        .then((res) => {            
            setGetPost(res.data);
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

    return (
        <div>

            <Navbar links="magazineLinks" volumeID={volumeID} />

            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-2">

                        {post ? (
                            <div style={boxStyle}>
                                <h1 className="text-center text-4xl">{post.postTitle}</h1>
                                {/* <p>{post.postContent
                                    .replace(/<(?:.|\n)*?>/gm, '')
                                    .replace(/&zwnj;|&nbsp;/g, '')
                                    .replace(/&rsquo;|&hellip;/g, '')
                                    }
                                </p>  */}

                                <div className="text-2xl" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postContent)}}></div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="col-md-4 my-2">
                            <SidebarCard 
                                title="ইয়াত বিচাৰক"
                            />                    

                            <SidebarCard post={getPost} />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ReadMore;
