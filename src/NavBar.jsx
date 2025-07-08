import { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">Home</a>
        <button className="navbar-burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <a href="/about" className="navbar-item">About</a>
          <a href="/contact" className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
