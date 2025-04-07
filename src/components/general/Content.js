import React from "react";

function Content({ summary, paragraph, img, alt, children }) {
  return (
    <div className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-[1.5rem] text-xs lg:text-sm">
      <p className="lg:w-[33.33%] shrink-0 font-bold">{summary}</p>
      <div className="flex flex-col gap-[0.5rem]">
        <>
          {paragraph !== undefined ? <p>{paragraph}</p> : null}
          {img !== undefined ? <img src={img} alt={alt} className="" /> : null}
        </>
        {children}
      </div>
    </div>
  );
}

export default Content;
