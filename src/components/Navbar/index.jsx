import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <nav onClick={handleClick} className={`${!isActive ? "hidden-navbar absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none": ""}`}>
      <ul className="block lg:flex">
        <li clasName="group">
          <a href="#home" className="text-base flex text-dark py-2 mx-8 hover:text-primary">Beranda</a>
        </li>
        <li clasName="group">
          <a href="#about" className="text-base flex text-dark py-2 mx-8 hover:text-primary">About</a>
        </li>
        <li clasName="group">
          <a href="#portofolio" className="text-base flex text-dark py-2 mx-8 hover:text-primary">Portofolio</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;