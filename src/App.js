import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage" 
import './App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* Define other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
