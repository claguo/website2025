import React from "react";
import LargeP from "./LargeP";

function Features(props) {
  return (
    <div
      className={`flex flex-col lg:items-center gap-[3rem] ${
        props.imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-2/5 flex flex-col gap-[1rem]">
        <LargeP> {props.title} </LargeP>
        <p> {props.text} </p>
      </div>
      <img className="w-3/5" src={props.src} alt={props.alt} />
    </div>
  );
}

export default Features;
