import "@/styles/services.css";

const services = [
  {
    title: "Social Media Marketing Services",    
    img: "/assets/img/social=media-upgrix.png",
  },
  {

    title: "Search Engine Optimization Services",
    img: "/assets/img/seo-upgrix.png",
  },
  {
    title: "Content Marketing Strategy",
    img: "/assets/img/conten-mar-upgrix.png",
  },
  {
    title: "Website Development Services",
    img: "/assets/img/web-upgrix.png",
  },
  {
    title: "Pay Per Click (PPC) Campaigns",
    duration: "1 Month",
    img: "/assets/img/ppc-upgrix.png",
  },
  {
    title: "Social Media Optimization",
    img: "/assets/img/social-upgrix.png",
  },
  {
    title: "Mobile App Development",
    img: "/assets/img/app-upgrix.png",
  },
  {
    title: "Google My Business Optimization",
    img: "/assets/img/gmb-upgrix.png",
  },
];

export default function Services() {
  return (
    <section className="service-course-section">
      <div className="container">

        <div className="heading text-center">
          <h2>Digital Marketing <span>Services</span></h2>
          <p>Grow your business with our expert solutions</p>
        </div>

        <div className="course-grid">
          {services.map((item, index) => (
            <div className="course-card" key={index}>

              <div className="course-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="course-content">
                <span className="category">{item.category}</span>

                <h3>{item.title}</h3>

                <div className="bottom-row">
                <a href="#" className="enroll-btn">
                  Get More Info <i className="flaticon-right-arrow"></i>
                </a>
              </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}