import "@/styles/why-choose.css";

import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="wc-section">
      <div className="container">

        {/* Heading */}
        <div className="wc-heading text-center">
          <h2>
            Why Choose <span>Upgrix Marketing</span>
          </h2>
          <p>
            We deliver result-driven digital solutions powered by strategy, creativity, and technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="wc-wrapper">

          <div className="wc-line"></div>

          <div className="wc-item">
            <div className="wc-icon"><FaRocket /></div>
            <div className="wc-content">
              <h3>Result-Oriented Approach</h3>
              <p>
                We focus on measurable results that help your business grow faster and smarter.
              </p>
            </div>
          </div>

          <div className="wc-item">
            <div className="wc-icon"><FaUsers /></div>
            <div className="wc-content">
              <h3>Experienced Team</h3>
              <p>
                Our experts bring years of experience in SEO, ads, and digital strategy.
              </p>
            </div>
          </div>

          <div className="wc-item">
            <div className="wc-icon"><FaChartLine /></div>
            <div className="wc-content">
              <h3>Data-Driven Strategies</h3>
              <p>
                We use analytics and AI tools to optimize campaigns and maximize ROI.
              </p>
            </div>
          </div>

          <div className="wc-item">
            <div className="wc-icon"><FaLightbulb /></div>
            <div className="wc-content">
              <h3>Creative Solutions</h3>
              <p>
                Unique and innovative marketing ideas that make your brand stand out.
              </p>
            </div>
          </div>

          <div className="wc-item">
            <div className="wc-icon"><FaHeadset /></div>
            <div className="wc-content">
              <h3>Dedicated Support</h3>
              <p>
                24/7 support to guide you and ensure smooth project execution.
              </p>
            </div>
          </div>

          <div className="wc-item">
            <div className="wc-icon"><FaShieldAlt /></div>
            <div className="wc-content">
              <h3>Trusted & Reliable</h3>
              <p>
                We build long-term relationships with transparency and trust.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}