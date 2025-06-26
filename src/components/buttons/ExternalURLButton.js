import React, { useState } from "react";

function ExternalURLButton({ url, plainText, className, text, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <>
      {plainText === true ? (
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`inline-block cursor-pointer ${className} ${
            isHovered ? "text-pink" : "italic"
          }`}
          onClick={handleButtonClick}
          tabIndex={0}
          role="link"
        >
          <span className="flex items-center gap-3xs">
            {text} {icon && icon}
          </span>
        </div>
      ) : (
        <div
          onClick={handleButtonClick}
          className="flex items-center gap-3xs font-mono italic tracking-normal cursor-pointer px-xs py-3xs hover:text-pink"
        >
          {text} {icon && icon}
        </div>
      )}
    </>
  );
}

export default ExternalURLButton;
