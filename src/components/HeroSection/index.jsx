import React, { useState } from 'react';
import Emoji, { EmojiProps } from 'a11y-react-emoji';
import Foto from '../../assets/images/Foto-Adam-Abdillah.png';
import About from '../About';
import Portfolio from '../Portfolio';

export default function HeroSection() {

  return (
    <div>
      <section className="pt-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md :text-xl">Hi I'm <Emoji symbol="😄" label="smile" /><span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Adam Abdillah</span></h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Junior Front End Developer</h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">I started journey become a developer since 2020 and interested become a Software Developer. I learned code on youtube and read some blog. First i learned how to write HTML as a basic web framework then learned CSS as a styling and last learned Javascript Function and MySQL Databases. In 2021 I search a bootcamp to hone my skills programming and learned Fullstack Java Developer. I use Java for programming language and for framework I use Java Spring Boot.</p>
              <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact Me</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 -z-10">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img src={Foto} alt="Adam Abdillah" className="max-w-full mx-5 relative bottom-20" />
                <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125 ">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#06B6D4" d="M63.9,3C63.9,33,32,66.1,1.6,66.1C-28.7,66.1,-57.4,33,-57.4,3C-57.4,-27,-28.7,-54,1.6,-54C32,-54,63.9,-27,63.9,3Z" transform="translate(90 60) scale(1.1)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
    </div>
  )
}
