import "@/styles/custom.css";
import Link from "next/link";
import { FaPenNib, FaStore, FaMapMarkerAlt, FaMapMarkedAlt, FaSearchDollar, FaImages, FaYoutube, FaRetweet, FaFileAlt, FaBullhorn, FaHashtag, FaChartLine, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>GMB</h1>
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
Google My Business (GMB) Services That Boost Local <span> Visibility & Leads</span>
          </h2>
<p>
    Google My Business (now known as Google Business Profile) is a powerful tool that helps your business appear in local search results and Google Maps.
<br />
A well-optimized GMB profile ensures your business shows up when customers search for services “near me.” We help you optimize and manage your listing to improve visibility, trust, and customer engagement.
<br />
We combine Local SEO + GEO strategies to ensure your business is visible not only on Google but also in AI-powered recommendations.
</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Appear in “near me” searches</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Increase calls and inquiries</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Boost Google Maps visibility</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Build trust with reviews</span>
            </div>
            

          </div>

          <Link href="#" className="seo-btn text-dark">
Optimize My GMB Profile

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
      <h2>Our <span>GMB (Google My Business) Services</span></h2>
      <p>
        Boost your local visibility and attract more customers with our expert Google Business Profile optimization services.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaStore /></div>
        <h3>GMB Profile Setup & Optimization</h3>
        <p>We create and fully optimize your Google Business Profile for maximum visibility.</p>
        <ul>
          <li>Profile creation & verification</li>
          <li>Business information optimization</li>
          <li>Category & keyword targeting</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMapMarkerAlt /></div>
        <h3>Local SEO Optimization</h3>
        <p>We optimize your profile to rank higher in local search results.</p>
        <ul>
          <li>Location-based keywords</li>
          <li>NAP consistency (Name, Address, Phone)</li>
          <li>Local citations</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaBullhorn /></div>
        <h3>GMB Posting & Updates</h3>
        <p>Keep your profile active and engaging with regular updates.</p>
        <ul>
          <li>Offer & event posts</li>
          <li>Promotional content</li>
          <li>Regular updates</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaStar /></div>
        <h3>Review Management</h3>
        <p>Build trust and improve ratings with effective review strategies.</p>
        <ul>
          <li>Review generation strategies</li>
          <li>Response management</li>
          <li>Reputation management</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMapMarkedAlt /></div>
        <h3>Google Maps Ranking</h3>
        <p>Improve your visibility on Google Maps and local searches.</p>
        <ul>
          <li>Map ranking optimization</li>
          <li>Geo-tagging images</li>
          <li>Local signals enhancement</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaChartLine /></div>
        <h3>Insights & Performance Tracking</h3>
        <p>Track performance and continuously improve your GMB strategy.</p>
        <ul>
          <li>Performance reports</li>
          <li>User behavior analysis</li>
          <li>Strategy improvement</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>GMB Optimization Process</span></h2>
      <p>
        We follow a strategic and data-driven approach to optimize your Google Business Profile and boost local visibility.
      </p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Profile Audit</h3>
        <p>We analyze your existing GMB profile, competitors, and local market opportunities.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Optimization</h3>
        <p>We optimize your business details, keywords, categories, and visuals for better rankings.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>Content & Posting</h3>
        <p>We create engaging posts, offers, and updates to keep your profile active and attractive.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Review Strategy</h3>
        <p>We improve your ratings and build trust through effective review generation and management.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Monitoring & Reporting</h3>
        <p>We track performance, analyze insights, and continuously improve results.</p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>GMB (Google My Business) <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                What is Google My Business (GMB)?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                Google My Business (Google Business Profile) is a free tool by Google that helps businesses manage their online presence on Google Search and Google Maps.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Why is GMB important for local businesses?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                GMB helps your business appear in local search results, attract nearby customers, and increase calls, visits, and sales.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                How long does it take to rank on Google Maps?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Ranking depends on competition and optimization quality, but noticeable improvements can often be seen within a few weeks.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Can you manage reviews on my GMB profile?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we help generate, monitor, and respond to reviews to improve your online reputation and trust.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Do you provide monthly GMB management?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we offer ongoing GMB optimization, regular posting, review management, and performance tracking services.
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