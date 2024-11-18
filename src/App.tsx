import { useEffect, useState } from 'react'
import { Api } from './api'

const api = new Api()

function App() {
  const [value, setValue] = useState({})

  useEffect(()=>{
    api.store.getInventory().then((res)=>res.json()).then((data)=>setValue(data))
  },[])

  return JSON.stringify(value)
}

export default App
