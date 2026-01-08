import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from './components/Main'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const login = () => { setIsAuthenticated(true) }
  const logout = () => { setIsAuthenticated(false) }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route path="dashboard" element={<Dashboard logout={logout} />} />
        </Route>
        <Route path="signin" element={<LoginPage login={login}/>} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
