import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Sidebar from '../../components/Sidebar'

const SubCategory = () => {
    const [formData, setFormData] = useState({
            categoryName: "",
            subCategory: "", 
            subCategoryDesc: ""
        }
    )

    const [categories, setCategories] = useState([]); // Store categories here

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
        Axios.post('http://localhost:5000/admin/add-subcategory', {
            categoryName: formData.categoryName,
            subCategory: formData.subCategory,
            subCategoryDesc: formData.subCategoryDesc
        })
    }

    const getSubCategory = () => {
        Axios.get('http://localhost:5000/admin/sub-category')
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        Axios.get('http://localhost:5000/admin/category')
        .then((res) => {
            setCategories(res.data);
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once

    return (
        <div class="row">
            <div class="col-sm-2">
                <Sidebar />
            </div>
            <div class="col-md-10">
                   
            <form onSubmit={handleSubmit}>
                <select
                    onChange={handleChange}
                    name="categoryName"
                    value={formData.categoryName}
                    >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                        {category.categoryName}
                        </option>
                    ))}
                </select>
                <input 
                    type='text'
                    placeholder='Sub Category'
                    onChange={handleChange}
                    name="subCategory"
                    value={formData.subCategory}
                />
                <input 
                    type='text'
                    placeholder='Sub-Category Description'
                    onChange={handleChange}
                    name="subCategoryDesc"
                    value={formData.subCategoryDesc}
                />
                <button>Submit</button>
            </form>

            <button onClick={getSubCategory}>Get SubCategory</button>
            <div>
                {data.length > 0 ? (
                        data.map((dataObj) => (
                            <div key={dataObj._id}>
                                <p>Category Name: {dataObj.category.categoryName}</p>
                                <p>Sub Category Name: {dataObj.subCategory}</p>
                                <p>Sub Category Description: {dataObj.subCategoryDesc}</p>
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

export default SubCategory
