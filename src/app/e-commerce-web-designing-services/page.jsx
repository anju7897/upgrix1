import "@/styles/custom.css";
import Link from "next/link";
import { FaPenNib, FaLaptopCode, FaMobileAlt, FaBoxOpen, FaCreditCard, FaStore, FaMapMarkerAlt, FaMapMarkedAlt, FaSearchDollar, FaImages, FaYoutube, FaRetweet, FaFileAlt, FaBullhorn, FaHashtag, FaChartLine, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { 
  FaBrain, 
  FaProjectDiagram, 
  FaMicrophone, 
  FaLink, 
  FaStar 
} from "react-icons/fa";

export default function AboutPage(){
    return (
        
        
        <div className="page-content">
      <section 
  className="page-title custom-breadcrumb-bg"
  style={{ backgroundImage: "url('/assets/img/aeo-banner.jpg')" }}
>
  <div className="overlay"></div>

  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <div className="theme-breadcrumb-box">
          <h1>ECommerce Web Designing Services</h1>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="seo-about-section">
  <div className="container">
    <div className="row align-items-center">

<div className="col-lg-6 mb-5">
  <div className="seo-about-img rounded">
  <img src="/assets/img/aeo-upgrix.png" className="rounded"/>
  </div>
</div>      
      <div className="col-lg-6">
        <div className="seo-about-content">

          <h2>
ECommerce Web Design Services That Boost  <span> Sales & Conversions</span>
          </h2>
<p>
    An eCommerce website is more than just an online store—it’s your digital sales machine. A well-designed eCommerce site enhances user experience, builds trust, and drives conversions.
<br />
We create SEO-optimized, mobile-friendly, and AI-ready (GEO optimized) eCommerce websites that help your business grow faster in today’s competitive digital marketplace.
    </p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Increase online sales</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Improve user experience</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Mobile-friendly shopping</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Better search rankings</span>
            </div>
            

          </div>

          <Link href="#" className="seo-btn text-dark">
Get Free Consultation

          </Link>
          

        </div>
      </div>




    </div>
  </div>
</section>
<section className="seo-section">
  <div className="container">

    {/* Heading */}
    <div className="seo-heading text-center">
      <h2>Our <span>ECommerce Web Design Services</span></h2>
      <p>
        We create high-performing eCommerce websites that drive sales, enhance user experience, and grow your online business.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaLaptopCode /></div>
        <h3>Custom ECommerce Website Design</h3>
        <p>We design unique online stores tailored to your brand and business goals.</p>
        <ul>
          <li>Custom UI/UX design</li>
          <li>Brand-focused layouts</li>
          <li>Conversion-driven design</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaShoppingCart /></div>
        <h3>Shopify & WooCommerce Development</h3>
        <p>We build scalable and powerful eCommerce stores using leading platforms.</p>
        <ul>
          <li>Shopify store setup</li>
          <li>WooCommerce development</li>
          <li>Plugin & app integration</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMobileAlt /></div>
        <h3>Mobile-Responsive Design</h3>
        <p>Ensure a seamless shopping experience across all devices.</p>
        <ul>
          <li>Mobile-first design</li>
          <li>Cross-device compatibility</li>
          <li>Fast-loading pages</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaBoxOpen /></div>
        <h3>Product Page Optimization</h3>
        <p>We design product pages that convert visitors into customers.</p>
        <ul>
          <li>High-quality layouts</li>
          <li>Clear product descriptions</li>
          <li>CTA optimization</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaCreditCard /></div>
        <h3>Shopping Cart & Checkout Optimization</h3>
        <p>We simplify the buying process to reduce cart abandonment.</p>
        <ul>
          <li>Secure checkout</li>
          <li>Easy navigation</li>
          <li>Payment gateway integration</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaSearchDollar /></div>
        <h3>SEO & GEO Optimization</h3>
        <p>We optimize your store for search engines and AI platforms.</p>
        <ul>
          <li>SEO-friendly structure</li>
          <li>Fast loading speed</li>
          <li>AI-ready content</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>ECommerce Web Design Process</span></h2>
      <p>
        We follow a strategic approach to design high-converting eCommerce websites that drive sales and enhance user experience.
      </p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Custom ECommerce Website Design</h3>
        <p>
          We design unique online stores tailored to your brand and business goals with a focus on user experience and conversions.
        </p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Shopify & WooCommerce Development</h3>
        <p>
          We build scalable and powerful eCommerce stores using platforms like Shopify and WooCommerce with full integrations.
        </p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>Mobile-Responsive Design</h3>
        <p>
          We ensure your website looks and performs perfectly across all devices with mobile-first and fast-loading design.
        </p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Product Page Optimization</h3>
        <p>
          We create high-converting product pages with clear descriptions, attractive layouts, and strong call-to-actions.
        </p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Checkout Optimization</h3>
        <p>
          We simplify the shopping cart and checkout process to reduce abandonment and improve conversions.
        </p>
      </div>

      <div className="geo-card">
        <div className="step-number">06</div>
        <h3>SEO & GEO Optimization</h3>
        <p>
          We optimize your store for search engines and AI platforms to increase visibility, traffic, and sales.
        </p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>Our <span>Design Process</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                Step 1: Requirement Analysis
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                We understand your products, target audience, and business goals to create a strong foundation for your eCommerce website.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Step 2: Planning & Wireframing
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                We create a structured layout and wireframes to define the website flow and user journey.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                Step 3: UI/UX Design
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                We design visually appealing, user-friendly, and conversion-focused interfaces for better engagement.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Step 4: Development
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                We develop a fully functional, secure, and scalable eCommerce website with all required features.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Step 5: Testing & Launch
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                We test performance, responsiveness, and functionality to ensure everything works perfectly before launch.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
        </div>
    );
}