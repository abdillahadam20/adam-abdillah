import React, { Component } from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="pt-36 pb-32">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Lorem ipsum dolor sit amet.</h2>
                <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod exercitationem velit numquam ut incidunt quibusdam voluptates voluptas soluta quia accusantium.</p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Let's Connect with me</h3>
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio sint animi ullam autem sed necessitatibus vitae quaerat nesciunt deleniti!</p>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
