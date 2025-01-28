import React, { useState } from "react";
import Button from "./Button";

function ExternalURLButton(props) {
  const externalUrl = props.url;
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, "_blank");
  };

  return (
    <>
      {props.plaintext === true ? (
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`font-mono italic inline-block cursor-pointer ${
            props.className
          } ${isHovered ? "text-blue" : "text-text-default"}`}
          onClick={handleButtonClick}
        >
          <span className="flex items-center">{props.text}</span>
        </div>
      ) : (
        // plaintext === true
        <Button
          onClick={handleButtonClick}
          text={props.text}
          icon={props.icon}
        />
      )}
    </>
  );
}

export default ExternalURLButton;
