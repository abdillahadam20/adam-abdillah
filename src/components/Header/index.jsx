import React, { useState, useEffect, useRef } from 'react';
import LogoProfile from '../../assets/images/Logo-Adam-Abdillah.png';
import { AiOutlineMenu } from "react-icons/ai";
import './index.scss';
import Navbar from '../Navbar';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if(window.scrollY > window.setPageYOffset) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  })

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <header className={`${show && "navbar-scroll bg-transparent absolute top-0 left-0 w-full flex items-center z-10"}`}>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#">
                <img src={LogoProfile} alt="Logo" className="block py-6 w-40" />
              </a>
            </div>
            <div className="flex items-center px-4">
              <Navbar />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;