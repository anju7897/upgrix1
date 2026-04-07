import "@/styles/services.css";

const services = [
  { title: "Social Media Marketing", img: "/assets/img/upgrix-img.png" },
  { title: "Search Engine Optimization", img: "/assets/img/seo-upgrix.png" },
  { title: "Content Marketing", img: "/assets/img/content-mar-upgrix.png" },
  { title: "Web Development", img: "/assets/img/web-upgrix.png" },
  { title: "Pay Per Click (PPC)", img: "/assets/img/ppc-upgrix.png" },
  { title: "Social Media Optimization", img: "/assets/img/social-media-upgrix.png" },
  { title: "App Development", img: "assets/img/app-dev-upgrix.png" },
  { title: "Google My Business", img: "/assets/img/gmb-upgrix.png" },
];

export default function Services() {
  return (
    <section className="services-modern">
      <div className="container">

        <div className="heading text-center">
          <h2>Digital Marketing <span>Services</span></h2>
          <p>Smart strategies. Real growth.</p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">

              <div className="service-left">
                <span className="number">0{index + 1}</span>
              </div>

              <div className="service-middle">
                <h3>{service.title}</h3>
              </div>

              <div className="service-right">
                <img src={service.img} alt={service.title} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}