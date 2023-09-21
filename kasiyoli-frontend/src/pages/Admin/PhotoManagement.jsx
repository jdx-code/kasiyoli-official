import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

function PhotoManagement() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    studentName: '',
    volume: '',
    photoType: '',
  });

  const [volume, setVolume] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/volume')
      .then((res) => {
        setVolume(res.data);
      })
      .catch((error) => {
        console.error('Error fetching volume:', error);
      });
  }, []);

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
    formDatas.append('image', selectedFile);
    formDatas.append('title', formData.title);
    formDatas.append('studentName', formData.studentName);
    formDatas.append('volume', formData.volume);
    formDatas.append('photoType', formData.photoType);

    axios
      .post('http://localhost:5000/admin/add-photo', formDatas, {
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

  const photoType = [
    {
      "_id" : 1,
      "event" : "Student"    
    },
    {
      "_id" : 2,
      "event" : "Tezpur"    
    },
    {
      "_id" : 3,
      "event" : "Jaipur"    
    },
    {
      "_id" : 4,
      "event" : "College Week"    
    },
    {
      "_id" : 5,
      "event" : "College Image"    
    },
    {
      "_id" : 6,
      "event" : "Farewell"    
    },
    {
      "_id" : 7,
      "event" : "Wall Magazine"    
    },
    {
      "_id" : 8,
      "event" : "সাংস্কৃতিক শোভাযাত্ৰা"    
    },
    {
      "_id" : 9,
      "event" : "প্ৰাচীৰ পত্ৰিকাৰ প্ৰস্তুতি"    
    },
]

  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="container my-4">
        <div className="col-md-10">
          <form onSubmit={handleSubmit} style={myStyle}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={formData.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">File:</label>
              <input
                type="file"
                className="form-control"
                placeholder="Select File"
                onChange={handleFileChange}
                name="image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentName">Student Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Student Name"
                onChange={handleChange}
                name="studentName"
                value={formData.studentName}
              />
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
                {volume.map((vol) => (
                  <option key={vol._id} value={vol._id}>
                    {vol.volumeNum}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="photoType">Photo Type:</label>
             
              <select
                className="form-control"
                onChange={handleChange}
                name="photoType"
                value={formData.photoType}
              >
                <option value="">Select photoType</option>
                {photoType.map((photo) => (
                  <option key={photo._id} value={photo._id}>
                    {photo.event}
                  </option>
                ))}
              </select>
              
            </div>
            <br />
            <button className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PhotoManagement;
