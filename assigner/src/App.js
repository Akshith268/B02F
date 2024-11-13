import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/Indexpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
     <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
     </Router>
  );
}

export default App;
