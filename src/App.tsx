import React from 'react';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FindPasswordPage from './pages/FindPasswordPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/findPassword' element={<FindPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
