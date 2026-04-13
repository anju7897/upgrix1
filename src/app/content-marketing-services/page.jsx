import "@/styles/custom.css";
import Link from "next/link";
import { FaPenNib, FaFileAlt, FaBullhorn, FaHashtag, FaChartLine, FaShoppingCart, FaRedo, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>Content Marketing Services</h1>
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
Content Marketing Services That Drive Traffic,  <span> Trust & Conversions</span>
          </h2>
<p>Content marketing is more than just writing—it’s about delivering the right message to the right audience at the right time. High-quality content helps your business rank on search engines, appear in AI-generated results, and build long-term trust.
<br />
We combine SEO + GEO (Generative Engine Optimization) strategies to ensure your content performs on both Google and AI platforms like ChatGPT and Google SGE.</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Drives organic traffic</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Improves search engine rankings</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Builds brand authority</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Engages your audience</span>
            </div>
            

          </div>

          <Link href="#" className="seo-btn text-dark">
Get Free Content Strategy

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
      <h2>Our <span>Content Marketing Services</span></h2>
      <p>
        We create high-quality, SEO-driven content that attracts, engages, and converts your audience.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaPenNib /></div>
        <h3>SEO Blog Writing</h3>
        <p>We create keyword-rich, engaging blog content that ranks on search engines.</p>
        <ul>
          <li>In-depth, research-based articles</li>
          <li>SEO keyword targeting</li>
          <li>AI-friendly content structure</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaFileAlt /></div>
        <h3>Website Content Writing</h3>
        <p>Professional content for your website that converts visitors into customers.</p>
        <ul>
          <li>Homepage, service pages, landing pages</li>
          <li>Clear messaging & brand voice</li>
          <li>Conversion-focused content</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaBullhorn /></div>
        <h3>Copywriting Services</h3>
        <p>Persuasive content designed to drive action and increase sales.</p>
        <ul>
          <li>Sales copy</li>
          <li>Ad copy</li>
          <li>Email marketing content</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaHashtag /></div>
        <h3>Social Media Content</h3>
        <p>Creative and engaging content to grow your brand on social platforms.</p>
        <ul>
          <li>Post captions & creatives</li>
          <li>Content calendars</li>
          <li>Audience engagement strategy</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaChartLine /></div>
        <h3>Content Strategy & Planning</h3>
        <p>We build a complete roadmap for your content success.</p>
        <ul>
          <li>Content planning</li>
          <li>Keyword & topic research</li>
          <li>Funnel-based content strategy</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaRobot /></div>
        <h3>AI & GEO Content Optimization</h3>
        <p>We optimize your content to appear in AI-generated answers.</p>
        <ul>
          <li>Conversational content</li>
          <li>FAQ-based optimization</li>
          <li>Structured content for AI</li>
        </ul>
      </div>

    </div>

  </div>
</section>

<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>Content Marketing Process</span></h2>
      <p>We follow a strategic process to create, optimize, and distribute high-performing content.</p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>Research & Strategy</h3>
        <p>We understand your audience, goals, and competitors.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Content Planning</h3>
        <p>We create a content calendar and topic strategy.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>Content Creation</h3>
        <p>We write high-quality, engaging, and optimized content.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Optimization</h3>
        <p>We optimize content for SEO and AI engines.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Publishing & Promotion</h3>
        <p>We distribute content across platforms for maximum reach.</p>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>Content Marketing <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                What is content marketing?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                Content marketing is the process of creating and sharing valuable content to attract, engage, and convert your target audience.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                How does content marketing help SEO?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                High-quality content improves keyword rankings, increases website traffic, and enhances user engagement, which boosts SEO performance.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                Do you provide AI-optimized content?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Yes, we create GEO-optimized content that performs well in AI-powered search engines like ChatGPT and Google SGE.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                How often should I publish content?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                It depends on your goals, but consistency is key. We recommend at least 2–4 pieces of content per month.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Can content marketing generate leads?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Absolutely! Strategic content can attract the right audience and convert them into qualified leads.
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