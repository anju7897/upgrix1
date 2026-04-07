"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Header(){
    const logos = [
    "assets/img/upgrix-client-1.png",
    "assets/img/upgrix-client-2.png",
    "assets/img/upgrix-client-3.png",
    "assets/img/upgrix-client-4.png",
    "assets/img/upgrix-client-5.png",
    "assets/img/upgrix-client-6.png",
    "assets/img/upgrix-client-4.png",
    "assets/img/upgrix-client-5.png",
 
  ];
    return(
        
  
       
<>

    <section className="py-2 text-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={4000}                // 🔥 smooth movement
          autoplay={{
            delay: 0,                // ❌ no pause
            disableOnInteraction: false,
          }}
          freeMode={true}            // 🔥 continuous flow
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} style={{ width: "150px" }}>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="client"
                  className="object-contain opacity-70 hover:opacity-100 transition"
                  style={{borderRadius: "2px", width: "177px"}}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
 

<header id="site-header" className="header">

  <div id="header-wrap">
    <div className="container-fluid">
      <div className="row">
      
        <div className="col">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand logo" href="index.html">
              <img className="img-fluid" src="assets/images/upgrix-logo-removebg-preview.png" alt="" />
            </a>
            <button className="navbar-toggler ht-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                <path className="line line2" d="M 20,50 H 80"></path>
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link active" href="#" data-bs-toggle="dropdown">Home</a>
                  
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">SEO (Search Engine Optimization)</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">SMO (Social Media Optimization)</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="team-single.html">SMM (Social Media Marketing)</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="pricing.html">Website Design Services</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="faq.html">UI & UX Design Services</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="coming-soon.html">Content Marketing Services</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="error-404.html">Google Ads Services</a>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">GMB (Google My Business)</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">ECommerce Web Designing</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">App Development</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Packages</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">SEO (Search Engine Optimization)</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">SMO (Social Media Optimization)</a>
                    </li>

                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">Portfolio</a>
                  
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">Blogs</a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="right-nav align-items-center d-flex justify-content-end">
              <div className="header-number">
                <i className="flaticon-phone-call"></i>
                <div>
                  <span>Call Us:</span>
                  <a href="tel:+91 9212223317">+91 9212223317</a>
                </div>
              </div>
              <a className="primary-btn" href="#">Get It Now </a>
            </div>
          </nav>
        </div>
     
      </div>
    </div>
  </div>
</header>
<div className="search-input" id="search-input-box">
  <div className="search-inner-box">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form role="search" id="search-form" className="search-form d-flex justify-content-between search-inner">
            <label>
              <input type="search" className="search-field" placeholder="Search Here"  name="s" />
            </label>
            <button type="submit" className="search-submit">
              <i className="las la-search"></i>
            </button>
            <span className="las la-times close-search" id="close-search" title="Close Search"></span>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    )
}