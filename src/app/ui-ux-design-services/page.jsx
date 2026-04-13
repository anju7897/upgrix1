import "@/styles/custom.css";
import { FaSearch, FaUserCheck, FaTachometerAlt, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>UI & UX Design Services</h1>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="seo-about-section">
  <div className="container">
    <div className="row align-items-center">

      
      <div className="col-lg-6">
        <div className="seo-about-content">

          <h2>
UI & UX Design Services That Create  <span> Exceptional Digital Experiences</span>
          </h2>
<p>
    UI (User Interface) and UX (User Experience) design are the foundation of any successful digital product. A well-designed interface not only looks attractive but also ensures users can easily navigate and interact with your website or application.
<br />
We focus on creating designs that are user-centric, conversion-focused, and optimized for both SEO and AI-driven search (GEO).
</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Improves user engagement</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Increases conversion rates</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Enhances brand credibility</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Ensures mobile usability</span>
            </div>
            

          </div>

          <a href="#" className="seo-btn">
            Get Free UI/UX Consultation

          </a>

        </div>
      </div>

<div className="col-lg-6 mb-5">
  <div className="seo-about-img rounded">
  <img src="/assets/img/aeo-upgrix.png" className="rounded"/>
  </div>
</div>


    </div>
  </div>
</section>
 
<section className="seo-section">
  <div className="container">

    {/* Heading */}
    <div className="seo-heading text-center">
      <h2>Our <span>UI & UX Design Services</span></h2>
      <p>
        We design user-centric experiences that improve engagement, usability, and conversions.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaSearch /></div>
        <h3>User Research & Analysis</h3>
        <p>We understand your audience, behavior, and needs to design meaningful experiences.</p>
        <ul>
          <li>User persona creation</li>
          <li>Competitor analysis</li>
          <li>Data-driven insights</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaProjectDiagram /></div>
        <h3>Wireframing & Prototyping</h3>
        <p>We create structured layouts before development to ensure clarity and usability.</p>
        <ul>
          <li>Low & high-fidelity wireframes</li>
          <li>Interactive prototypes</li>
          <li>User flow design</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaPaintBrush /></div>
        <h3>UI (User Interface) Design</h3>
        <p>We craft visually appealing and modern interfaces aligned with your brand.</p>
        <ul>
          <li>Clean & modern layouts</li>
          <li>Color & typography selection</li>
          <li>Design systems & consistency</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaUserCheck /></div>
        <h3>UX (User Experience) Optimization</h3>
        <p>We improve usability and user satisfaction across all touchpoints.</p>
        <ul>
          <li>Navigation optimization</li>
          <li>User journey mapping</li>
          <li>Conversion-focused design</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMobileAlt /></div>
        <h3>Mobile App UI/UX Design</h3>
        <p>Designing seamless mobile experiences for Android & iOS users.</p>
        <ul>
          <li>Mobile-first approach</li>
          <li>App usability optimization</li>
          <li>Touch-friendly design</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaTachometerAlt /></div>
        <h3>Website & Dashboard Design</h3>
        <p>We design professional websites and admin dashboards for better usability.</p>
        <ul>
          <li>Business websites</li>
          <li>SaaS dashboards</li>
          <li>Admin panels</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>Design Process</span></h2>
      <p>We follow a user-focused process to create intuitive and impactful designs.</p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Research & Strategy</h3>
        <p>We analyze your business goals and user behavior.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Wireframing</h3>
        <p>We create the structure and layout.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>UI Design</h3>
        <p>We design visually appealing interfaces.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Testing</h3>
        <p>We test usability and user experience.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Delivery</h3>
        <p>We provide ready-to-use design assets.</p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>UI/UX Design <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                What is the difference between UI and UX design?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                UI focuses on the visual design of a product, while UX focuses on the overall user experience and usability.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Why is UI/UX important for business websites?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Good UI/UX improves user satisfaction, reduces bounce rates, and increases conversions, helping your business grow faster.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                How long does UI/UX design take?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                It depends on the complexity of the project. Typically, it can take 1–4 weeks.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Do you design for mobile apps as well?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we design UI/UX for websites, mobile apps, and dashboards.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Is UI/UX design SEO-friendly?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, good UX improves site structure, navigation, and engagement, which directly supports SEO performance.
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