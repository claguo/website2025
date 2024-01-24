import React from "react";

function CarouselButton(props) {
  return (
    <button
      className={`mb-[0.25rem] ${
        props.text === "<" ? "left-0" : "right-0"
      } z-10 pb-0 absolute bottom-0 flex items-end`}
      type="button"
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      title={props.title}
    >
      <p
        className={`flex items-center font-bold rounded-[1.5rem] border-solid border-[1px] py-[0.25rem] ${
          props.isHovered
            ? "bg-light-green border-light-green px-[1rem] lg:px-[3rem]"
            : "border-green px-[1rem] lg:px-[3rem]"
        }`}
      >
        {props.text}
      </p>
    </button>
  );
}

export default CarouselButton;
