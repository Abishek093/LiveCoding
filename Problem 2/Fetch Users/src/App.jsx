import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState([])

  useEffect(()=>{
    console.log(user)
  },[user])
  async function handleFetchUser() {
    try {
      let RandomNum = Math.floor(Math.random() * 10)
      const url = `https://swapi.dev/api/people/${RandomNum}`
      await axios((url), {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json'
        },
      }).then((res) => {
        console.log(res.data)
        setUser((prev) => [...prev, res.data.name])
      })
    } catch (error) {
      console.log("Error fetching user", error)
    }
  }

  return (
    <>
      <button onClick={handleFetchUser}>Add record</button>
      <table>
        <th>
          Name
        </th>
        {
          user.map((e) => {
            <tbody>
              <tr>
                <td>{e.name}</td>
                <td>
                  <button>delete</button>
                </td>
              </tr>

            </tbody>
          })
        }

      </table>
    </>
  )
}

export default App
