import React, { useState, useEffect,useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = ({ contactSectionRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isContactButtonVisible, setIsContactButtonVisible] = useState(true);
  const navbarRef = useRef(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track scroll position and hide the contact button when it reaches the contact section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight; // Get the height of the viewport
      const contactTop = contactSectionRef?.current?.offsetTop || 0;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      
      // Calculate the offset based on a percentage of the viewport height
      const offsetPercentage = 0.5; // Adjust this value for more or less offset
      const offset = windowHeight * offsetPercentage; // Responsive offset based on viewport height

      setScrollPosition(scrollPos);

      // Check when the navbar disappears from view
      setIsNavVisible(scrollPos <= navbarHeight);

      // Detect when the button reaches a point slightly lower in the contact section
      if (scrollPos + windowHeight >= contactTop + offset) {
        setIsContactButtonVisible(false); // Hide button after reaching offset within the contact section
      } else {
        setIsContactButtonVisible(true); // Show the button while it's above the contact section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contactSectionRef]);

  return (
    <>
      <div ref={navbarRef} className="nav-bar container bg-primary mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="w-36 ml-5">
            <p className="xl:ml-8">Ruth Cuéllar</p>
            {/* <img src="" alt="My logo" className="w-36" /> */}
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
            <ul className="flex space-x-8">
              <li className="menu-item">
                <HashLink smooth to="/#about" className="text-gray-800 hover:text-gray-400 text-xl">
                  About
                </HashLink>
              </li>
              <li className="menu-item">
                <HashLink smooth to="/#technologies" className="text-gray-800 hover:text-gray-400 text-xl">
                  Technologies
                </HashLink>
              </li>
              <li className="menu-item">
                <HashLink smooth to="/#projects" className="text-gray-800 hover:text-gray-400 text-xl">
                  Projects
                </HashLink>
              </li>
              <li className="menu-item">
                <HashLink smooth to="/#contact" className="text-secondary hover:text-black text-xl font-bold">
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
                <HashLink smooth to="/#about" className="block hover:text-gray-400">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#technologies" className="block hover:text-gray-400">
                  Technologies
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#projects" className="block hover:text-gray-400">
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#contact" className="block hover:text-gray-400">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sticky Contact Button */}
      {!isNavVisible && isContactButtonVisible && (
        <button
          className="contact-btn fixed px-4 py-3 button-grey rounded-full text-lg font-bold z-50 transition-all duration-300 ease-in-out"
          style={{
            top: `${20 + scrollPosition * 0.1}px`, // Moves the button down with the scroll
            right: '39px',
          }}
        >
          <HashLink smooth to="/#contact">Contact</HashLink>
        </button>
      )}
    </>
  );
};

export default NavBar;
