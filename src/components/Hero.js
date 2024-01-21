import React from "react";
import ExternalURLButton from "./buttons/ExternalURLButton";
import SplitHover from "./SplitHoverEffects";

function Hero() {
  return (
    <div className="flex flex-col pt-[48vh]">
      <SplitHover text="claire" conditionalStyle={{ fontStyle: "italic" }} />
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-[2rem] items-end">
        <div className="flex gap-[2rem] lg:gap-[6rem]">
          <SplitHover conditionalStyle={{ color: "#19e98f" }} text="✿✿" />
          <SplitHover text="guo" conditionalStyle={{ fontStyle: "italic" }} />
        </div>

        <p className="lg:w-1/3 mb-[1rem]">
          Previously @ the&nbsp;
          <ExternalURLButton
            url="https://www.mlb.com/astros"
            text="Houston Astros"
            isButton={false}
          />
          &nbsp;and&nbsp;
          <ExternalURLButton
            url="https://www.ridehitch.com"
            text="Hitch"
            isButton={false}
          />
          . Currently pursuing a BFA in Industrial Design with a concentration
          in Computation @&nbsp;
          <ExternalURLButton
            url="https://www.risd.edu/"
            text="RISD."
            isButton={false}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;
