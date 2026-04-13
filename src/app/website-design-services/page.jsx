import "@/styles/custom.css";
import { FaSearch, FaChartLine, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>Website Design</h1>
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
Creative Website Design Services <span> That Drive Results</span>
          </h2>
<p>
Your website is the digital face of your business. A well-designed website builds trust, improves user experience, and helps you stand out from competitors.
<b />
We create visually appealing, responsive, and performance-driven websites tailored to your business goals. Our designs are not just beautiful—they are optimized for SEO, speed, and conversions.
</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Creative & modern designs</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>SEO & GEO optimized websites</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Fast loading & mobile responsive</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Conversion-focused approach</span>
            </div>
            

          </div>

          <a href="#" className="seo-btn">
            Get Free Audit →
          </a>

        </div>
      </div>




    </div>
  </div>
</section>
 
<section className="seo-section">
  <div className="container">

    {/* Heading */}
    <div className="seo-heading text-center">
      <h2>Our <span>Website Design Services</span></h2>
      <p>
        We create modern, user-friendly, and high-converting websites tailored to your business goals.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaLaptopCode /></div>
        <h3>Custom Website Design</h3>
        <p>We create unique, brand-focused designs tailored to your business identity.</p>
        
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMobileAlt /></div>
        <h3>Responsive Web Design</h3>
        <p>Your website will look perfect on all devices—mobile, tablet, and desktop.</p>

      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaPaintBrush /></div>
        <h3>UI/UX Design</h3>
        <p>We design intuitive interfaces that enhance user engagement and satisfaction.</p>

      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaShoppingCart /></div>
        <h3>E-Commerce Website Design</h3>
        <p>We build powerful online stores that boost sales and user experience.</p>

      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaBullseye /></div>
        <h3>Landing Page Design</h3>
        <p>High-converting landing pages designed for ads and marketing campaigns.</p>

      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaRedo /></div>
        <h3>Website Redesign</h3>
        <p>Give your old website a modern and professional makeover.</p>

      </div>

    </div>

  </div>
</section>


<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>Design Process</span></h2>
      <p>We follow a structured process to deliver high-quality and result-driven websites.</p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Requirement Analysis</h3>
        <p>We understand your business goals and target audience.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Wireframing & Planning</h3>
        <p>We create the structure and layout of your website.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>UI/UX Design</h3>
        <p>We design visually appealing and user-friendly interfaces.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Development</h3>
        <p>We turn designs into a fully functional website.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Testing & Launch</h3>
        <p>We test performance and launch your website smoothly.</p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>Website Design <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                How much does website design cost?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                The cost depends on your requirements, features, and complexity. We offer customized packages based on your needs.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                How long does it take to design a website?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Typically, it takes 7–15 days for a basic website and 3–6 weeks for advanced projects.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                Will my website be mobile-friendly?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Do you provide SEO with website design?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we build SEO-friendly websites with proper structure, fast loading speed, and optimized content for better rankings.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Can you redesign my existing website?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Absolutely! We can upgrade your existing website with a modern design, improved performance, and better user experience.
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