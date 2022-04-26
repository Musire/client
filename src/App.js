import './styles/App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import ModPage from './pages/ModPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adminPage' element={<AdminPage />} />
        <Route path='/modPage' element={<ModPage />} />
        <Route path='/profilePage' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
