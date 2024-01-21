import React from "react";

function Button(props) {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      className={`flex gap-[0.5rem] self-start cursor-pointer mr-[0.5rem] mt-[0.25rem] lg:mt-[0.5rem] inline-block ${
        props.isHovered ? "-skew-x-[11deg] italic" : ""
      }`}
    >
      <p
        className={`flex items-center font-mono font-bold rounded-[1.5rem] border-solid border-[1px] py-[0.25rem] ${props.className}
    `}
      >
        {props.text}
        {props.icon && props.icon}
      </p>
    </div>
  );
}

export default Button;
