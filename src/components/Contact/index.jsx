import React, { Component } from 'react'
import Form from './Form'

export default class Contact extends Component {
  render() {
    return (
      <div className="pt-24 pb-24">
        <div className="container">
          <div className="w-full px-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase sm:text-2xl">Contact</h2>
            <p className="mt-2 text-md leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Contact me
            </p>
            <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
              if you have any questions feel free to ask
            </p>
          </div>
          <Form />
          </div>
        </div>
      </div>
    )
  }
}
