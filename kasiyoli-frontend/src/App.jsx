import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Editorial from './pages/Editorial'
import Interview from './pages/Interview'
import Welcome from './pages/Welcome'
import PostCardContent from './pages/PostCardContent'
import Gallery from './pages/Gallery'
import Dashboard from './pages/Admin/Dashboard'
import Category from './pages/Admin/Category'
import SubCategory from './pages/Admin/SubCategory'
import GalleryManagement from './pages/Admin/GalleryManagement'
import VolumeManage from './pages/Admin/VolumeManage'
import Art from './pages/Art'
import PostManager from './pages/Admin/PostManager'
import PhotoManagement from './pages/Admin/PhotoManagement'
import ReadMore from './pages/ReadMore'

import { useState, useEffect } from 'react';

function App() {    

    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/editorial/:volumeID" element={<Editorial />} />
            <Route path="/welcome/:volumeID" element={<Welcome />} />
            <Route path="/interview/:volumeID" element={<Interview />} />
            <Route path="/postCardContent/:volumeID" element={<PostCardContent />} />
            <Route path="/gallery/:volumeID" element={<Gallery />} />
            <Route path='/art/:volumeID' element={<Art />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/sub-category" element={<SubCategory />} />
            <Route path='/gallery-management' element={<GalleryManagement />}/>
            <Route path='/photo-manage' element={<PhotoManagement />}/>
            <Route path='/post-manager' element={<PostManager /> } />
            <Route path='/volume-manage' element={<VolumeManage />} />

            {/* Read More Route */}
            <Route path='/readmore/:postID/:volumeID' element={<ReadMore />} />

        </Routes>
      </>
    )
}

export default App