import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

function GalleryManagement() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [desc, setDesc] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const formData = new FormData();

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.append('file', selectedFile);
    formData.append('desc', desc);

    axios
      .post('http://localhost:5000/admin/add-gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const myStyle = {
    margin: '0 auto',
    width: '50%',
  };

  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="container my-4">
        <div className="col-md-10">
          <form onSubmit={handleSubmit} style={myStyle}>
            <div className="form-group">
              <label htmlFor="file">File:</label>
              <input
                type="file"
                className="form-control"
                placeholder="Select File"
                onChange={handleFileChange}
                name="file"
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Caption/Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={(event) => setDesc(event.target.value)}
                name="desc"
                value={desc}
              />
            </div>
            <button className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GalleryManagement;
