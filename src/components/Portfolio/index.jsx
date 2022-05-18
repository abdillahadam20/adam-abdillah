/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from "../../assets/images"

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    images: Image,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    images: Image,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    images: Image,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    images: Image,
  },
]

export default function Portfolio() {
  return (
    <div className="py-12 bg-white">
      <div className="container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase sm:text-2xl">Portfolio</h2>
          <p className="mt-2 text-md leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Little Project as a <span className="text-secondary italic">Front End Developer</span>
          </p>
          <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
            This is a simple project and practice for becoming a Front End Developer. I wrote this using pure HTML, CSS, SASS and API using Java Spring Boot because a couple months ago I took a course as a Fullstack Java Developer at JuaraCoding.
          </p>
        </div>

        <div className="mt-10 w-full px-4 flex flex-wrap justify-content">
          <div className="mb-12 p-4 md:w-1/2">
            {features.map((feature) => (
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={feature.images} alt=""/>
              </div>
              
              // <div key={feature.name} className="font-semibold text-xl">
              //   <dt>
              //     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              //       <feature.icon className="h-6 w-6" aria-hidden="true" />
              //     </div>
              //     <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              //   </dt>
              //   <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              // </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
