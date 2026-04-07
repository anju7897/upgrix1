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
    video: "https://www.youtube.com/embed/RrTFmIIc-h4",
    poster: "/assets/img/dr-raman-kant-upgrix.png",
  },
  {
    video: "https://www.youtube.com/embed/RrTFmIIc-h4",
    poster: "/assets/img/dr-raman-kant-upgrix.png",
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
            Client Video <span>Reviews</span>
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
                      src={item.video}
                      allow="encrypted-media"
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