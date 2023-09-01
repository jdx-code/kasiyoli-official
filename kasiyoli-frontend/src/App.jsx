import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Editorial from './pages/Editorial'
import Interview from './pages/Interview'
import Welcome from './pages/Welcome'
import PostCardContent from './pages/PostCardContent'
import Gallery from './pages/Gallery'


function App() {

    return (
      <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/postCardContent" element={<PostCardContent />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </>
  )
}

export default App