import React from "react";
import TextStack from "./TextStack";

function HorizontalSection({ src, alt, title, description }) {
  return (
    <div className="flex flex-col lg:flex-row gap-xs lg:gap-md items-center justify-between">
      <TextStack header={title} className="font-medium">
        {description}
      </TextStack>
      <img src={src} alt={alt} className="w-[600px]" />
    </div>
  );
}

export default HorizontalSection;
