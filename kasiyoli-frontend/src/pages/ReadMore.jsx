import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom';

const ReadMore = () => {

    const { postID } = useParams();

    const [post, setPost] = useState({}); // Change to an object to store a single post
    
    useEffect(() => {
        // Fetch a single post by ID from the server when the component mounts
        axios.get(`http://localhost:5000/admin/get-post/${postID}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [postID]); // Include postID in the dependency array to fetch the post when it changes
    
    return (
        <div>
            {/* Check if post has loaded */}
            {post ? (
                <div>
                    <h1>{post.postContent}</h1>
                    {/* Render other post content here */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReadMore;
