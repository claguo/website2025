import React, { useState } from "react";
import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";

function ExternalURLButton(props) {
  const externalUrl = props.url;
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, "_blank");
  };

  return (
    <>
      {props.isButton === true ? (
        <Button
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={handleButtonClick}
          text={props.text}
          icon={props.icon}
          isHovered={isHovered}
          className={`${props.className} gap-[0.5rem] ${
            isHovered
              ? "bg-light-green border-light-green"
              : props.hasBg
                ? "bg-green border-green"
                : "border-green"
          }`}
        />
      ) : props.big === true ? (
        <span
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`${
            isHovered ? "text-green italic" : "text-dark-green"
          } inline-block m-0 text-md lg:text-lg cursor-pointer`}
          onClick={handleButtonClick}
        >
          {props.text}
        </span>
      ) : (
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`inline-block cursor-pointer m-0 rounded-[0.125rem] ${
            isHovered ? "bg-green" : "bg-light-green"
          }`}
          style={isHovered ? { transform: "skewX(-11deg)" } : {}}
          onClick={handleButtonClick}
        >
          <p className="flex items-center">
            {props.text} <MdArrowOutward className="" />
          </p>
        </div>
      )}
    </>
  );
}

export default ExternalURLButton;
