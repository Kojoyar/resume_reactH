import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Details from './components/Details/Details'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/>} />
        <Route path='/contacts' element={ <Contacts/> } />
      </Routes>
    </>
  )
}

export default App