import React from "react";

const Button = ({ color, bgColor, size, text, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{ color, borderRadius, backgroundColor: bgColor }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
