import React, { useState } from "react";

function ImpactCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = useState(true);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      // onClick={() => {setIsOpen(!isOpen)}}
      className={`flex flex-col text-center ${
        isOpen ? "" : isHovered ? "bg-gray" : "bg-bg-body"
      } ${isHovered ? "cursor-pointer" : ""}`}
    >
      {isHovered ? (
        <div className="relative">
          <img
            src={props.src}
            alt={props.caption}
            className="brightness-[0.5]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-[2px] text-white px-[3rem] gap-[0.5rem]">
            <p className="font-bold">{props.content}</p>
            <p>{props.caption}</p>
          </div>
        </div>
      ) : (
        <>
          <img src={props.src} alt={props.caption} />
        </>
      )}
      {/* <p>{props.content}</p> */}
    </div>
  );
}

export default ImpactCard;
