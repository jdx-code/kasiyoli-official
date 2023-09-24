import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from '../../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const PostManager = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subCategory: "",
    volume: "",
    content: "",
  });
  
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [volumes, setVolumes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/category')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/sub-category/${formData.category}`)
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((error) => {
        console.error('Error fetching sub-categories:', error);
      });
  }, [formData.category]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/volume')
      .then((res) => {
        setVolumes(res.data);
      })
      .catch((error) => {
        console.error('Error fetching volumes:', error);
      });
  }, []);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleQuillChange = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        content: value, // Update the "content" field in the form data
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

      axios
      .post("http://localhost:5000/admin/add-post", formData)
      .then((response) => {
        toast("Post created successfully !", {
          position: toast.POSITION.TOP_CENTER
        })
         // Clear form inputs on successful submission
        setFormData({
          title: "",
          category: "",
          subCategory: "",
          volume: "",
          content: "",
        });
      })
      .catch((error) => {
        console.error(error);
        // Display a notification on error
        toast.error("Error creating post. Please check your input.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <Sidebar />
        </div>
        <div className="container my-4">
          <div className="col-md-10">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder='Title'
                  onChange={handleChange}
                  name="title"
                  value={formData.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  name="category"
                  value={formData.category}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="subCategory">Sub Category:</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  name="subCategory"
                  value={formData.subCategory}
                >
                  <option value="">Select a category</option>
                  {subCategories.map((subcategory) => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.subCategory}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="volume">Volume:</label>
                <select
                  className="form-control"
                  onChange={handleChange}
                  name="volume"
                  value={formData.volume}
                >
                  <option value="">Select a volume</option>
                  {volumes.map((vol) => (
                    <option key={vol._id} value={vol._id}>
                      {vol.volumeNum}
                    </option>
                  ))}
              </select>
              </div>
              <div className="form-group">
                <label>Post Content:</label>
                <ReactQuill
                  modules={modules}                  
                  onChange={handleQuillChange}
                  name="content"
                  value={formData.content}
                  theme="snow"
                  className=""
                  placeholder="Write something.."
                  style={{ border: "1px solid yellow" }}
                />
              </div>

              <button className="btn btn-primary">
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
    
  );
};

export default PostManager;