"use client";

import { useEffect, useState } from "react";
import "@/styles/hero.css";

export default function Hero() {
  const texts = [
    "Grow Your Business 🚀",
    "Digital Marketing Experts",
    "Boost Your Online Presence"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(reset);
    }
  }, [charIndex, index]);

  return (
    <section className="hero-section">

      <video autoPlay loop muted playsInline className="hero-video">
        <source src="assets/video/digital-upgrix.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          {text}
          <span className="cursor"></span>
        </h1>

        <p>
          We help businesses grow with powerful digital marketing strategies.
        </p>

       
      </div>

    </section>
  );
}