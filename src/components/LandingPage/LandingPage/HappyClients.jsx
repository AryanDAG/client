import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HappyClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://server-8gnx.onrender.com/clients")
      .then((res) => {
        const validClients = res.data?.data?.filter(
          (client) => client.name && client.image
        );
        setClients(validClients || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching clients", err);
        setError("Failed to load clients");
        setLoading(false);
      });
  }, []);

  return (
    <section className="px-4 py-20 bg-white">
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1572FF]">
          Happy Clients
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : clients.length === 0 ? (
        <p className="text-center text-gray-500">No clients to show.</p>
      ) : (
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!overflow-visible"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center h-full p-6 text-center bg-white shadow-md rounded-2xl">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="object-cover w-12 h-12 mb-4 rounded-full"
                  />
                  <p className="mb-4 text-xs leading-relaxed text-gray-500">
                    {client.description || "No feedback provided."}
                  </p>
                  <h4 className="text-sm font-semibold text-[#1572FF]">
                    {client.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {client.designation || "Client"}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
