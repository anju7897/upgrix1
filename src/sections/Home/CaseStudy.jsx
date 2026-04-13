"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/case-study.css";

const caseStudies = [
 {
  title: "Dr. Ashish Vashistha",
  img: "/assets/img/dr-ashish-vashishtha.jpg",
  services: ["SEO Optimization", "Google Ads Campaigns", "Website Design & Management"],
  auto: true,
},
  {
  title: "Dr. Archit Pandit",
  img: "/assets/img/dr-archit-pandit-upgrix.jpg",
  services: ["SEO Optimization", "Website Design & Management", "Facebook Ads", "Social Media Management", "YouTube Marketing"],
  auto: true,
},
  {
    title: "Harmony Dental Clinic",
    img: "/assets/img/dental-harmony-upgrix.jpg",
    services: ["Website Design", "SEO Optimization"],
    auto: true,
  },
  {
    title: "Gastro Clinic",
    img: "/assets/img/delhi-gastro.png",   
    services: ["SEO Optimization", "Website Design", "Social Media Optimization"],
    auto: true,
  },
  
];

// 🔥 Dynamic grouping function
const groupItems = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function CaseStudyScroll() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setSlides(groupItems(caseStudies, isMobile ? 1 : 2));
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="cs4-section">
      <div className="cs4-container">

        <div className="cs4-heading">
          <h2>Our Case <span>Studies</span></h2>
          <p>See how we grow businesses online</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4900 }}
          speed={1200}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slides.map((group, i) => (
            <SwiperSlide key={i}>
              <div className="cs4-row">

                {group.map((item, index) => (
                  <div className="cs4-col" key={index}>
                    <div className="cs4-card">

                      {/* Image */}
                      <div className="cs4-img">
                        <div className={`cs4-img-wrapper ${item.auto ? "auto-scroll" : ""}`}>
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="cs4-content">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                        <ul className="cs4-list">
                          {item.services.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>                        
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}