import "@/styles/custom.css";
import Link from "next/link";
import { FaPenNib, FaSearchDollar, FaImages, FaYoutube, FaRetweet, FaFileAlt, FaBullhorn, FaHashtag, FaChartLine, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>Google Ads Services</h1>
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
Google Ads Services That Drive Instant Traffic  <span> & High-Quality Leads</span>
          </h2>
<p>
    Google Ads is one of the fastest ways to grow your business online. It allows you to reach potential customers who are actively searching for your products or services.

Our expert team creates and manages high-performing ad campaigns that are optimized for maximum clicks, conversions, and return on investment (ROI). We combine PPC strategy + SEO + GEO insights to ensure your brand performs across both search engines and AI-driven platforms.
</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Instant traffic & visibility</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Targeted audience reach</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Measurable results</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>High ROI potential</span>
            </div>
            

          </div>

          <Link href="#" className="seo-btn text-dark">
Get Free Ads Audit

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
      <h2>Our <span>Google Ads Services</span></h2>
      <p>
        We create high-performing Google Ads campaigns that drive traffic, leads, and sales for your business.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaSearchDollar /></div>
        <h3>Search Ads (PPC)</h3>
        <p>Show your ads on top of Google search results when users search for your services.</p>
        <ul>
          <li>High-intent keyword targeting</li>
          <li>Ad copy optimization</li>
          <li>Conversion-focused campaigns</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaImages /></div>
        <h3>Display Ads</h3>
        <p>Reach your audience across millions of websites with visually engaging ads.</p>
        <ul>
          <li>Banner ad design</li>
          <li>Audience targeting</li>
          <li>Remarketing campaigns</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaYoutube /></div>
        <h3>YouTube Ads</h3>
        <p>Promote your business with video ads on YouTube.</p>
        <ul>
          <li>Skippable & non-skippable ads</li>
          <li>Video campaign strategy</li>
          <li>Audience segmentation</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaShoppingCart /></div>
        <h3>Shopping Ads</h3>
        <p>Perfect for eCommerce businesses to showcase products directly on Google.</p>
        <ul>
          <li>Product feed setup</li>
          <li>Google Merchant Center integration</li>
          <li>High-conversion product ads</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaRetweet /></div>
        <h3>Remarketing Campaigns</h3>
        <p>Reconnect with users who have already visited your website.</p>
        <ul>
          <li>Audience retargeting</li>
          <li>Personalized ad strategies</li>
          <li>Higher conversion rates</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaChartBar /></div>
        <h3>Google Ads Optimization & Management</h3>
        <p>We continuously monitor and optimize campaigns for better performance.</p>
        <ul>
          <li>A/B testing</li>
          <li>Bid management</li>
          <li>Performance tracking</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>Google Ads Process</span></h2>
      <p>We follow a data-driven process to create, optimize, and scale high-performing ad campaigns.</p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Research & Strategy</h3>
        <p>We analyze your business, competitors, and target audience.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Campaign Setup</h3>
        <p>We create optimized ad campaigns with proper targeting.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>Ad Creation</h3>
        <p>We write compelling ad copies and design creatives.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Optimization</h3>
        <p>We continuously improve performance through testing and analysis.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Reporting</h3>
        <p>We provide transparent reports with clear insights.</p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>Google Ads <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                What is Google Ads?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                Google Ads is an online advertising platform where businesses pay to display ads on Google search results and partner websites.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                How much does Google Ads cost?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                The cost depends on your industry, competition, and budget. You can start with a small budget and scale as results improve.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                How quickly can I see results?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Google Ads delivers instant visibility. You can start seeing traffic and leads within a few days of launching campaigns.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Is Google Ads better than SEO?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Google Ads provides instant results, while SEO delivers long-term growth. A combination of both works best.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Do you provide campaign management?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we offer complete Google Ads management, including setup, optimization, and reporting.
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