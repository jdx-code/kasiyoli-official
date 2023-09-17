import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

const VolumeManage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    volumeYear: '',
    volumeNum: '',
    volumeEditor: '',
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDatas = new FormData();
    formDatas.append('coverImage', selectedFile);

    // Append other form data to the FormData object
    formDatas.append('volumeYear', formData.volumeYear);
    formDatas.append('volumeNum', formData.volumeNum);
    formDatas.append('volumeEditor', formData.volumeEditor);

    axios
      .post('http://localhost:5000/admin/add-volume', formDatas, {
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
              <label htmlFor="volumeYear">Volume Year:</label>
              <input
                type="text"
                className="form-control"
                id="volumeYear"
                placeholder="Volume Year"
                onChange={handleChange}
                name="volumeYear"
                value={formData.volumeYear}
              />
            </div>
            <div className="form-group">
              <label htmlFor="volumeNum">Volume Number:</label>
              <input
                type="text"
                className="form-control"
                id="volumeNum"
                placeholder="Volume Number"
                onChange={handleChange}
                name="volumeNum"
                value={formData.volumeNum}
              />
            </div>
            <div className="form-group">
              <label htmlFor="volumeEditor">Volume Editor:</label>
              <input
                type="text"
                className="form-control"
                id="volumeEditor"
                placeholder="Volume Editor"
                onChange={handleChange}
                name="volumeEditor"
                value={formData.volumeEditor}
              />
            </div>
            <div className="form-group">
              <label htmlFor="coverImage">Cover Image:</label>
              <input
                type="file"
                className="form-control-file"
                id="coverImage"
                onChange={handleFileChange}
                name="coverImage"
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
};

export default VolumeManage;
