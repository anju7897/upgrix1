"use client";
import "@/styles/our-team.css";

export default function TeamSection() {
const team = [
  {
    name: "Avneet Kaur",
    role: "Manager",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Preeti Mehra Kar",
    role: "Human Resources Manager",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Aniket Garg",
    role: "Digital Marketing Specialist",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Karan Chaudhary",
    role: "Google Ads Specialist",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Sahil Jamwal",
    role: "Content Writer",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Abhishek",
    role: "Senior Graphic Designer",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Ashish Negi",
    role: "Creative Graphic Designer",
    img: "/assets/img/profile-img-upgrix.webp",
  },
  {
    name: "Anjali Sharma",
    role: "SEO, Google Ads & GMB Expert",
    img: "/assets/img/profile-img-upgrix.webp",
  },
];

  return (
    <section className="tmx-team-section">
      <div className="tmx-container">

        <div className="tmx-title">
          <h2>Meet Our Experts</h2>
          <p>Creative minds behind your success</p>
        </div>

        <div className="tmx-grid">
          {team.map((member, i) => (
            <div className="tmx-card" key={i}>

              <div className="tmx-img">
                <img src={member.img} alt={member.name} />

                <div className="tmx-overlay">
                  <div className="tmx-social">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>

              <div className="tmx-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ICON CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
    </section>
  );
}