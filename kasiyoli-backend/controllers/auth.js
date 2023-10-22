const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')
const Category = require('../models/Category')
const SubCategory = require('../models/SubCategory')
const Post = require('../models/Post')
const Gallery = require('../models/Gallery')
const cloudinary = require('../middleware/cloudinary')
const { render } = require('ejs')
const Volume = require('../models/Volume')
const Photo = require('../models/Photo')

const visitedIPs = new Set();
let visitorCount = 1487;

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
      const creationDate = new Date()
      const updationDate = new Date()
      const isActive = true
      await Category.create({
        categoryName: req.body.categoryName,
        categoryDesc: req.body.categoryDesc,   
        creationDate, 
        updationDate,
        isActive
      })
      console.log("category added")
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
      const subCategory = await SubCategory.find({category: req.params.categories}).populate('category')
      return res.json(subCategory)
    }catch(err){
      console.error(err)
    }
  },

  addSubCategory: async (req, res) => {
    try{
      const creationDate = new Date()
      const updationDate = new Date()
      const isActive = true
      await SubCategory.create({
        category: req.body.categoryName,
        subCategory: req.body.subCategory,
        subCategoryDesc: req.body.subCategoryDesc,
        creationDate, 
        updationDate,
        isActive
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

  getReadMoreContent: async (req, res) => {
    try{
      const post = await Post.findById(req.params.postID).populate('category')
      
      return res.json(post)
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }
  },

  getPosts: async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 5; // You can set the default limit as you wish
  
      const post = await Post
        .find({ volume: req.params.volumeID })
        .populate('category')
        .sort({ creationDate: -1 })
        .limit(limit)        
  
      return res.json(post);
    } catch (err) {
      return res.status(500).json({
        message: "Not Found",
        success: false
      });
    }
  },
  

  getPost: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4; // Set your desired limit per page
    const skip = (page - 1) * limit;
  
    try {
      const totalCount = await Post.countDocuments({ volume: req.params.volumeID }); // Filter by volumeID
      const posts = await Post.find({ volume: req.params.volumeID })
        .skip(skip)
        .limit(limit)
        .populate('category');
  
      return res.json({
        posts,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Not Found",
        success: false
      });
    }
  },
  
  
  addPost: async (req, res) => {
    try {      
      // Extract text fields from the form data
      const { title, category, subCategory, volume, content } = req.body;       
  
      // Create a new Post document
      const newPost = await Post.create({
        postTitle : title,
        category,
        subCategory,
        volume,
        postContent : content,        
      });
  
      console.log('post added');
      return res.status(200).json({
        message: 'Successfully created',
        success: true,
        postData: newPost, // Optionally, return the created post data
      });
    } catch (err) {
      console.error('Error creating post:', err);
      return res.status(500).json({
        message: 'Not created',
        success: false,
      });
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

  getGallery: async (req, res) => {
    try{
      const gallery = await Gallery.find()
      return res.json(gallery)
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
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "kasiyoli"
      })

      const imageUrl = result.secure_url;
      const cloudinary_id = result.public_id
      await Gallery.create({
          file: imageUrl,
          description: req.body.desc,
          volume: req.body.volume,
          cloudinary_id,
      })
      console.log('file added')
    }catch(err){
      return res.status(500).json({
        message:"Not Add",
        success:false
      })
    }
  },

  getVolume: async (req, res) => {
    try{
      const volume = await Volume.find()
      return res.json(volume)
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }
  },

  addVolume: async (req, res) => {
    try{
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "kasiyoli"
      })

      const imageUrl = result.secure_url;
      const cloudinary_id = result.public_id
      await Volume.create({
        volumeYear: req.body.volumeYear,
        volumeNum: req.body.volumeNum,
        volumeEditor: req.body.volumeEditor,
        coverImage: imageUrl,
        cloudinary_id,
      })
      console.log("Volume added")
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }
  },

  getPhoto: async (req, res) => {
    try{
      const photo = await Photo.find()
      return res.json(photo)
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }
  },

  addPhoto: async (req, res) => {
    try{
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "kasiyoli"
      })

      const imageUrl = result.secure_url;
      const cloudinary_id = result.public_id
      await Photo.create({
        title: req.body.title,
        image: imageUrl,
        studentName: req.body.studentName,
        volume: req.body.volume,
        photoType: req.body.photoType,
        cloudinary_id,
      })
      console.log("Volume added")
    }catch(err){
      return res.status(500).json({
        message:"Not Added",
        success:false
      })
    }
  },

  uploadImage: async (req, res) => {
    try{
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "kasiyoli"
      })      
     
      const imageUrl = result.secure_url;
      
      res.json({ imageUrl })
      
    }catch(err){
      return res.status(500).json({
        message:"Not Added",
        success:false
      })
    }
  },

  // getVisitorCount: async (req, res) => {
  //   const clientIP = req.ip; // Get the visitor's IP address
  //   // For simplicity, you can use the IP address as a unique identifier
  //   if (!visitedIPs.includes(clientIP)) {
  //     visitedIPs.push(clientIP);
  //     visitorCount++;
  //   }
  //   res.json({ count: visitorCount });
  //   next();
  // }

  getVisitorCount: async (req, res) => {
    try{
      const clientIP = req.connection.remoteAddress; // Get the visitor's IP address
      // For simplicity, you can use the IP address as a unique identifier
      if (!visitedIPs.has(clientIP)) {
        visitedIPs.add(clientIP);
        visitorCount++;
      }
      return res.json(visitorCount)
    }catch(err){
      return res.status(500).json({
        message:"Not Found",
        success:false
      })
    }

  },

}

