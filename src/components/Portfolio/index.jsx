import React, { Component } from 'react'
import { Picture1, Picture2, Picture3, Picture4, Picture5 } from './image'

const card = [
  {
    name: 'Adam Abdillah',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, tempore nostrum fugit voluptas ipsa dolores voluptate blanditiis provident pariatur assumenda sit et veritatis cum maiores deserunt necessitatibus exercitationem maxime rem.',
    image: Picture1,
    link: 'https://sharp-brown-45714b.netlify.app'
  },
  {
    name: 'Adam Abdillah',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, tempore nostrum fugit voluptas ipsa dolores voluptate blanditiis provident pariatur assumenda sit et veritatis cum maiores deserunt necessitatibus exercitationem maxime rem.',
    image: Picture2,
    link: 'https://app.netlify.com/sites/competent-mestorf-2efcd4/overview'
  },
  {
    name: 'Adam Abdillah',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, tempore nostrum fugit voluptas ipsa dolores voluptate blanditiis provident pariatur assumenda sit et veritatis cum maiores deserunt necessitatibus exercitationem maxime rem.',
    image: Picture3,
    link: 'https://modest-wiles-a1f638.netlify.app'
  },
  {
    name: 'Adam Abdillah',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, tempore nostrum fugit voluptas ipsa dolores voluptate blanditiis provident pariatur assumenda sit et veritatis cum maiores deserunt necessitatibus exercitationem maxime rem.',
    image: Picture4,
    link: 'https://fervent-colden-919dbd.netlify.app/'
  },
  {
    name: 'Adam Abdillah',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, tempore nostrum fugit voluptas ipsa dolores voluptate blanditiis provident pariatur assumenda sit et veritatis cum maiores deserunt necessitatibus exercitationem maxime rem.',
    image: Picture5,
    link: 'https://upbeat-nightingale-637353.netlify.app/'
  }
]

export default function Portfolio() {
  return (
    <div className="pt-24 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase sm:text-2xl">Portfolio</h2>
            <p className="mt-2 text-md leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Little Project as a <span className="text-secondary italic">Front End Developer</span>
            </p>
            <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
              This is a simple project and practice for becoming a Front End Developer. I wrote this using pure HTML, CSS, SASS and API using Java Spring Boot because a couple months ago I took a course as a Fullstack Java Developer at JuaraCoding.
            </p>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center">
            {card.map((card) => (
              
              <div className="mb-12 p-4 md:w-1/2">
                <a href={card.link}>
                  <div className="rounded-md shadow-md overflow-hidden">
                    <img src={card.image} alt="foto" width="w-full"/>
                  </div>
                </a>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3">{card.name}</h3>
                <p className="font-medium text-base text-secondary">{card.description}</p>
              </div>
              
              ))}
          </div>

        </div>
      </div>
    </div>
  )
}
