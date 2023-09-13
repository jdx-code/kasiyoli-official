import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'

function PhotoManagement() {

    const [selectedFile, setSelectedFile] = useState(null)
    const [formData, setFormData] = useState({ 
            title: "",
            studentName: "",
            volume: "",
            photoType: ""
        }
    )

    const [volume, setVolume] = useState([]); // Store volume here

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
    

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
    event.preventDefault();

    const formDatas = new FormData();
    formDatas.append('image', selectedFile);

    // Append other form data to the FormData object
    formDatas.append('title', formData.title);
    formDatas.append('studentName', formData.studentName);
    formDatas.append('volume', formData.volume);
    formDatas.append('photoType', formData.photoType);
    
        axios.post('http://localhost:5000/admin/add-photo', formDatas, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.error(error);
        })
    }

  return (

      <div class="row">
        <div class="col-sm-2">
            <Sidebar />
        </div>
        <div class="col-md-10">
            
        <form onSubmit={handleSubmit}>
          <p>
          <label>Title : </label>
          <input 
              type='text'
              placeholder='Title'
              onChange={handleChange}
              name='title'
              value={formData.volumeNum}
          />
          </p>
          <p>
          <label>File : </label>
          <input 
              type='file'
              placeholder='Select File'
              onChange={handleFileChange}
              name='image'
          />
          </p>
          <p>
          <label>Student Name : </label>
          <input 
              type='text'
              placeholder='Student Name'
              onChange={handleChange}
              name='studentName'
              value={formData.studentName}
          />
          </p>
          <p>
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
          </p>
          <p>
          <label>Photo Type : </label>
          <input 
              type='text'
              placeholder='Photo Type'
              onChange={handleChange}
              name='photoType'
              value={formData.photoType}
          />
          </p>
          <button>Submit</button>
        </form>

        </div>
    </div>

  )
}

export default PhotoManagement
