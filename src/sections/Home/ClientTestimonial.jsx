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
    name: "Raman Kant Aggarwal",
    role: "Doctor",
    text: "Dedicated, focused, genuine trustworthy and enterprising Real good value for Customers",
    img: "/assets/client/dr-raman-kant-upgrix.jpg",
    rating: 5,
  },
  {
    name: "Geeta Kadayaprath",
    role: "The Breast Cancer Clinic",
    text: "Prompt services with a great team which is able to create excellent content and post it at appropriate times. Response to queries and resolution of problems is also very quick. Thank you!",
    img: "/assets/client/dr-geeta-upgrix.jpg",
    rating: 4,
  },
  {
    name: "Sawan Bopanna",
    role: "Doctor",
    text: "Mr Punit and innovative digital marketing have been very professional in their digital services Definitely recommend",
    img: "/assets/client/dr-sawan-bhopana-upgrix.jpg",
    rating: 5,
  },
   {
    name: "Dr Neha Khandelwal",
    role: "Doctor",
    text: "Excellent work by Mr Puneet and his team .A very dedicated team and has lot of creativity !",
    img: "/assets/client/dr-neha-khandewal-upgrix.png",
    rating: 5,
  },
   {
    name: "Ajeet Tiwari",
    role: "Doctor",
    text: "Marketing is not about providing false details or boasting about urself but letting people know what you want them to know about yourself rather than they learning unpredictable things about you by someone else. And thats exactly what Innovative Digital Marketing has done for me. Many thanks to the entire team that keeps helping me all the time with the smallest of details. Kudos 5 star...!!!!",
    img: "/assets/client/dr-ajeet-ttiwari-upgrix.jpg",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="tm-section">
      <div className="container">

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