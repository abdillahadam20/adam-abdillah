import React, { useState } from 'react';
import Emoji, { EmojiProps } from 'a11y-react-emoji';
import Foto from '../../assets/images/Foto-Adam-Abdillah.png';
import About from '../About';

export default function HeroSection() {

  return (
    <div>
      <section className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md :text-xl">Hi I'm <Emoji symbol="😄" label="smile" /><span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Adam Abdillah</span></h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Junior Front End Developer</h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">I started journey become a developer since 2020 and interested become a Software Developer. I learned code on youtube and read some blog. First i learned how to write HTML as a basic web framework then learned CSS as a styling and last learned Javascript Function and MySQL Databases. In 2021 I search a bootcamp to hone my skills programming and learned Fullstack Java Developer. I use Java for programming language and for framework I use Java Spring Boot.</p>
              <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact Me</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <img src={Foto} alt="Adam Abdillah" className="max-w-full mx-auto" />
                <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125 ">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#06B6D4" d="M40.6,-43.1C50,-31.1,53.4,-15.6,53.4,0C53.5,15.7,50.2,31.3,40.8,42.6C31.3,53.9,15.7,60.8,-2.9,63.7C-21.4,66.6,-42.8,65.4,-55.2,54.1C-67.5,42.8,-70.8,21.4,-67.2,3.6C-63.6,-14.2,-53.2,-28.5,-40.8,-40.5C-28.5,-52.5,-14.2,-62.2,0.7,-62.9C15.6,-63.5,31.1,-55.1,40.6,-43.1Z" transform="translate(100 100) scale(1.1)" />
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
