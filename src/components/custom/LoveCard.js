import React, { useState, useEffect, useCallback } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const ref = useCallback((node) => {
    if (node) {
      const rect = node.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      });
    }
  }, []);

  return [ref, dimensions];
};

function LoveCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [refImg, { width: imgWidth, height: imgHeight }] = useSize();
  const imgX = isHovered ? mouseX - imgWidth / 2 : -1000;
  const imgY = isHovered ? mouseY - imgHeight / 2 : -1000;

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-sm py-[4px] cursor-default ${
          isHovered ? "italic text-pink font-medium" : ""
        }`}
      >
        ✶ {props.text}
      </div>

      <img
        className={`-z-10 fixed top-0 left-0 pointer-events-none absolute max-w-[216px] max-h-[216px] object-contain ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        src={props.src}
        ref={refImg}
        alt={props.text}
        style={{
          transform: `translate(${imgX}px, ${imgY}px)`,
        }}
      />
    </>
  );
}

export default LoveCard;
