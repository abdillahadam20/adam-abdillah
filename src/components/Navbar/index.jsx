import React, { useState, useEffect, useRef } from 'react';
import LogoProfile from '../../assets/images/Logo-Adam-Abdillah.png';
import './index.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('navbar-scroll', handleScroll);
    return () => {
      window.removeEventListener('navbar-scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if(window.pageYOffset > window.offsetTop) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const handleClick = (e) => {
    setClick(e.target.classList.toggle('hamburger-menu'));
  }
  

  return (
    <header onScroll={handleScroll} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#">
                <img src={LogoProfile} alt="Logo" className="block py-6 w-40" />
              </a>
            </div>
            <div className="flex items-center px-4">
              <button onClick={handleClick} id="hamburger" name="hamburger" type="button" className="block absolute right-4">
                <span className="hamburger-menu transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-menu transition duration-300 ease-in-out"></span>
                <span className="hamburger-menu transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar;

