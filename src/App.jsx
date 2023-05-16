
// import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
