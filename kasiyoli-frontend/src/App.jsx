import { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from './components/Menu'
import './App.css'

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/').then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  return (
    <>

      <nav>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <p>Kasiy7oli</p>
          </div>
          <div className="hidden md:block">
            <Menu />
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          {showMobileMenu && <Menu />}
        </div>
      </nav>

      <div>
        {listOfUsers.map((user) => {
          return (
            <div>
              <h3>Username : { user.userName } </h3>
              <h3>Email : { user.email } </h3>
            </div>
          )
        })} 
      </div>
    </>
  )
}

export default App
