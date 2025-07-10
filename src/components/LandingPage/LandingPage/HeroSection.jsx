import React, { useState } from "react";
import axios from "axios";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
    if (!formData.city.trim()) newErrors.city = "Area/City is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post("https://server-8gnx.onrender.com/contacts", formData);
        if (res.status === 200 || res.status === 201) {
          setSubmitStatus("success");
          setFormData({ fullName: "", email: "", mobile: "", city: "" });
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitStatus("error");
      }
    }
  };

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen px-16 py-10 bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-between w-full gap-10 max-w-7xl md:flex-row">
        <div className="flex-shrink-0 max-w-xl text-center text-white md:text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Consultation,<br />Design,<br />& Marketing
          </h1>
        </div>

        <div className="bg-[#4A5682] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            Get a Free Consultation
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white placeholder-white bg-transparent border border-white rounded focus:outline-none"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white placeholder-white bg-transparent border border-white rounded focus:outline-none"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white placeholder-white bg-transparent border border-white rounded focus:outline-none"
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-400">{errors.mobile}</p>}
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="Area, City"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white placeholder-white bg-transparent border border-white rounded focus:outline-none"
              />
              {errors.city && <p className="mt-1 text-sm text-red-400">{errors.city}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#F56A1D] hover:bg-orange-600 text-white font-semibold py-3 rounded"
            >
              Get Quick Quote
            </button>
          </form>

          {submitStatus === "success" && (
            <p className="mt-4 text-center text-green-400">Form submitted successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-center text-red-400">Something went wrong. Try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
