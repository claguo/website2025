import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({
  variant = "default",
  to,
  url,
  text,
  icon,
  onClick,
  className,
  plainText,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getBaseClasses = () => {
    const baseClasses = "cursor-pointer font-mono";
    const hoverClass = isHovered ? "text-pink" : "italic";

    if (plainText) {
      return `inline-block ${baseClasses} ${hoverClass} ${className || ""}`;
    }

    return `flex items-center gap-3xs ${baseClasses} italic tracking-normal px-xs py-3xs hover:text-pink ${
      className || ""
    }`;
  };

  const renderContent = () => {
    if (plainText) {
      return (
        <span className="flex items-center gap-4xs">
          {text} {icon && icon}
        </span>
      );
    }
    return (
      <>
        {text} {icon && icon}
      </>
    );
  };

  if (variant === "link") {
    if (url) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className={`inline-block cursor-pointer font-mono ${
            isHovered ? "text-pink" : "italic"
          } ${className}`}
        >
          {renderContent()}
        </a>
      );
    }

    if (to) {
      return (
        <Link
          to={to}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className={`inline-block cursor-pointer font-mono ${
            isHovered ? "text-pink" : "italic"
          } ${className}`}
        >
          {renderContent()}
        </Link>
      );
    }
  } else {
    if (url) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className={`flex items-center gap-3xs cursor-pointer font-mono tracking-normal px-xs py-3xs hover:italic hover:text-pink ${className}`}
        >
          {renderContent()}
        </a>
      );
    }

    if (to) {
      return (
        <Link
          to={to}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className={`flex items-center gap-3xs cursor-pointer font-mono tracking-normal px-xs py-3xs hover:italic hover:text-pink ${className}`}
        >
          {renderContent()}
        </Link>
      );
    }
  }

  // return (
  //   <button
  //     type="button"
  //     onMouseEnter={() => setIsHovered(true)}
  //     onMouseLeave={() => setIsHovered(false)}
  //     onClick={onClick}
  //     className={getBaseClasses()}
  //     aria-label={text || "Button"}
  //   >
  //     {renderContent()}
  //   </button>
  // );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["default", "inline"]),
  to: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  plainText: PropTypes.bool,
};

export default Button;
