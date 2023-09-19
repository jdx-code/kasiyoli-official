import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

function GalleryManagement() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    desc: '',
    volume: '',
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
    formDatas.append('file', selectedFile);
    formDatas.append('desc', formData.desc);
    formDatas.append('volume', formData.volume);

    axios.post('http://localhost:5000/admin/add-gallery', formDatas, {
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
                onChange={handleChange}
                name="desc"
                value={formData.desc}
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
