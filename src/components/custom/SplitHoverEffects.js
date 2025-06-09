import React, { useState } from "react";

function SplitHover(props) {
  const split = props.text.split("");
  const [italicStates, setItalicStates] = useState(split.map(() => true));
  const colors = [
    "text-blue",
    "italic text-green",
    "text-pink",
    "text-text-default italic",
  ];

  const handleMouseEnter = (index) => {
    const newItalicStates = [...italicStates];
    newItalicStates[index] = !newItalicStates[index];
    setItalicStates(newItalicStates);
  };

  return (
    <div className="flex">
      {props.styling === "italic"
        ? split.map((char, index) => (
            <span
              key={index}
              className={`${props.className} ${
                italicStates[index] ? "" : "italic"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))
        : props.styling === "color"
          ? split.map((char, index) => (
              <div
                key={index}
                className={`${props.className} ${
                  italicStates[index]
                    ? colors[Math.floor(Math.random() * colors.length)]
                    : colors[Math.floor(Math.random() * colors.length)]
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {char === " " ? "\u00A0" : char}
              </div>
            ))
          : null}
    </div>
  );
}

export default SplitHover;
