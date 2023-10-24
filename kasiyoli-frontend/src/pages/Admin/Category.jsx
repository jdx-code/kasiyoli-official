import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import baseUrl from '../../apiConfig';

const Category = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryDesc: '',
  });
  const [data, setData] = useState([]);

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
    axios.post(`${baseUrl}/admin/add-category`, {
      categoryName: formData.categoryName,
      categoryDesc: formData.categoryDesc,
    });
  };

  const getCategory = () => {
    axios.get(`${baseUrl}/admin/category`).then((res) => {
      setData(res.data);
    });
  };


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
            <div className="category-form">
                <form onSubmit={handleSubmit} style={myStyle}>

                <label> Category Name:</label>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    onChange={handleChange}
                    name="categoryName"
                    value={formData.categoryName}
                    />
                </div>

                <label>Category Description:</label>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Category Description"
                    onChange={handleChange}
                    name="categoryDesc"
                    value={formData.categoryDesc}
                    />
                </div>
                <br />
                <button className="btn btn-primary">Submit</button>
                </form>
                <br />
                <hr />
                <br />
                <div style={myStyle}>
                    <button className="btn btn-secondary" onClick={getCategory}>
                    Get Category
                    </button>
                </div>
                
            </div>
            <div style={myStyle}>
                {data.length > 0 ? (
                data.map((dataObj) => (
                    <div key={dataObj._id} className="category-card">
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
    </div>
  );
};

export default Category;
