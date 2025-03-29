"use client";
import { useState } from "react";

const testimonials = [
  {
    id: "content1",
    name: "Shubham",
    role: "",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: `Health Wiser has completely changed how I choose my food! The barcode scanner is so easy to use, and I love how it breaks down ingredients in simple terms.`,
  },
  {
    id: "content2",
    name: "Harshit Singh",
    role: "",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    message: `I have food allergies, and this app has been a lifesaver! It instantly alerts me about harmful ingredients and even suggests alternatives.`,
  },
  {
    id: "content3",
    name: "Sumit Subhrawal",
    role: "",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    message: `The design is super clean, and the features are really useful. I never have to guess what's inside a product anymore—Health Wiser does all the work for me!`,
  },
];

export default function Home() {
  const [activeContent, setActiveContent] = useState(testimonials[0].id);

  const handleCardClick = (id) => {
    setActiveContent(id);
  };

  const activeTestimonial = testimonials.find((t) => t.id === activeContent);

  return (
    <section className="flex flex-col justify-center py-16 bg-gray-50">
      <h1 className="text-center text-4xl font-bold mb-8 italic text-green-600">Testimonials</h1>
      <p className="text-center text-xl font-light text-black">
        Social proof, building trust and credibility, while a compelling subtitle
        can enhance their impact by summarizing <br/> the key message and drawing the
        reader in.{" "}
      </p>

      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-12 px-6">
        {/* Left side - People Cards */}
        <div className="flex flex-col gap-6 lg:w-1/4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer border transition duration-300 ease-in-out transform hover:scale-105 ${
                activeContent === testimonial.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleCardClick(testimonial.id)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Active Content */}
        <div className="lg:w-3/4 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">{activeTestimonial.name}</h2>
            <p className="text-lg text-gray-500">{activeTestimonial.role}</p>
          </div>
          <div>
            <p className="text-xl mb-4">{activeTestimonial.message}</p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
