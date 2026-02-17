import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Certificates.css";

import azhar from "../data/assets/Al-Azhar Univeristy.jpeg";
import banqueMisr1 from "../data/assets/Banque Misr.jpeg";
import banqueMisr2 from "../data/assets/Banque Misr2.jpeg";
import digitalMarketing from "../data/assets/google.jpeg";
import graduation from "../data/assets/Graduation.jpeg";
import microsoftOffice from "../data/assets/Udemy.jpeg";
import cambridge1 from "../data/assets/UNIVERSITY OF CAMBRIDGE.jpeg";
import cambridge2 from "../data/assets/UNIVERSITY OF CAMBRIDGE2.jpeg";
import cambridge3 from "../data/assets/UNIVERSITY OF CAMBRIDGE3.jpeg";
import cambridge4 from "../data/assets/UNIVERSITY OF CAMBRIDGE4.jpeg";
import cambridge5 from "../data/assets/UNIVERSITY OF CAMBRIDGE5.jpeg";
import cambridge6 from "../data/assets/UNIVERSITY OF CAMBRIDGE6.jpeg";
import edlal from "../data/assets/edlal.jpeg";
import strategic from "../data/assets/youth.jpeg";
import icdl from "../data/assets/ICDL.jpeg";
import excelTrack from "../data/assets/Udemy.jpeg";

const certificates = [
  { id: 1, imageUrl: azhar, title: "Al-Azhar University" },
  { id: 2, imageUrl: banqueMisr1, title: "Banque Misr- Summer Training" },
  { id: 3, imageUrl: banqueMisr2, title: "Banque Misr- Summer Training" },
  { id: 4, imageUrl: digitalMarketing, title: "Digital Marketing" },
  { id: 5, imageUrl: graduation, title: "Graduation Certificate" },
  { id: 6, imageUrl: microsoftOffice, title: "Microsoft Office" },
  { id: 7, imageUrl: cambridge1, title: "Cambridge University" },
  { id: 8, imageUrl: cambridge2, title: "Cambridge University" },
  { id: 9, imageUrl: cambridge3, title: "Cambridge University" },
  { id: 10, imageUrl: cambridge4, title: "Cambridge University" },
  { id: 11, imageUrl: cambridge5, title: "Cambridge University" },
  { id: 12, imageUrl: cambridge6, title: "Cambridge University" },
  { id: 13, imageUrl: edlal, title: "Edlal Certificate" },
  { id: 14, imageUrl: strategic, title: "Strategic Planning" },
  { id: 15, imageUrl: icdl, title: "ICDL" },
  { id: 16, imageUrl: excelTrack, title: "Excel track (Accounting Excel)" },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState("");
  const [lens, setLens] = useState({ x: 50, y: 50, visible: false });
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 950, once: false });
  }, []);

  useEffect(() => {
    if (!certificates.length || isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (!zoomImage) return undefined;
    const closeOnEsc = (event) => {
      if (event.key === "Escape") setZoomImage("");
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [zoomImage]);

  if (!certificates.length) return null;

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length,
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const handleStageStart = (clientX) => {
    dragStartX.current = clientX;
  };

  const handleStageEnd = (clientX) => {
    if (dragStartX.current === null) return;
    const delta = clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(delta) < 45) return;
    if (delta > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const handleStageClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x < rect.width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const buildDotItems = () => {
    const total = certificates.length;
    if (total <= 8) {
      return certificates.map((_, index) => ({ type: "dot", index }));
    }

    const around = [activeIndex - 1, activeIndex, activeIndex + 1].filter(
      (index) => index > 0 && index < total - 1,
    );
    const core = [...new Set([0, ...around, total - 1])].sort((a, b) => a - b);
    const items = [];

    for (let i = 0; i < core.length; i += 1) {
      items.push({ type: "dot", index: core[i] });
      if (i < core.length - 1 && core[i + 1] - core[i] > 1) {
        items.push({ type: "gap", key: `${core[i]}-${core[i + 1]}` });
      }
    }

    return items;
  };

  const handleLensMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLens({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      visible: true,
    });
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title about-title">Certificates</h2>
          <p className="section-subtitle about-subtitle">
            A curated collection of my verified certifications, banking training
            programs, and professional achievements.
          </p>
        </div>
        <div
          className="cert-slider"
          data-aos="zoom-in-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          <button
            className="cert-nav cert-nav-left"
            onClick={prevSlide}
            aria-label="Previous certificate">
            <FaChevronLeft />
          </button>

          <div
            className="cert-stage"
            onClick={handleStageClick}
            onTouchStart={(event) => handleStageStart(event.touches[0].clientX)}
            onTouchEnd={(event) =>
              handleStageEnd(event.changedTouches[0].clientX)
            }
            onMouseDown={(event) => handleStageStart(event.clientX)}
            onMouseUp={(event) => handleStageEnd(event.clientX)}>
            {certificates.map((item, index) => {
              const offset = index - activeIndex;
              const wrappedOffset =
                offset > certificates.length / 2
                  ? offset - certificates.length
                  : offset < -certificates.length / 2
                    ? offset + certificates.length
                    : offset;
              const distance = Math.abs(wrappedOffset);

              return (
                <article
                  key={item.id}
                  className={`cert-slide ${wrappedOffset === 0 ? "active" : ""} ${distance > 2 ? "is-hidden" : ""}`}
                  style={{ "--offset": wrappedOffset, "--distance": distance }}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (wrappedOffset === 0 && item.imageUrl) {
                      setZoomImage(item.imageUrl);
                    }
                  }}>
                  <div className="cert-card-plain">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt="Certificate"
                        className="cert-image"
                      />
                    ) : (
                      <div className="cert-image cert-image-fallback">
                        Certificate
                      </div>
                    )}
                    <div className="cert-name-chip">{item.title}</div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            className="cert-nav cert-nav-right"
            onClick={nextSlide}
            aria-label="Next certificate">
            <FaChevronRight />
          </button>
        </div>

        <div className="cert-dots">
          {buildDotItems().map((item, idx) =>
            item.type === "dot" ? (
              <button
                key={`dot-${item.index}`}
                className={`cert-dot ${item.index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(item.index)}
                aria-label={`Go to certificate ${item.index + 1}`}></button>
            ) : (
              <span key={`gap-${item.key || idx}`} className="cert-dot-gap">
                ...
              </span>
            ),
          )}
        </div>
      </div>

      {zoomImage && (
        <div className="cert-lightbox" onClick={() => setZoomImage("")}>
          <div
            className="cert-lightbox-inner"
            onClick={(event) => event.stopPropagation()}>
            <button
              className="cert-lightbox-close"
              onClick={() => setZoomImage("")}
              aria-label="Close">
              <FaTimes />
            </button>

            <div
              className="cert-zoom-wrap"
              onMouseMove={handleLensMove}
              onMouseEnter={() =>
                setLens((prev) => ({ ...prev, visible: true }))
              }
              onMouseLeave={() =>
                setLens((prev) => ({ ...prev, visible: false }))
              }>
              <img
                src={zoomImage}
                alt="Certificate zoom"
                className="cert-zoom-image"
              />
              {lens.visible && (
                <span
                  className="cert-lens"
                  style={{
                    left: `${lens.x}%`,
                    top: `${lens.y}%`,
                    backgroundImage: `url(${zoomImage})`,
                    backgroundPosition: `${lens.x}% ${lens.y}%`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}