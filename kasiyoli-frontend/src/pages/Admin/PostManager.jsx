import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default function PostManager() {
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    postTitle: '',
    category: '',
    subCategory: '',
    volume: '',
  });

  const [editorContent, setEditorContent] = useState('');

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

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/add-post', {
        postTitle: formData.postTitle,
        category: formData.category,
        subCategory: formData.subCategory,
        volume: formData.volume,
        postContent: editorContent,
      });

      console.log(response.data);

      // Clear the form fields after submission
      setFormData({
        postTitle: '',
        category: '',
        subCategory: '',
        volume: '',
      });
      setEditorContent('');
    } catch (error) {
      console.error('Error sending data to the backend', error);
    }
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
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
                  onChange={handleChange}
                  value={formData.postTitle}
                  placeholder='Post Title'
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
                  onChange={handleChange}
                  name="subCategory"
                  value={formData.subCategory}
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
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  value={editorContent}
                  onEditorChange={handleEditorChange}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style:
                      'body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }',
                  }}
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
}
