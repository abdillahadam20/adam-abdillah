import React from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const SERVICE_ID = "service_6ttcnbe";
const TEMPLATE_ID = "template_t6yd9ks";
const USER_ID = "97SJ-Z2WpGfqMeWJ4";

export default function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base text-primary font-bold">Nama</label>
            <input type="text" id="name" placeholder="Type here" className="w-full bg-white outline outline-gray-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
            <input type="email" id="email" placeholder="Type here" className="w-full bg-white outline outline-gray-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base text-primary font-bold">Pesan</label>
            <textarea name="text" id="pesan" placeholder="Type here" className="w-full bg-white outline outline-gray-300 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
          </div>
          <div className="w-full px-4 mb-8">
            <button type="submit" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
          </div>
        </div>
      </Form>
    </>
  )
}
