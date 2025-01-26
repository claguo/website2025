import React from "react";

function InterviewCard(props) {
  return (
    <div className="bg-bg-body rounded-[1rem] p-[1rem] flex flex-col flex-1">
      <p className="text-[3rem]">{props.emoji}</p>
      <p className="font-bold">{props.name}</p>
      <p>{props.desc}</p>
      <p className="font-mono text-xs">@ {props.location}</p>
    </div>
  );
}

export default InterviewCard;
