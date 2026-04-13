import "@/styles/custom.css";
import { FaSearch, FaChartLine, FaGlobe, FaRobot, FaComments,  FaRocket, FaChartBar, FaBullseye, FaDollarSign } from "react-icons/fa";
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
          <h1>GEO</h1>
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
            Generative Engine Optimization<span> (GEO)</span>
          </h2>
<p>
    Generative Engine Optimization (GEO) is the next evolution of SEO, designed to optimize your brand and content for AI-powered search engines like ChatGPT, Google SGE, Gemini, and other generative platforms. Unlike traditional SEO, GEO focuses on making your content discoverable, understandable, and recommendable by AI systems.
<br />
GEO ensures your business appears not just in search results—but in <span style={{color:'#eebd43'}}>AI-generated answers, recommendations, and conversations.</span>
</p>
          <div className="seo-list">

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>AI tools give direct answers instead of links</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Users trust AI recommendations more</span>
            </div>

            <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Traditional SEO alone is no longer enough</span>
            </div>
             <div className="seo-item">
              <div className="seo-icon-box">
                <FaCheckCircle />
              </div>
              <span>Businesses need AI visibility + authority</span>
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
      <h2>Advanced <span>GEO Services</span> for AI-Driven Growth</h2>
      <p>
        Optimize your business for AI-powered search engines and become the top recommendation in ChatGPT, Google SGE, and beyond.
      </p>
    </div>

    {/* Cards */}
    <div className="seo-grid">

      <div className="seo-card">
        <div className="seo-icon"><FaBrain /></div>
        <h3>AI Content Optimization</h3>
        <p>
          We structure your content so AI engines can easily understand and recommend your business.
        </p>
        <ul>
          <li>Semantic content structuring</li>
          <li>Context-rich content creation</li>
          <li>Conversational optimization</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaProjectDiagram /></div>
        <h3>Entity-Based SEO</h3>
        <p>
          Build strong brand entities that AI systems recognize as authority.
        </p>
        <ul>
          <li>Brand entity optimization</li>
          <li>Knowledge graph signals</li>
          <li>Structured data (Schema markup)</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaMicrophone /></div>
        <h3>Voice & Conversational SEO</h3>
        <p>
          Optimize your content for voice assistants and natural language queries.
        </p>
        <ul>
          <li>Natural language targeting</li>
          <li>FAQ-based content</li>
          <li>Long-tail query optimization</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaLink /></div>
        <h3>AI Citation Optimization</h3>
        <p>
          Get your brand mentioned and cited in AI-generated responses.
        </p>
        <ul>
          <li>Authority building</li>
          <li>Content distribution</li>
          <li>High-quality backlinks</li>
        </ul>
      </div>

      <div className="seo-card">
        <div className="seo-icon"><FaStar /></div>
        <h3>Featured Snippet Optimization</h3>
        <p>
          Design content that AI selects as direct answers.
        </p>
        <ul>
          <li>Snippet-ready formatting</li>
          <li>Bullet answers</li>
          <li>Clear & concise structure</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section className="geo-section">
  <div className="container">

    {/* Heading */}
    <div className="geo-heading text-center">
      <h2>Our <span>GEO Strategy</span></h2>
      <p>We follow a proven step-by-step process to dominate AI search results.</p>
    </div>

    {/* Steps */}
    <div className="geo-steps">

      <div className="geo-card">
        <div className="step-number">01</div>
        <h3>AI Search Research</h3>
        <p>We analyze how users ask questions in AI tools.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">02</div>
        <h3>Content Engineering</h3>
        <p>We create structured, AI-friendly content.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">03</div>
        <h3>Technical Optimization</h3>
        <p>We implement schema, metadata, and entity signals.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">04</div>
        <h3>Authority Building</h3>
        <p>We build trust signals across platforms.</p>
      </div>

      <div className="geo-card">
        <div className="step-number">05</div>
        <h3>Continuous Optimization</h3>
        <p>We track AI visibility and improve performance.</p>
      </div>

    </div>

  </div>
</section>
<section className="seo-importance-section">
  <div className="container">

    {/* Heading */}
    <div className="seo-imp-heading text-center">
      <h2>Why GEO is Important for Your <span>Business</span></h2>
      <p>
        Generative Engine Optimization helps your business appear in AI-powered search results like ChatGPT and Google SGE, making your brand the direct answer users trust.
      </p>
    </div>

    {/* Cards */}
    <div className="row">

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaRobot className="seo-imp-icon" />
          <p>Appear in AI-generated search results</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaComments className="seo-imp-icon" />
          <p>Optimize for conversational & voice search</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaBullseye className="seo-imp-icon" />
          <p>Target high-intent, question-based queries</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaBrain className="seo-imp-icon" />
          <p>Build strong AI-recognized brand authority</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaLink className="seo-imp-icon" />
          <p>Get cited in AI answers & recommendations</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="seo-imp-card">
          <FaChartLine className="seo-imp-icon" />
          <p>Future-proof your digital marketing strategy</p>
        </div>
      </div>

    </div>

  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center">

      <div className="seo-imp-heading text-center">
        <h2>GEO <span>FAQs</span></h2>
      </div>

      <div className="col-md-10">
        <div className="accordion" id="accordion">

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent" data-bs-toggle="collapse" data-bs-target="#collapse1">
                What is GEO (Generative Engine Optimization)?
              </button>
            </h3>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
              <div className="accordion-body">
                GEO is the process of optimizing your website for AI-powered search engines like ChatGPT, Google SGE, and Gemini. It helps your business appear in AI-generated answers instead of just traditional search results.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">
                How is GEO different from traditional SEO?
              </button>
            </h3>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Traditional SEO focuses on ranking in search engine results pages, while GEO focuses on making your content understandable and recommendable by AI systems, helping you appear directly in AI-generated responses.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">
                Why is GEO important in 2026?
              </button>
            </h3>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                Users are shifting from traditional search to AI tools. GEO ensures your business is visible in AI answers, helping you stay ahead of competitors and capture future traffic.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent mb-4">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">
                How long does GEO take to show results?
              </button>
            </h3>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                GEO is a long-term strategy similar to SEO. Initial improvements can be seen within 2–3 months, while strong AI visibility builds over time with continuous optimization.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent">
            <h3 className="accordion-header">
              <button className="accordion-button shadow-none bg-transparent collapsed" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Why choose us for GEO services?
              </button>
            </h3>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordion">
              <div className="accordion-body">
                We combine advanced SEO strategies with AI optimization techniques to ensure your business ranks not only on Google but also in AI-generated answers, boosting visibility, authority, and conversions.
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