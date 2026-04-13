"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "@/styles/reviews.css";

const reviews = [
  {
    video: "https://www.youtube.com/embed/PoE7GVIlYXI",
    poster: "/assets/img/dr-archit-pandit-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/lt55Z8VaH00",
    poster: "/assets/img/dr-raman-kant-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/Q2iNWsH0osM",
    poster: "/assets/img/dr-aparna-dhar-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/vq-OmhG5MO4",
    poster: "/assets/img/dr-geeta-uogrix.png",
  },
  {
    video: "https://www.youtube.com/embed/mbzcpNjGUVo",
    poster: "/assets/img/dr-jyoti-arora-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/2Mp0kl9KZr0",
    poster: "/assets/img/dr-aswat-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/bC0JzLfR11U",
    poster: "/assets/img/dr-sonal-gupta-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/mllRHa4SqDc",
    poster: "/assets/img/dr-deepika-gupta-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/3I3WK_eRETs",
    poster: "/assets/img/dr-rajender-upgrix.png",
  },
   {
    video: "https://www.youtube.com/embed/RrTFmIIc-h4",
    poster: "/assets/img/dr-sudipto-de.png",
  },
];

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="cr-section">
      <div className="cr-container">

        {/* Heading */}
        <div className="cr-heading text-center">
          <h2>
            Voices of Our <span>Clients </span>
          </h2>
          <p>Real feedback from our happy clients</p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cr-card">

                <div
                  className="cr-video-box"
                  onClick={() => setActiveIndex(index)}
                >
                  {activeIndex === index ? (
  <iframe
    className="cr-video"
    src={`${item.video}?autoplay=1`}
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
) : (
  <div className="cr-overlay">
    <img src={item.poster} alt="thumbnail" />
    <div className="cr-play-btn">▶</div>
  </div>
)}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}