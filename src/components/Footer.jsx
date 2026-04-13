import "@/styles/footer.css";

import Link from "next/link";
export default function Footer(){
    return (
        <footer className="footer">
  <div className="primary-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
          <a className="footer-logo d-inline-block logo mb-5" href="/">
            <img className="img-fluid" src="assets/images/upgrix-logo-removebg-preview.png" alt="Logo Img" />
          </a>
          <div className="footer-cntct">
            <ul className="media-icon list-unstyled">
              <li>
                <i className="flaticon-location"></i>
                <p className="mb-0">Ramesh Nagar, New Delhi
</p>
              </li>
              <li>
                <i className="flaticon-chat"></i>
                <a href="mailto:info@innovativedigitalmarketing.in">info@innovativedigitalmarketing.in</a>
              </li>
              <li>
                <i className="flaticon-phone-call"></i>
                <a href="tel:+91 9212223317">+91 9212223317</a>
              </li>

            </ul>
                      <ul className="list-inline  social-icons footer-social">
            <li className="list-inline-item">
              <a href="#">
                <i className="la la-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="la la-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="la la-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="la la-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="la la-linkedin"></i>
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h5 className="mb-4 footer-title-style">Digital Marketing Services</h5>
          <ul className="list-unstyled mb-0 footer-menu">
            <li className="mb-3">
              <a href="/seo"><i class="la la-angle-right footer-list me-2"></i>SEO (Search Engine Optimization)</a>
            </li>
            <li className="mb-3">
              <a href="/smo-services"><i class="la la-angle-right me-2"></i>SMO (Social Media Optimization)</a>
            </li>
            <li className="mb-3">
              <a href="/smm-services"><i class="la la-angle-right me-2"></i>SMM (Social Media Marketing)</a>
            </li>
            <li className="mb-3">
              <a href="/website-design-services"><i class="la la-angle-right me-2"></i>Website Design Services</a>
            </li>
            <li className="mb-3">
              <a href="/ui-ux-design-services"><i class="la la-angle-right me-2"></i>UI & UX Design Services</a>
            </li>
            
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
          <h5 className="mb-4 footer-title-style">Quick Links</h5>
          <ul className="list-unstyled mb-0 footer-menu">
            <li className="mb-3">
              <a href="/about-us"><i class="la la-angle-right me-2"></i>About Us</a>
            </li>
            <li className="mb-3">
              <a href="/contact-us"><i class="la la-angle-right me-2"></i>Contact Us</a>
            </li>
            <li className="mb-3">
              <a href="/blog"><i class="la la-angle-right me-2"></i>Blog</a>
            </li>
            <li className="mb-3">
              <a href="/testimonial"><i class="la la-angle-right me-2"></i>Testimonial</a>
            </li>
            <li>
              <a href="/portfolio"><i class="la la-angle-right me-2"></i>Portfolio</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
  <div className="secondary-footer">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5 col-md-12"> Copyright 2026   <u>
            <a className="text-theme text-center" href="#">Upgrix</a>
          </u> | All Rights Reserved </div>
        
      </div>
    </div>
  </div>
</footer>









    )
}