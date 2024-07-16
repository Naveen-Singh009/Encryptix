import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState()

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/getData");
    setData(response.data)
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <>
      {data}
    </>
  )
}

export default App
