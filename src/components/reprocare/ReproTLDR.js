import React from "react";
import { useState } from "react";
import ContentWrapper from "../general/ContentWrapper";
import { MdArrowOutward } from "react-icons/md";
import Content from "../Content";
import { IoStarSharp } from "react-icons/io5";
import cover from "../../assets/imgs/reprocare/reprocover.png";

function ReproTLDR() {
  const externalUrl = "https://repro-care-world.netlify.app/";
  const handleButtonClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, "_blank");
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ContentWrapper>
      <div className="flex flex-col gap-[0.5rem] items-center">
        <IoStarSharp />
        <h2>tl;dr</h2>
      </div>
      <Content
        summary="Destigmatizing abortion and providing a sense of social support."
        paragraph="One of the biggest barriers to abortion care is a lack of social
        support. This project is an attempt to ameliorate this by displaying
        abortion-related data in a positive, approachable, interactive way."
      />
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleButtonClick}
      >
        <img src={cover} alt="Reproductive Care World front page with world stats" className={`${isHovered ? 'brightness-[0.5]' : ''}`}/>
        <div className={`cursor-pointer font-mono italic absolute inset-0 flex justify-center items-center backdrop-blur-[2px] text-white px-[3rem] gap-[0.5rem] ${isHovered ? "" : "opacity-0"}`}>
          <p>Go to web app</p>
          <MdArrowOutward/>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default ReproTLDR;
