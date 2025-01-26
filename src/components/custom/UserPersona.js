import React from "react";
import PersonaBar from "./PersonaBar";
import Card from "../general/Card";

function UserPersona({
  name,
  expNum,
  motNum,
  quote,
  p,
  memojiSrc,
  softwareSrc,
  softwareAlt,
}) {
  return (
    <Card>
      <div className="w-full flex gap-xs items-center">
        <img
          src={memojiSrc}
          alt={`Memoji of ${name}`}
          className="w-[64px] flex-shrink-0"
        />
        <div className="flex-grow gap-3xs">
          {name}
          <div className="flex gap-3xs">
            <div className="flex flex-col text-xs">
              <span>Experience</span>
              <span>Motivation</span>
            </div>
            <div className="flex flex-col flex-grow justify-around">
              <PersonaBar step={expNum} />
              <PersonaBar step={motNum} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2xs">
        <span>{quote}</span>
        <p className="text-text-subtle text-xs  ">{p}</p>
      </div>
      <div className="flex flex-col gap-3xs items-start">
        <span className="text-text-subtle text-xs">
          Frequently Used Software
        </span>
        <img
          src={softwareSrc}
          alt={softwareAlt}
          className="h-md object-contain"
        />
      </div>
    </Card>
  );
}

export default UserPersona;
