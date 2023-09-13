import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PostCard from '../components/PostCard'
import SidebarCard from '../components/SidebarCard'

const PostCardContent = () => {
    
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


    const postCardDetails = post.map(item => {
        return (
            <PostCard                                 
                title = {item.postTitle}
                category = {item.category.categoryName}
            />
        )
    })

 return (
    <>

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <section>
                        {postCardDetails}                        
                    </section>      
                </div>
                <div className="col-md-4">
                    
                    <SidebarCard 
                        title="ইয়াত বিচাৰক"
                    />                    

                    <SidebarCard post={post}/>
                    
                </div>
            </div>
        </div>

        
    </>
 )
}

export default PostCardContent