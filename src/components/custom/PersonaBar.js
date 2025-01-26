import React from "react";

function PersonaBar({ step }) {
  let barWidth = "";

  if (step === 2) {
    barWidth = "w-1/2";
  } else if (step === 3) {
    barWidth = "w-full";
  }

  return (
    <div className="h-[8px] flex items-center">
      {/* step bar container */}
      <div className="relative h-[4px] bg-border-default rounded-full flex-grow">
        {/* step bar */}
        <div
          className={`absolute top-0 h-[4px] bg-text-default rounded-full ${barWidth}`}
        ></div>

        {/* circle 1 */}
        <div
          className={`w-[8px] h-[8px] absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full ${
            step >= 1 ? "bg-text-default" : "bg-border-default"
          }`}
        ></div>

        {/* circle 2 */}
        <div
          className={`w-[8px] h-[8px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full ${
            step >= 2 ? "bg-text-default" : "bg-border-default"
          }`}
        ></div>

        {/* circle 3 */}
        <div
          className={`w-[8px] h-[8px] absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full ${
            step >= 3 ? "bg-text-default" : "bg-border-default"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default PersonaBar;
