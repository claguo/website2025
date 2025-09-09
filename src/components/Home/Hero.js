import React from "react";
import Button from "../buttons/Button";
import { MdArrowOutward } from "react-icons/md";

function Hero() {
  return (
    <div className="flex flex-col pt-3xl px-xs lg:px-[20px] pb-lg lg:pb-[120px] lg:gap-md gap-sm max-w-[405px]">
      <div className="text-sm">
        Improving access to healthcare and building design systems at
        <Button
          url="https://joinmochi.com/"
          text="&nbsp;Mochi Health"
          plainText={true}
        />
        . BFA in
        <Button
          url="https://id.risd.edu/"
          text="&nbsp;Design&nbsp;"
          plainText={true}
        />
        and
        <Button
          url="https://ctc.risd.edu/"
          text="Computation&nbsp;"
          plainText={true}
        />
        at RISD.
      </div>
      <div className="flex flex-col gap-0">
        <Button
          text="claireguo@gmail.com"
          onClick={() => (window.location = "mailto:claireguo@gmail.com")}
          plainText={true}
          icon={<MdArrowOutward className="" />}
        />
        <Button
          text="github"
          url="https://github.com/claguo"
          plainText={true}
          icon={<MdArrowOutward className="" />}
        />
        <Button
          text="linkedin"
          url="https://www.linkedin.com/in/claguo"
          plainText={true}
          icon={<MdArrowOutward className="" />}
        />
      </div>
    </div>
  );
}

export default Hero;
