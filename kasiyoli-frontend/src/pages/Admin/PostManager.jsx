import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function PostManager() {
  const [postTitle, setPostTitle] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send all the data to your Express backend
      const response = await axios.post('http://localhost:5000/admin/add-post', {
        postTitle,
        category,
        subCategory,
        postContent: editorContent,
      });

      // Handle the response from the backend as needed
      console.log(response.data);

      // Clear the form fields after submission if needed
      setPostTitle('');
      setCategory('');
      setSubCategory('');
      setEditorContent('');
    } catch (error) {
      console.error('Error sending data to the backend', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subCategory">Sub Category:</label>
          <input
            type="text"
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          />
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
