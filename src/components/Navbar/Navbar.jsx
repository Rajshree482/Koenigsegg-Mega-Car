import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='nav'>
      <div className="nav-logo">Koenigsegg</div>
      
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => setIsMenuOpen(false)}>Home</li>
        <li onClick={() => setIsMenuOpen(false)}>Explore</li>
        <li onClick={() => setIsMenuOpen(false)}>About</li>
        <li className='nav-contact' onClick={() => setIsMenuOpen(false)}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar