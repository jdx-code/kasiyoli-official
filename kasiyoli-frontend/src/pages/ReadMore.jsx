import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ReadMore = () => {
    const { postID, volumeID } = useParams();

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

    return (
        <div>

            <Navbar links="magazineLinks" volumeID={volumeID} />

            {post ? (
                <div>
                    <h1>{post.postTitle}</h1>
                    <p>{post.postContent
                        .replace(/<(?:.|\n)*?>/gm, '')
                        .replace(/&zwnj;|&nbsp;/g, '')
                        .replace(/&rsquo;|&hellip;/g, '')
                        }
                    </p> 
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReadMore;
