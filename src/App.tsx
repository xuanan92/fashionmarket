import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from "./components/Homepage" 
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/Login'

  // TODO: abc
function App() {
  return (
    <div className = "App">
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
