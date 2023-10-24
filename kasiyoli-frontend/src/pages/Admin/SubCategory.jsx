import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import baseUrl from '../../apiConfig';

function SubCategory() {
    const [formData, setFormData] = useState({
        categoryName: "",
        subCategory: "", 
        subCategoryDesc: ""
    })

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
        axios.post(`${baseUrl}/admin/add-subcategory`, {
            categoryName: formData.categoryName,
            subCategory: formData.subCategory,
            subCategoryDesc: formData.subCategoryDesc
        })
    }

    const getSubCategory = () => {
        axios.get(`${baseUrl}/admin/sub-category`)
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        // Fetch categories from the server when the component mounts
        axios.get(`${baseUrl}/admin/category`)
        .then((res) => {
            setCategories(res.data);
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []); // Empty dependency array to run the effect only once

  const myStyle = {
    margin: "0 auto",
    width: "50%"     
  }

  return (
    <div className="row">
      <div className="col-sm-2">
        <Sidebar />
      </div>
      <div className="container my-12">
      <div className="col-md-10">
        <form onSubmit={handleSubmit} style={myStyle}>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name:</label>
            <select
              className="form-control"
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
          </div>
          <div className="form-group">
            <label htmlFor="subCategory">Sub Category:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Sub Category"
              onChange={handleChange}
              name="subCategory"
              value={formData.subCategory}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subCategoryDesc">Sub-Category Description:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Sub-Category Description"
              onChange={handleChange}
              name="subCategoryDesc"
              value={formData.subCategoryDesc}
            />
          </div><br />
          <button className="btn btn-primary">
            Submit
          </button>
        </form><br />
        <hr /> <br />
        <div style={myStyle}>
            <button className="btn btn-secondary" onClick={getSubCategory}>
            Get SubCategory
            </button>
        </div><br />
        <div style={myStyle}>
          {data.length > 0 ? (
            data.map((dataObj) => (
              <div key={dataObj._id} className="mt-3">
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
    </div>
  );
}

export default SubCategory;
