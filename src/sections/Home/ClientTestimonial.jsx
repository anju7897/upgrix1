"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// ✅ Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

// ✅ Custom CSS
import "@/styles/client-testimonial.css";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Business Owner",
    text: "Amazing service! My website traffic increased within weeks. Highly recommended.",
    img: "/assets/img/upgrix-img.png",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "Startup Founder",
    text: "Professional team with great results. Loved their digital marketing strategies.",
    img: "/assets/img/upgrix-img.png",
    rating: 4,
  },
  {
    name: "Amit Singh",
    role: "Entrepreneur",
    text: "They helped my business grow online. Best decision ever!",
    img: "/assets/img/upgrix-img.png",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="tm-section">
      <div className="container">

        <div className="tm-heading text-center">
          <h2>
            Client <span>Testimonials</span>
          </h2>
          <p>What our clients say about us</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="tm-card">

                {/* ⭐ Stars */}
                <div className="tm-stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < item.rating ? "active" : ""}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="tm-text">“{item.text}”</p>

                {/* User */}
                <div className="tm-user">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}