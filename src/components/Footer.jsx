import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserTie,
  FaLink,
  FaBriefcase,
  FaHome,
  FaAddressCard,
  FaAward,
  FaEnvelope,
  FaBook,
  FaFileInvoiceDollar,
  FaSearchDollar,
  FaChartLine,
} from "react-icons/fa";
import "./css/Footer.css";

const footer = {
  title: "Ziad Mohamed, CPA",
  text: "Independent accounting consultant focused on clean books, compliant taxes, and clear financial decisions.",
  linksTitle: "Quick Links",
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],
  servicesTitle: "Services",
  services: [
    { label: "Bookkeeping", href: "#contact" },
    { label: "Tax Filing", href: "#contact" },
    { label: "Audit Support", href: "#contact" },
    { label: "Reporting", href: "#contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkIcons = {
    Home: <FaHome />,
    About: <FaAddressCard />,
    Certificates: <FaAward />,
    Contact: <FaEnvelope />,
  };
  const serviceIcons = {
    Bookkeeping: <FaBook />,
    "Tax Filing": <FaFileInvoiceDollar />,
    "Audit Support": <FaSearchDollar />,
    Reporting: <FaChartLine />,
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container py-4">
          <div className="row g-4 footer-grid">
            <div className="col-lg-4 col-md-4" data-aos="fade-up">
              <div className="footer-col">
                <h5 className="footer-title">
                  <span className="footer-title-icon">
                    <FaUserTie />
                  </span>
                  {footer.title}
                </h5>
                <p className="footer-text">{footer.text}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="80">
              <div className="footer-col">
                <h5 className="footer-title">
                  <span className="footer-title-icon">
                    <FaLink />
                  </span>
                  {footer.linksTitle}
                </h5>
                <ul className="footer-links">
                  {footer.links.map((link, index) => (
                    <li key={`footer-link-${index}`}>
                      <a href={link.href}>
                        <span className="footer-link-icon">{linkIcons[link.label] || <FaLink />}</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="160">
              <div className="footer-col">
                <h5 className="footer-title">
                  <span className="footer-title-icon">
                    <FaBriefcase />
                  </span>
                  {footer.servicesTitle}
                </h5>
                <ul className="footer-links">
                  {footer.services.map((service, index) => (
                    <li key={`footer-service-${index}`}>
                      <a href={service.href}>
                        <span className="footer-link-icon">
                          {serviceIcons[service.label] || <FaBriefcase />}
                        </span>
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />
          <p className="footer-bottom">
            {currentYear} {footer.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
