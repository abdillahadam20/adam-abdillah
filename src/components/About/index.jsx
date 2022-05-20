import React, { Component } from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillFacebook } from "react-icons/ai";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="pt-20 pb-24">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">A little about me</h2>
                <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">I started journey become a developer since 2020 and interested become a Software Developer. I learned code on youtube and read some blog. First i learned how to write HTML as a basic web framework then learned CSS as a styling and last learned Javascript Function and MySQL Databases. In 2021 I search a bootcamp to hone my skills programming and learned Fullstack Java Developer. I use Java for programming language and for framework I use Java Spring Boot.</p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Let's Connect with me</h3>
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">You can connect with me in social media below, feel free to ask me and don't hesitate</p>
                <div className="flex items-center">
                  <a href="https://www.linkedin.com/in/adam-abdillah/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
                    <AiFillLinkedin className="fill-current"/>
                  </a>
                  <a href="https://www.instagram.com/adamabdillah20/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
                    <AiFillInstagram className="fill-current"/>
                  </a>
                  <a href="https://twitter.com/abdillahadam20" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
                    <AiFillTwitterCircle className="fill-current"/>
                  </a>
                  <a href="https://github.com/abdillahadam20" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
                    <AiFillGithub className="fill-current"/>
                  </a>
                  <a href="https://www.facebook.com/adam.abdillah.3591/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
                    <AiFillFacebook className="fill-current"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
