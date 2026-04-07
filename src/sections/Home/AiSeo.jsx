import "@/styles/ai-seo.css";

import {
  FaSearch,
  FaPenNib,
  FaTools,
  FaChartLine,
  FaMicrophone,
  FaChartBar,
} from "react-icons/fa";

export default function AISEO() {
  return (
    <section className="ai-section">
      <div className="container">

        {/* Heading */}
        <div className="ai-heading text-center">
          <h2>
            AI-Powered <span>SEO Services</span>
          </h2>
          <p>
            Boost your rankings with intelligent, data-driven SEO strategies powered by AI.
          </p>
        </div>

        {/* Grid */}
        <div className="ai-grid">

          <div className="ai-card">
            <div className="ai-icon"><FaSearch /></div>
            <h3>Smart Keyword Research</h3>
            <p>
              Discover high-ranking keywords using AI tools that analyze trends, search intent, and competition.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-icon"><FaPenNib /></div>
            <h3>Content Optimization</h3>
            <p>
              AI helps create SEO-friendly content that ranks better and engages your audience effectively.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-icon"><FaTools /></div>
            <h3>Technical SEO Analysis</h3>
            <p>
              Identify and fix technical issues with AI-powered audits for faster and optimized websites.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-icon"><FaChartLine /></div>
            <h3>Competitor Insights</h3>
            <p>
              Analyze your competitors’ strategies and stay ahead using real-time AI data insights.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-icon"><FaMicrophone /></div>
            <h3>Voice Search Optimization</h3>
            <p>
              Optimize for voice queries and future-ready search trends using advanced AI models.
            </p>
          </div>

          <div className="ai-card">
            <div className="ai-icon"><FaChartBar /></div>
            <h3>Performance Tracking</h3>
            <p>
              Track SEO performance with AI dashboards and improve your strategy continuously.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}