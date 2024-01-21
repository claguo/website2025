import React, { useState } from "react";

function SplitHover(props) {
  const split = props.text.split("");
  const [italicStates, setItalicStates] = useState(split.map(() => true));

  const handleMouseEnter = (index) => {
    const newItalicStates = [...italicStates];
    newItalicStates[index] = !newItalicStates[index];
    setItalicStates(newItalicStates);
  };

  return (
    <h1 className="flex">
      {split.map((char, index) => (
        <div
          key={index}
          className="text-7xl lg:text-[12rem] font-mono text-dark-green cursor-default"
          onMouseEnter={() => handleMouseEnter(index)}
          style={italicStates[index] ? { ...props.conditionalStyle } : {}}
        >
          {char === " " ? "\u00A0" : char}
        </div>
      ))}
    </h1>
  );
}

export default SplitHover;
