import React from "react";

function Tag({ text, theme }) {
  const colors = {
    ["mochi"]: "bg-bg-mochi text-text-mochi border-border-mochi",
    ["a11y"]: "bg-bg-a11y text-text-a11y border-border-a11y",
    ["eto"]: "bg-bg-eto text-text-eto border-border-eto",
    ["rcw"]: "bg-bg-rcw text-text-rcw border-border-rcw",
  };
  const themeColors = colors[theme] || "";

  return (
    <div
      className={`font-mono text-sm italic rounded-full px-3xs py-4xs border-[1px] ${themeColors}`}
    >
      {text}
    </div>
  );
}

export default Tag;
