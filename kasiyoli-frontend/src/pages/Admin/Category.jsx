import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from "../../components/Sidebar"

const Category = () => {

    const [formData, setFormData] = useState({
            categoryName: "", 
            categoryDesc: ""
        }
    )
    const [data, setData] = useState({})

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/admin/add-category', {
            categoryName: formData.categoryName,
            categoryDesc: formData.categoryDesc
        })
    }

    const getCategory = () => {
        axios.get('http://localhost:5000/admin/category')
        .then((res) => {
            setData(res.data)
        })
    }
    return (
        <div class="row">
            <div class="col-sm-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Category Name"
                            onChange={handleChange}
                            name="categoryName"
                            value={formData.categoryName}
                        />
                        <input
                            type="text"
                            placeholder="Category Description"
                            onChange={handleChange}
                            name="categoryDesc"
                            value={formData.categoryDesc}
                        />
                        <button>Submit</button>
                    </form>
                    <button onClick={getCategory}>Get Category</button>
                    <div>
                        {data.length > 0 ? (
                                data.map((dataObj) => (
                                    <div key={dataObj._id}>
                                        <p>Category Name: {dataObj.categoryName}</p>
                                        <p>Category Description: {dataObj.categoryDesc}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No data available.</p>
                            )} 
                    </div>
                                    
                </div>
            </div>

    )
}

export default Category
