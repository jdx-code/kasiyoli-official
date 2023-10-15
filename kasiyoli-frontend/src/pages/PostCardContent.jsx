import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PostCard from '../components/PostCard';
import SidebarCard from '../components/SidebarCard';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import '../App.css'

const PostCardContent = () => {
  const [post, setPost] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const { volumeID } = useParams();
  
  useEffect(() => {
  // Fetch posts from the server based on the current page
  setLoading(true);
  Axios.get(`http://localhost:5000/admin/post/${volumeID}?page=${currentPage}`)
    .then((res) => {
      setPost(res.data.posts);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching post:', error);
      setLoading(false);
    });
}, [currentPage]);



  useEffect(() => {
    // Fetch categories from the server when the component mounts
    Axios.get(`http://localhost:5000/admin/get-post/${volumeID}`)
    .then((res) => {            
        setAllPost(res.data);
    })
    .catch((error) => {
        console.error('Error fetching post:', error);
    });
  }, []); // Empty dependency array to run the effect only once

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // const filterdDetails = post.filter(item => item.volume == volumeID)
  const filterdData = allPost.filter(item => item.volume == volumeID)

  const postCardDetails = post.map((item) => (
    <PostCard
      key={item._id}
      id={item._id}
      title={item.postTitle}
      category={item.category.categoryName}
      volume={item.volume}
    />
  ));
  

  return (
    <>
      <Navbar links="magazineLinks" volumeID={volumeID} />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <section>{postCardDetails}</section>
            <div className="pagination m-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-4 -mt-12">
            <SidebarCard title="ইয়াত বিচাৰক" />
            <SidebarCard post={filterdData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCardContent;
