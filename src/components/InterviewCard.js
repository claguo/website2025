import React from "react";

function InterviewCard(props) {
  return (
    <div className="bg-gray rounded-lg lg:rounded-2xl py-[1rem] px-[1.5rem] flex flex-col lg:w-[23.5%]">
      <p className="text-[3rem]">{props.emoji}</p>
      <p style={{ fontWeight: "bold" }}>{props.name}</p>
      <p className="caption">@ {props.location}</p>
      <p style={{ marginTop: "1rem" }}>{props.desc}</p>
    </div>
  );
}

export default InterviewCard;
