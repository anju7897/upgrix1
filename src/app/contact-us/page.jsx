"use client";
import "@/styles/contact.css";

export default function ContactSection() {
  return (
    <div>
    <section 
  className="page-title custom-breadcrumb-bg"
  style={{ backgroundImage: "url('/assets/img/about-us-upgrix.jpg')" }}
>
  <div className="overlay"></div>

  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <div className="theme-breadcrumb-box">
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  </div>
</section>
    <section className="contact-section">
      <div className="container">

        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have any questions or need help? Fill the form and our team will get back to you shortly.</p>

            <div className="info-box">
              <i className="fas fa-phone"></i>
              <span>+91 9212223317</span>
            </div>

            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <span>
info@innovativedigitalmarketing.in</span>
            </div>

            <div className="info-box">
              <i className="fas fa-location-dot"></i>
              <span>Ramesh Nagar, New Delhi

</span>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
<form className="form-grid">

  <div className="grid-2">
    <input type="text" placeholder="Full Name" required />
    <input type="tel" placeholder="Phone Number" />
  </div>

  <input type="email" placeholder="Email Address" required />

  <textarea placeholder="Your Message..." rows="5"></textarea>

  <button type="submit">
    Send Message <i className="fas fa-arrow-right"></i>
  </button>

</form>
          </div>

        </div>

      </div>

      {/* ICON CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      
    </section>
      <section class="map-section">
  <div class="map-wrapper">
    
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.330317749298!2d77.12401720073571!3d28.649758910481545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031ca8164ac9%3A0xaff1dfddfae50bbe!2sRamesh%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1774418281975!5m2!1sen!2sin"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    
  </div>
</section>
    </div>
  );
}