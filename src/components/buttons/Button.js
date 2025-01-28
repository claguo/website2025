import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Button({ to, text, icon, onClick, className, type }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={to}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`font-mono italic flex items-center gap-3xs cursor-pointer ${
          type === "text only" ? "" : "px-[1rem] py-[0.5rem]"
        } ${className} ${isHovered ? "text-pink" : ""}`}
      >
        {text}
        {icon && icon}
      </div>
    </Link>
  );
}

export default Button;
