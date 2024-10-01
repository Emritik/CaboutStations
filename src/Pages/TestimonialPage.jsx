/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// TestimonialsPage.js
import TestimonialCard from "../Components/TestimonialCard"
import {testimonials} from "../Constant"

  

const TestimonialsPage = ({id}) => {
  return (
    <div id={id} className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            TESTIMONIALS
          </h2>
          <p className="mt-3 text-xl text-yellow-400 sm:mt-4">
            What Our Client's Say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4">
        <button className="bg-yellow-400 rounded-full p-3 shadow-lg" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;