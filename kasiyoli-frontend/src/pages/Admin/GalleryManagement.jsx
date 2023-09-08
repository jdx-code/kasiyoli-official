import React, { useState } from 'react'
import axios from 'axios'

function GalleryManagement() {

const [selectedFile, setSelectedFile] = useState(null)
const [desc, setDesc] = useState('')

const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
}

const handleChange = (event) => {
  setDesc(prevDesc => {
    return{
        ...prevDesc,
        [event.target.name]: event.target.value
    }
  })
}

const formData = new FormData()

const handleSubmit = () => {

    formData.append('file', selectedFile)
    formData.append('desc', desc)

    axios.post('http://localhost:5000/admin/add-gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
        <label>File : </label>
        <input 
            type='file'
            placeholder='Select File'
            onChange={handleFileChange}
            name='file'
        />
        </p>
        <p>
        <label>Caption/Description : </label>
        <input 
            type='text'
            placeholder='Description'
            onChange={handleChange}
            name='desc'
            value={desc}
        />
        </p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GalleryManagement