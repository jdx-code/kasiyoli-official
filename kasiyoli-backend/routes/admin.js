const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', authController.getIndex)

router.get('/category', authController.getCategory)
router.post('/add-category', authController.addCategory)
router.get('/get-category/:id', authController.getCategoryById)
router.put('/edit-category/:id', authController.editCategory)
router.delete('/delete-category/:id', authController.deleteCategory)

router.get('/sub-category', authController.getSubCategory)
router.post('/add-subcategory', authController.addSubCategory)
router.get('/get-subcategory/:id', authController.getSubCategoryById)
router.put('/edit-subcategory/:id', authController.editSubCategory)
router.delete('/delete-subcategory/:id', authController.deleteSubCategory)

router.get('/post', authController.getPost)
router.post('/add-post', authController.addPost)
router.get('/get-post/:id', authController.getPostById)
router.put('/edit-post/:id', authController.editPost)
router.delete('/delete-post/:id', authController.deletePost)

module.exports = router