import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


        return (
            <div className=" container bg-primary mx-auto p-4">
      <div className="flex justify-between items-center">
        <div className="w-36 ml-5">
          <img src="" alt="My logo" className="w-36" /> 
        </div>
      
        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button
            id="burger-btn"
            aria-pressed={isMenuOpen}
            onClick={toggleMenu}
            className="focus:outline-none text-gray-800"
          >
            <span className="stripes">
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </span>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 mr-8">
            <li className="menu-item">
              <HashLink smooth  to="/#about" className="text-gray-800 hover:text-gray-400 text-xl">
                About
              </HashLink>
            </li>
            <li className="menu-item">
              <HashLink smooth to="/#tecnologies" className="text-gray-800 hover:text-gray-400 text-xl">
                Tecnologies
              </HashLink>
            </li>
            <li className="menu-item">
              <HashLink smooth to="/#projects" className="text-gray-800 hover:text-gray-400 text-xl">
                Projects
              </HashLink>
            </li>
            <li className="menu-item">
              <HashLink smooth  to="/#contact" className="text-gray-800 hover:text-gray-400 text-xl">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="text-gray-800">
            <li>
              <HashLink smooth  to="/#about" className="block hover:text-gray-400">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth  to="/tecnologies" className="block hover:text-gray-400">
                Tecnologies
              </HashLink>
            </li>
            <li>
              <HashLink smooth  to="/#projects" className="block hover:text-gray-400">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="block hover:text-gray-400">
                Contact
              </HashLink>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      )}
    </div>

    )
}

export default NavBar;