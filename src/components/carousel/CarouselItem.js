import React from "react";

function CarouselItem(props) {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
      <img
        src={props.src}
        alt={props.alt}
        className="lg:max-w-[70%] pb-[3rem] lg:pb-[3.5rem]"
      />
      <p className="lg:max-w-[30%] text-left">{props.text}</p>
    </div>
  );
}

export default CarouselItem;
