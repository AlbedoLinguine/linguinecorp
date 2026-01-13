import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Mancala from './pages/Menu/Menu Items/Mancala'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            🍝 Linguine Corp
          </Link>
          
          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Gallery</Link>
            {/* <Link to="/about" className="nav-link">About</Link> */}
            {/* <Link to="/contact" className="nav-link">Contact</Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>Menu</Link>
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/mancala" element={<Mancala />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <div style={{ height: "10vh" }}></div>
    </Router>
  )
}

export default App
