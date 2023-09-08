const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const Category = require('../models/Category')
const SubCategory = require('../models/SubCategory')
const Post = require('../models/Post')
const Gallery = require('../models/Gallery')
const cloudinary = require('../middleware/cloudinary')
const { render } = require('ejs')

module.exports = {
  getIndex : (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).json({ authenticated: true });
    }
    
    return res.status(401).json({ authenticated: false });
  },

  getCategory: async (req, res) => {
    try{
      const category = await Category.find()
      return res.json(category)
    }catch(err){
      console.error(err)
    }
  },
  
  addCategory: async (req, res) => {
    try{
      await Category.create({
        categoryName: req.body.categoryName,
        categoryDesc: req.body.categoryDesc,        
      })
      return res.status(200).json({
        message: "Successfully created",
        success: true
      })
    }catch(err){
      return res.status(500).json({
        message: "Not created",
        success: false
      })
    }
  },

  getCategoryById: async(req, res) => {
    try{
      const category = await Category.findById({_id: req.params.id})
      return res.json(category)
    }catch(err){
      console.error(err)
    }
  },

  editCategory: async (req, res) => {
    try{
      let category = await Category.findById(req.params.id)
      if(!category){
        return res.status(500).json({
          message: "Not category",
          success: false
        })
      }else{
          category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {
              new: true,
              runValidators: true,
          })
          return res.status(500).json({
            message: "Updated Successfully",
            success: true
          })
      }

    }catch(err){
      return res.status(500).json({
        message:"Not Updated",
        success:false
      })
    }
  },

  deleteCategory: async (req, res) => {
    try{
      await Category.deleteOne({_id: req.params.id})
      return res.status(200).json({
        message:"Category Deleted",
        success:true
      })
    }catch(err){
      return res.status(500).json({
        message:"Not deleted",
        success:false
      })
    }
  },

  getSubCategory: async (req, res) => {
    try{
      const category = await Category.find()
      const subCategory = await SubCategory.find().populate('category')
      return res.json(subCategory)
    }catch(err){
      console.error(err)
    }
  },

  addSubCategory: async (req, res) => {
    try{
      await SubCategory.create({
        category: req.body.categoryName,
        subCategory: req.body.subCategory,
        subCategoryDesc: req.body.subCategoryDesc
      })
      return res.status(200).json({
        message: "Successfully created",
        success: true
      })
    }catch(err){
      return res.status(500).json({
        message: "Not created",
        success: false
      })
    }
  },

  getSubCategoryById: async (req, res) => {
    try{
      const subCategory = await SubCategory.findById({_id: req.params.id})
      return res.json(subCategory)
    }catch(err){
      return res.status(500).json({
        message: "Not created",
        success: false
      })
    }
  },

  editSubCategory: async (req, res) => {
    try{
      let subCategory = await SubCategory.findById(req.params.id)
      if(!subCategory){
        return res.status(500).json({
          message: "Not subcategory",
          success: false
        })
      }else{
          subCategory = await SubCategory.findOneAndUpdate({_id: req.params.id}, req.body, {
              new: true,
              runValidators: true,
          })
          return res.status(500).json({
            message: "Updated Successfully",
            success: true
          })
      }
    }catch(err){
      return res.status(500).json({
        message: "Not Sub Category",
        success: false
      })
    }
  },

  deleteSubCategory: async (req, res) => {
    try{
      await SubCategory.deleteOne({_id: req.params.id})
      return res.status(200).json({
        message:"Subcategory Deleted",
        success:true
      })
    }catch(err){
      return res.status(500).json({
        message:"Not Deleted",
        success:false
      })
    }
  },

  getPost: async (req, res) => {
    try{
      const post = await Post.find()
      return res.json(post)
    }catch(err){

    }
  },

  addPost: async (req, res) => {
    try{
      await Post.create({
        postTitle: req.body.postTitle,
        category: req.body.category,
        subCategory: req.body.subCategory,
        postContent: req.body.postContent
      })
      return res.status(200).json({
        message: "Successfully created",
        success: true
      })
    }catch(err){
      return res.status(500).json({
        message: "Not created",
        success: false
      })
    }
  },

  getPostById: async (req, res) => {
    try{
      const post = await Post.findById({_id: req.params.id})
      return res.json(post)
    }catch(err){
      console.error(err)
    }
  },

  editPost: async (req, res) => {
    try{
      let post = await Post.findById(req.params.id)
      if(!post){
        return res.status(500).json({
          message: "Not post",
          success: false
        })
      }else{
          post = await Post.findOneAndUpdate({_id: req.params.id}, req.body, {
              new: true,
              runValidators: true,
          })
          return res.status(500).json({
            message: "Updated Successfully",
            success: true
          })
      }
    }catch(err){
      return res.status(500).json({
        message: "Not created",
        success: false
      })
    }
  },
  
  deletePost: async (req, res) => {
    try{
      await Post.deleteOne({_id: req.params.id})
      return res.status(200).json({
        message:"Post Deleted",
        success:true
      })
    }catch(err){
      return res.status(500).json({
        message:"Not Deleted",
        success:false
      })
    }
  },

  getGallary: async (req, res) => {
    try{
      const gallery = await Gallery.find()
      res.render('gallery',{
        gallery,
      })
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }
  },

  addGallery: async (req, res) => {
    try{
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const imageUrl = result.secure_url;
      const cloudinary_id = result.public_id
      await Gallery.create({
          file: imageUrl,
          description: req.body.desc,
          cloudinary_id,
      })
      console.log('file added')
      res.redirect('/admin/gallery')
    }catch(err){
      return res.status(500).json({
        message:"Not Add",
        success:false
      })
    }
  },
}

