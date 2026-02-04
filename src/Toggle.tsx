import { useState, useEffect } from "react";
import "./theme-toggle.css";

export default function ThemeToggle() {
  const [isNeon, setIsNeon] = useState(false);

  useEffect(() => {
    if (isNeon) {
      document.body.classList.add("neon-theme");
    } else {
      document.body.classList.remove("neon-theme");
    }
  }, [isNeon]);

  return (
    <div className="toggle-container" onClick={() => setIsNeon(!isNeon)}>
      <div className={`toggle-button ${isNeon ? "active" : ""}`}>
        <div className="icon sun">☀️</div>
        <div className="icon moon">🌙</div>
      </div>
    </div>
  );
}
