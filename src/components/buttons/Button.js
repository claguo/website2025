import React from "react";

function Button(props) {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      className={`flex gap-[0.5rem] cursor-pointer mt-[0.25rem] lg:mt-[0.5rem] ${
        props.isHovered ? "-skew-x-[11deg] italic" : ""
      }`}
    >
      <p
        className={`flex items-center gap-[0.5rem] font-mono font-bold rounded-[1.5rem] border-solid border-[1px] py-[0.25rem] ${props.className}
    `}
      >
        {props.text}
        {props.icon && props.icon}
      </p>
    </div>
  );
}

export default Button;
