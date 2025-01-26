import React from "react";

function HorizontalSection({ src, alt, title, description }) {
  return (
    <div className="flex flex-col lg:flex-row gap-xs lg:gap-md items-center justify-between">
      <div className="flex flex-col gap-3xs lg:gap-2xs items-center lg:items-start">
        <span className="font-medium">{title}</span>
        <p className="text-center lg:text-left">{description}</p>
      </div>
      <img src={src} alt={alt} className="w-[400px]" />
    </div>
  );
}

export default HorizontalSection;
