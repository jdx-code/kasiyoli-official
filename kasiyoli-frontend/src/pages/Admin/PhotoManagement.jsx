import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'

function PhotoManagement() {

    const [selectedFile, setSelectedFile] = useState(null)
    const [formData, setFormData] = useState({ 
            title: "",
            studentName: ""
        }
    )

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
          <label>Caption/Description : </label>
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
          <label>Caption/Description : </label>
          <input 
              type='text'
              placeholder='Student Name'
              onChange={handleChange}
              name='studentName'
              value={formData.studentName}
          />
          </p>
          <button>Submit</button>
        </form>

        </div>
    </div>

  )
}

export default PhotoManagement
