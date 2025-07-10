import React, { useState } from 'react';
import axios from 'axios';

export default function ListingSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!email.trim()) {
      setStatus("Please enter a valid email address.");
      return;
    }

    try {
      const res = await axios.post('https://server-8gnx.onrender.com/subscriptions', {
        email,
      });

      if (res.status === 200 || res.status === 201) {
        setStatus("Thank you for subscribing!");
        setEmail('');
      } else {
        setStatus("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/assets/Rectangle.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 max-w-2xl px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="px-6 py-2 text-black transition bg-white rounded hover:bg-gray-100">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex flex-col items-center justify-between px-6 py-6 space-y-4 text-white bg-blue-600 md:flex-row md:space-y-0">
        <div className="flex flex-wrap items-center space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Testimonials</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Subscribe Form */}
        <form onSubmit={handleSubscribe} className="flex items-center space-x-4">
          <span className="font-medium text-white">Subscribe Us</span>
          <div className="flex overflow-hidden border border-white rounded">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="px-3 py-2 text-white placeholder-white bg-blue-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-blue-600 transition bg-white hover:bg-gray-100"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Status Message */}
      {status && (
        <p className="py-1 mt-2 text-sm text-center text-white bg-blue-600">
          {status}
        </p>
      )}
    </div>
  );
}
