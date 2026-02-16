import { useState, useEffect } from "react";
import "./css/Preloader.css";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={`preloader ${!isVisible ? "fade-out" : ""}`}>
      <div className="preloader-orb preloader-orb-a"></div>
      <div className="preloader-orb preloader-orb-b"></div>
      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <div className="preloader-ring ring-one"></div>
          <div className="preloader-ring ring-two"></div>
          <div className="preloader-logo">ZM</div>
        </div>
        <div className="preloader-text">Ziad Mohamed, CPA</div>
        <div className="preloader-shimmer">
          <span></span>
        </div>
        <div className="preloader-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="preloader-subtitle">Building clarity in every financial decision.</p>
      </div>
    </div>
  );
}
