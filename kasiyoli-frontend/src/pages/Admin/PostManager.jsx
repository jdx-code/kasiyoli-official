import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function PostManager() {

  const editorRef = useRef(null);  

  const [formData, setFormData] = useState({
      postTitle: "",
      category: "",
      subCategory: "", 
      volume: "",        
    }
  )

  const [editorContent, setEditorContent] = useState('');

  const [categories, setCategories] = useState([]); // Store categories here
  const [subCategories, setSubCategories] = useState([]); // Store sub-categories here
  const [volume, setVolume] = useState([]); // Store sub-categories here

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axios.get('http://localhost:5000/admin/category')
    .then((res) => {
        setCategories(res.data);
    })
    .catch((error) => {
        console.error('Error fetching categories:', error);
    });
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axios.get('http://localhost:5000/admin/sub-category')
    .then((res) => {
        setSubCategories(res.data);
    })
    .catch((error) => {
        console.error('Error fetching categories:', error);
    });
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    // Fetch categories from the server when the component mounts
    axios.get('http://localhost:5000/admin/volume')
    .then((res) => {
        setVolume(res.data);
    })
    .catch((error) => {
        console.error('Error fetching volume:', error);
    });
  }, []); // Empty dependency array to run the effect only once


  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send all the data to your Express backend
      const response = await axios.post('http://localhost:5000/admin/add-post', {
        postTitle: formData.postTitle,
        category: formData.category,
        subCategory: formData.subCategory,
        volume: formData.volume,
        postContent: editorContent,
      });

      // Handle the response from the backend as needed
      console.log(response.data);

      // Clear the form fields after submission if needed
      setFormData('');      
    } catch (error) {
      console.error('Error sending data to the backend', error);
    }
  };

  const handleChange = (event) => {
      setFormData(prevFormData => {
          return{
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            name="postTitle"            
            onChange={handleChange}
            value={formData.postTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>          
          <select
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
        <div>
          <label htmlFor="subCategory">Sub Category:</label>
          <select
              onChange={handleChange}
              name="subCategory"
              value={formData.subCategory}
          >
              <option value="">Select a category</option>
              {subCategories.map((subcat) => (
                  <option key={subcat._id} value={subcat._id}>
                  {subcat.subCategory}
                  </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="volume">Volume:</label>
          <select
              onChange={handleChange}
              name="volume"
              value={formData.volume}
          >
              <option value="">Select a volume</option>
              {volume.map((vol) => (
                  <option key={vol._id} value={vol._id}>
                  {vol.volumeNum}
                  </option>
              ))}
          </select>
        </div>
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
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style:
              'body { font-family: Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
