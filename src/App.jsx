import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App  
