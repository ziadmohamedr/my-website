import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Header.css";

const header = {
  brandName: "Ziad Mohamed, IFRS",
  brandIcon: "ZM",
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Services",
    certificates: "Certificates",
    contact: "Contact",
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = useMemo(
    () => [
      { id: "hero", label: header.nav.home },
      { id: "about", label: header.nav.about },
      { id: "experience", label: header.nav.experience },
      { id: "skills", label: header.nav.skills },
      { id: "certificates", label: header.nav.certificates },
      { id: "contact", label: header.nav.contact },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const observedSections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.35, 0.6],
      },
    );

    observedSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observedSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [location.pathname, navItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 120);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    navigate("/");
    setTimeout(() => scrollToSection("hero"), 120);
  };

  return (
    <header className="header">
      <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid px-4">
          <button className="navbar-brand fw-bold fs-5 brand-link" onClick={handleLogoClick}>
            <span className="brand-icon">{header.brandIcon}</span>{" "}
            {header.brandName}
          </button>

          <button
            className={`navbar-toggler custom-toggler ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation">
            <span className="hamburger">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </span>
          </button>

          <div
            className={`navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              {navItems
                .filter((item) => Boolean(item.label))
                .map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a
                      className={`nav-link ${location.pathname === "/" && activeSection === item.id ? "active" : ""}`}
                      onClick={() => handleNavClick(item.id)}>
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
