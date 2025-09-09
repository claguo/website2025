import React from "react";

function ContentWrapper({ children, className }) {
  return (
    <section
      className={`
        flex flex-col text-text-default
        py-md gap-3xl w-full
        lg:px-lg lg:py-lg lg:gap-2xl lg:max-w-[928px]
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default ContentWrapper;
