import React from "react";
import { useState } from "react";
import Button from "../buttons/Button";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

function Carousel({ title, items, delay = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
    // resetInterval();
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1) % items.length);
    // resetInterval();
  };

  return (
    <div className="w-full flex flex-col gap-xs lg:gap-sm items-center">
      <div className="flex flex-col lg:flex-row-reverse gap-xs lg:gap-md items-center">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="lg:w-[600px]"
        />
        <div className="flex flex-col gap-3xs lg:gap-2xs items-center lg:items-start">
          <span className="">{title}</span>
          <p className="text-center lg:text-left">
            {items[currentIndex].description}
          </p>
        </div>
      </div>

      <div className="flex gap-sm items-center">
        <Button
          icon={<IoMdArrowBack className="text-[20px] text-text-subtle" />}
          onClick={prevImage}
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
          icon={<IoMdArrowForward className="text-[20px] text-text-subtle" />}
          onClick={nextImage}
        />
      </div>
    </div>
  );
}

export default Carousel;
