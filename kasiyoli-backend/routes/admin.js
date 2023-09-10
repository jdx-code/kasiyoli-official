const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const upload = require('../middleware/multer')

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

router.get('/gallery', authController.getGallery)
router.post('/add-gallery', upload.single('file'), authController.addGallery)

router.get('/volume', authController.getVolume)
router.post('/add-volume', upload.single('coverImage'), authController.addVolume)

router.get('/photo', authController.getPhoto)
router.post('/add-photo', upload.single('image'), authController.addPhoto)

module.exports = router