import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Maps from './Pages/Maps.jsx';
import Profile from './Pages/Profile.jsx'
import Chats from './Pages/Chat.jsx'
import Settings from './Pages/Settings.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Maps/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
