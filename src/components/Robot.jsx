import React from "react";

// Custom cute robot explorer with jetpack - built entirely with SVG
const Robot = ({ walking = true, facing = "right", scale = 1 }) => {
  const flip = facing === "left" ? -1 : 1;
  return (
    <div
      className={`robot-wrapper ${walking ? "robot-bounce" : ""}`}
      style={{ transform: `scaleX(${flip}) scale(${scale})`, transformOrigin: "center bottom" }}
      aria-hidden
    >
      <svg width="90" height="120" viewBox="0 0 90 120" xmlns="http://www.w3.org/2000/svg">
        {/* Jetpack flame */}
        <g className={walking ? "robot-flame" : ""}>
          <ellipse cx="18" cy="92" rx="5" ry="9" fill="#FF7A45" opacity="0.9" />
          <ellipse cx="18" cy="94" rx="3" ry="6" fill="#FFD166" />
        </g>
        {/* Jetpack body */}
        <rect x="10" y="55" width="14" height="30" rx="3" fill="#4A5568" stroke="#1A202C" strokeWidth="2" />
        <circle cx="17" cy="63" r="2" fill="#FFD166" />

        {/* Body */}
        <rect x="22" y="48" width="42" height="44" rx="10" fill="#F8F5EC" stroke="#1A202C" strokeWidth="2.5" />
        {/* Chest panel */}
        <rect x="30" y="58" width="26" height="18" rx="3" fill="#2D3748" />
        <circle cx="37" cy="67" r="2" fill="#5EEAD4" />
        <circle cx="44" cy="67" r="2" fill="#FBBF24" />
        <circle cx="51" cy="67" r="2" fill="#F87171" />

        {/* Head */}
        <rect x="26" y="14" width="36" height="34" rx="12" fill="#F8F5EC" stroke="#1A202C" strokeWidth="2.5" />
        {/* Antenna */}
        <line x1="44" y1="14" x2="44" y2="4" stroke="#1A202C" strokeWidth="2" />
        <circle cx="44" cy="3" r="3" fill="#F97316" className="robot-antenna" />
        {/* Visor / face screen */}
        <rect x="31" y="22" width="26" height="14" rx="5" fill="#0F172A" />
        {/* Eyes */}
        <circle cx="38" cy="29" r="2.5" fill="#5EEAD4" className="robot-eye" />
        <circle cx="50" cy="29" r="2.5" fill="#5EEAD4" className="robot-eye" />
        {/* Smile */}
        <path d="M36 41 Q44 46 52 41" stroke="#1A202C" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Left arm */}
        <rect x="18" y="52" width="8" height="22" rx="4" fill="#F8F5EC" stroke="#1A202C" strokeWidth="2" className="robot-arm-left" />
        {/* Right arm */}
        <rect x="60" y="52" width="8" height="22" rx="4" fill="#F8F5EC" stroke="#1A202C" strokeWidth="2" className="robot-arm-right" />

        {/* Legs */}
        <rect x="30" y="92" width="10" height="20" rx="3" fill="#4A5568" stroke="#1A202C" strokeWidth="2" className="robot-leg-left" />
        <rect x="48" y="92" width="10" height="20" rx="3" fill="#4A5568" stroke="#1A202C" strokeWidth="2" className="robot-leg-right" />
        {/* Feet */}
        <rect x="27" y="110" width="16" height="6" rx="3" fill="#1A202C" />
        <rect x="46" y="110" width="16" height="6" rx="3" fill="#1A202C" />
      </svg>
    </div>
  );
};

export default Robot;
