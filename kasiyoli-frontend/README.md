import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from '../../components/Sidebar';

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
  // state
  const [state, setState] = useState({
    title: "",
    category: "okCat",
    subCategory: "okSubCat",
    volume: "okVol",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");
  
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
      .get('http://localhost:5000/admin/sub-category')
      .then((res) => {
        setSubCategories(res.data);
      })
      .catch((error) => {
        console.error('Error fetching sub-categories:', error);
      });
  }, []);

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


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // rich text editor handle change
  const handleContent = (event) => {
    console.log(event);
    setContent(event);
  };

  // destructure values from state
  const { title, category, subCategory, volume } = state;
  
  // onchange event handler
  const handleChange = (name) => (event) => {
    // console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.table({ title, content, user });
    axios
      .post(
        `http://localhost:5000/admin/add-post`,
        { title, category, subCategory, volume, content, selectedFile },        
      )
      .then((response) => {
        console.log(response);
        // empty state
        setState({ ...state, title: "", category: "", subCategory: "", volume: "", content: "" });
        setContent("");
        setSelectedFile(null)
        // show success alert
        alert(`${response.data.title} blog post is created`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
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
                  name="postTitle"
                  onChange={handleChange("title")}
                  value={title}
                  placeholder='Post Title'
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  className="form-control"
                  onChange={handleChange("category")}
                  name="category"
                  value={category}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="subCategory">Sub Category:</label>
                <select
                  className="form-control"
                  onChange={handleChange("subCategory")}
                  name="subCategory"
                  value={subCategory}
                >
                  <option value="">Select a sub-category</option>
                  {subCategories.map((subcat) => (
                    <option key={subcat._id} value={subcat._id}>
                      {subcat.subCategory}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="volume">Volume:</label>
                <select
                  className="form-control"
                  onChange={handleChange("volume")}
                  name="volume"
                  value={volume}
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
                  onChange={handleContent}
                  value={content}
                  theme="snow"
                  className=""
                  placeholder="Write something.."
                  style={{ border: "1px solid yellow" }}
                />
              </div>

              <div className="form-group">
              <label htmlFor="images">Attached Images:</label>
              <input
                type="file"
                className="form-control"
                placeholder="Select Images"
                onChange={handleFileChange}
                name="images"
              />
            </div>

              <button className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default PostManager;