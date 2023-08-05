import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/').then((response) => {
      setListOfUsers(response.data)
    })
  }, [])

  return (
    <>
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
