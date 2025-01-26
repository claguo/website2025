import React from "react";
import ExternalURLButton from "../buttons/ExternalURLButton";
import SplitHover from "../custom/SplitHoverEffects";

function Hero() {
  return (
    <div
      className="flex flex-col text-center items-center mx-xs pt-[180px] pb-3xl gap-3xs 
      lg:justify-end lg:px-sm lg:h-[96vh] lg:gap-md"
    >
      <div className="flex flex-row lg:flex-row gap-xs lg:gap-md items-center">
        <SplitHover text="claire" styling="italic" />
        <div className="flex gap-[0.5em]">
          <SplitHover text="✶" styling="color" />
          <SplitHover text="✶" styling="color" />
        </div>
        <SplitHover text="guo" styling="italic" />
      </div>

      <div>
        <div className="text-sm">
          UI/UX designer @&nbsp;
          <ExternalURLButton
            url="https://joinmochi.com/"
            text="Mochi Health"
            plaintext={true}
          />
          .
        </div>
        <div className="text-sm">
          Previously @&nbsp;
          <ExternalURLButton
            url="https://www.mlb.com/astros"
            text="Houston Astros"
            plaintext={true}
          />
          ,&nbsp;
          <ExternalURLButton
            url="https://www.ridehitch.com"
            text="Hitch"
            plaintext={true}
          />
          , and&nbsp;
          <ExternalURLButton
            url="https://www.risd.edu/"
            text="RISD"
            plaintext={true}
          />
          .
        </div>
      </div>
    </div>
  );
}

export default Hero;
