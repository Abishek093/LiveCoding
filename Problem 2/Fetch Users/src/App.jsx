
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState([])


  async function handleFetchUser() {
    try {
      let RandomNum = Math.floor(Math.random() * 10) + 1
      const url = `https://swapi.dev/api/people/${RandomNum}`
      
      await axios.get(url)
      .then((res) => {
        console.log(res.data)
        setUser((prev) => [...prev, { id: RandomNum, name: res.data.name }])
      })
    } catch (error) {
      console.log("Error fetching user", error)
    }
  }

  function handleDelete(id) {
    let newUsers = []
    let index = 0

    for (let i = 0; i < user.length; i++) {
      if (user[i].id !== id) {
        newUsers[index] = user[i]
        index++
      }
    }

    setUser(newUsers)
  }

  return (
    <>
      <button onClick={handleFetchUser}>Add record</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <button onClick={() => handleDelete(e.id)}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
