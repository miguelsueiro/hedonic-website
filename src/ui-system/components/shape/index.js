import React from 'react'

const Shape = ({ imageSrc, size }) => (
  <svg viewBox="0 0 300 400" width={size}>
    <filter id="noise">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.001"
        id="turbulence"
        numOctaves={1}
        result="turbulence"
        seed={50}
      >
        <animate
          id="noiseAnimate"
          attributeName="baseFrequency"
          // values="0.03; 0.001; 0.03"
          dur="30s"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale={20} />
    </filter>
    <foreignObject width="100%" height="100%">
      <img
        src={imageSrc}
        alt="shape"
        style={{
          width: "90%",
          filter: 'url("#noise")'
        }}
      />
    </foreignObject>
  </svg>
);

export default Shape