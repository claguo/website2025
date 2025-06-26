import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Button({ to, text, icon, onClick, className, plainText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={to} className="flex">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`flex items-center gap-3xs cursor-pointer ${
          plainText ? "" : "px-xs py-3xs font-mono tracking-normal"
        }
        ${className} ${isHovered ? "text-pink" : "italic"}`}
      >
        {text}
        {icon && icon}
      </div>
    </Link>
  );
}

export default Button;
