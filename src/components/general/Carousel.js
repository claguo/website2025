import React from "react";
import { useState } from "react";
import Button from "../buttons/Button";
import TextStack from "./TextStack";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

function Carousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const nextImage = () => {
    setImageLoading(true);
    setCurrentIndex((currentIndex + 1) % items.length);
    // resetInterval();
  };

  const prevImage = () => {
    setImageLoading(true);
    setCurrentIndex((currentIndex - 1) % items.length);
    // resetInterval();
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-xs">
      <div className="flex flex-col lg:flex-row-reverse gap-xs lg:gap-md items-center">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className={`w-[600px] object-fit transition-opacity duration-100 shrink-0 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={handleImageLoad}
        />
        <TextStack header={title} className="font-medium">
          {items[currentIndex].description}
        </TextStack>
      </div>

      <div className="flex gap-sm items-center">
        <Button
          icon={<IoMdArrowBack />}
          onClick={currentIndex === 0 ? undefined : prevImage}
          className={`hover:bg-bg-a11y rounded-full px-3xs hover:text-text-a11y text-md ${
            currentIndex === 0 ? "hidden" : ""
          }`}
        />
        <div className="flex gap-[4px]">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-[6px] h-[6px] rounded-full ${
                index === currentIndex ? "bg-text-default" : "bg-border-default"
              }`}
            ></div>
          ))}
        </div>
        <Button
          icon={<IoMdArrowForward />}
          onClick={nextImage}
          className="hover:bg-bg-a11y rounded-full px-3xs hover:text-text-a11y text-md"
        />
      </div>
    </div>
  );
}

export default Carousel;
