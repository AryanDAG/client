import React, { useEffect, useState } from "react";
import axios from "axios";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://server-8gnx.onrender.com/projects")
      .then((res) => {
        const valid = res.data?.data?.filter(
          (p) => p.name && p.description && p.image
        );
        setProjects(valid || []);
      })
      .catch((err) => {
        console.error("Failed to fetch projects", err);
        setError("Unable to load projects.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-[#f9fbfd] py-20 px-4">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-blue-600 sm:text-3xl">
          Our Projects
        </h2>
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
      </div>

      {/* Status Display */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-md shadow-md">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="mb-4 text-xs text-gray-500">{project.description}</p>
                <button className="px-4 py-2 text-xs text-white transition bg-orange-500 rounded-sm hover:bg-orange-600">
                  SEE MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OurProjects;
