import React from 'react'

const IconArrow = ({ color, ...props }) => {
  return (
    <svg width={113} height={66} fill="none" {...props}>
      <path d="M0 33h112M80 1l32 32-32 32" stroke={color} />
    </svg>
  );
}

export default IconArrow;
