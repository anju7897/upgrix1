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
  const data = [
    {
      icon: <FaRocket />,
      title: "Result-Oriented Approach",
      desc: "We focus on measurable results that help your business grow faster.",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      desc: "Our experts bring years of experience in SEO and marketing.",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Strategies",
      desc: "We use analytics & AI tools to maximize ROI.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      desc: "Innovative ideas that make your brand stand out.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      desc: "24/7 support for smooth execution.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Reliable",
      desc: "We build long-term relationships with trust.",
    },
  ];

  return (
    <section className="wc-new">
      <div className="container">

        <div className="wc-head text-center">
          <h2>Why Choose <span>Upgrix Marketing</span></h2>
          <p>We deliver smart, scalable & result-driven digital solutions.</p>
        </div>

        <div className="wc-grid">
          {data.map((item, index) => (
            <div className="wc-card" key={index}>
              <div className="wc-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}