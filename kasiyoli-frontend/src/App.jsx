import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
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

function App() {

    return (
      <>
        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/postCardContent" element={<PostCardContent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/art' element={<Art />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/sub-category" element={<SubCategory />} />
            <Route path='/gallery-management' element={<GalleryManagement />}/>
            <Route path='/photo-manage' element={<PhotoManagement />}/>
            <Route path='/post-manager' element={<PostManager /> } />
            <Route path='/volume-manage' element={<VolumeManage />} />
        </Routes>
      </>
    )
}

export default App