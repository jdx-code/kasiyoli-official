import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Editorial from './pages/Editorial'
import Interview from './pages/Interview'

function App() {

    return (
      <>

        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/interview" element={<Interview />} />
        </Routes>
      </>
  )
}

export default App