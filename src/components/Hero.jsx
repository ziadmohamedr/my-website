import { useEffect } from "react";
import "./css/Hero.css";
import ziadImage from "../data/assets/ziad.png";

const hero = {
  title: "Professional",
  highlight: "Accounting Services",
  subtitle:
    "Ziad Mohamed is a certified accountant helping businesses with bookkeeping, tax compliance, financial reporting, and audit preparation.",
  primaryCta: "Download CV",
  cvUrl: "/CV-Ziad Mohammed-1.pdf",
  avatar: "ZM",
  imageUrl: ziadImage,
};

export default function Hero() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (window.innerWidth < 992) return;
      const avatar = document.querySelector(".avatar");

      if (!avatar) return;

      const moveX = (event.clientX / window.innerWidth - 0.5) * 16;
      const moveY = (event.clientY / window.innerHeight - 0.5) * 16;
      avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <h1
                className="hero-title"
                data-aos="fade-up"
                data-aos-duration="1000">
                {hero.title}
                <span className="gradient-text"> {hero.highlight}</span>
              </h1>
              <p
                className="hero-subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000">
                {hero.subtitle}
              </p>
              <div
                className="hero-kpis"
                data-aos="fade-up"
                data-aos-delay="160">
                <span>13 Ventures</span>
                <span>15+ Markets</span>
                <span>1.3K+ Team</span>
              </div>
              <div
                className="hero-buttons"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000">
                <a
                  className="btn btn-primary btn-lg"
                  href={hero.cvUrl}
                  download>
                  {hero.primaryCta}
                </a>
              </div>
            </div>
            <div
              className="col-12 col-lg-5 text-center order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1200">
              <div className="hero-image">
                <div className="avatar-wrapper">
                  <div className="avatar">
                    {hero.imageUrl ? (
                      <img
                        src={hero.imageUrl}
                        alt="Ziad Mohamed"
                        className="avatar-image"
                      />
                    ) : (
                      hero.avatar
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,45 Q300,0 600,45 T1200,45 L1200,120 L0,120 Z"
            fill="#f7f6f1"></path>
        </svg>
      </div>
    </section>
  );
}
