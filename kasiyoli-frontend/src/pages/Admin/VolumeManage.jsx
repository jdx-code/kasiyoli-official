import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'

const VolumeManage = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({ 
      volumeYear: "",
      volumeNum: "",
      volumeEditor: ""
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
    formDatas.append('coverImage', selectedFile);

    // Append other form data to the FormData object
    formDatas.append('volumeYear', formData.volumeYear);
    formDatas.append('volumeNum', formData.volumeNum);
    formDatas.append('volumeEditor', formData.volumeEditor);

      axios.post('http://localhost:5000/admin/add-volume', formDatas, {
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
            <label>Volume Year</label>
            <input 
              type='text'
              placeholder='Volume Year'
              onChange={handleChange}
              name="volumeYear"
              value={formData.volumeYear}
            />
          </p>
          <p>
            <label>Volume Number</label>
            <input 
                type='text'
                placeholder='Volume Number'
                onChange={handleChange}
                name="volumeNum"
                value={formData.volumeNum}
            />
          </p>
          <p>
            <label>Volume Editor</label>
            <input 
              type='text'
              placeholder='Volume Editor'
              onChange={handleChange}
              name="volumeEditor"
              value={formData.volumeEditor}
            />
          </p>
          <p>
            <label>Cover Image</label>
            <input 
              type='file'
              placeholder='Select Image'
              onChange={handleFileChange}
              name='coverImage'
            />
          </p>
          <button type='submit'>Submit</button>
        </form>

        </div>
    </div>
  )
}

export default VolumeManage
